import sys
import os
import cv2
import numpy as np
from PIL import Image
import shutil

def ensure_dir(p):
    if not os.path.exists(p):
        os.makedirs(p, exist_ok=True)

def make_mask(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5,5), 0)
    _, th = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # If background is white and subject dark, invert mask
    white_ratio = (th == 255).mean()
    if white_ratio < 0.2:
        th = 255 - th

    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7,7))
    th = cv2.morphologyEx(th, cv2.MORPH_CLOSE, kernel, iterations=2)
    th = cv2.morphologyEx(th, cv2.MORPH_OPEN, kernel, iterations=2)

    contours, _ = cv2.findContours(th, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if contours:
        c = max(contours, key=cv2.contourArea)
        mask = np.zeros_like(th)
        cv2.drawContours(mask, [c], -1, 255, -1)
    else:
        mask = th

    # Smooth edges
    mask = cv2.GaussianBlur(mask, (11,11), 0)
    mask_f = (mask.astype(np.float32) / 255.0)
    return mask_f


def process(src_path, dest_dir, dest_name='professional.jpg'):
    ensure_dir(dest_dir)
    if not os.path.isfile(src_path):
        print(f"Source file not found: {src_path}")
        return 2

    # Copy original as backup
    base_name = os.path.basename(src_path)
    backup_name = f"original_{base_name}"
    backup_path = os.path.join(dest_dir, backup_name)
    shutil.copy2(src_path, backup_path)
    print(f"Backup saved to {backup_path}")

    # Read image
    img = cv2.imread(src_path, cv2.IMREAD_COLOR)
    if img is None:
        print("Failed to read image with OpenCV.")
        return 3

    h, w = img.shape[:2]

    mask = make_mask(img)

    # Create soft clinic background: base white + subtle pink blurred ellipse
    bg = np.full_like(img, (255,255,255), dtype=np.uint8)
    overlay = bg.copy().astype(np.float32)

    # Pink color (R,G,B) ~= (255,240,244) -> in BGR
    pink_bgr = (244,240,255)
    center = (int(w*0.47), int(h*0.45))
    axes = (int(w*0.6), int(h*0.6))
    cv2.ellipse(overlay, center, axes, 0, 0, 360, pink_bgr, -1, cv2.LINE_AA)
    overlay = cv2.GaussianBlur(overlay.astype(np.uint8), (151,151), 0)

    # Blend overlay subtle
    bg = cv2.addWeighted(bg, 0.6, overlay, 0.4, 0)

    # Composite
    mask_3 = np.dstack([mask, mask, mask])
    result = (img.astype(np.float32) * mask_3 + bg.astype(np.float32) * (1.0 - mask_3)).astype(np.uint8)

    dst_path = os.path.join(dest_dir, dest_name)
    cv2.imwrite(dst_path, result, [int(cv2.IMWRITE_JPEG_QUALITY), 95])

    # Save preview PNG with transparency for review
    rgba = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    alpha = (mask * 255).astype(np.uint8)
    rgba[:, :, 3] = alpha
    preview_path = os.path.join(dest_dir, os.path.splitext(dest_name)[0] + '_preview.png')
    cv2.imwrite(preview_path, rgba)

    print(f"Processed image saved to {dst_path}")
    print(f"Preview with transparency saved to {preview_path}")
    return 0

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: process_talia_image.py <source-path> <dest-dir> [dest-name]")
        sys.exit(1)
    src = sys.argv[1]
    dest = sys.argv[2]
    name = sys.argv[3] if len(sys.argv) > 3 else 'professional.jpg'
    code = process(src, dest, name)
    sys.exit(code)
