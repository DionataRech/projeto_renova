import os
from PIL import Image

ROOT = os.path.join(os.getcwd(), 'public', 'images')

exts = ('.jpg', '.jpeg', '.png')
quality = 80

converted = []

for dirpath, dirnames, filenames in os.walk(ROOT):
    for fname in filenames:
        if fname.lower().endswith(exts):
            src = os.path.join(dirpath, fname)
            rel = os.path.relpath(src, ROOT)
            name, _ = os.path.splitext(src)
            dst = name + '.webp'
            backup = src + '.bak'
            try:
                # create backup if not exists
                if not os.path.exists(backup):
                    os.replace(src, backup)
                    src_to_read = backup
                else:
                    src_to_read = src
                # open backup
                with Image.open(src_to_read) as im:
                    im = im.convert('RGB')
                    im.save(dst, 'WEBP', quality=quality, method=6)
                converted.append((src_to_read, dst))
                print(f'Converted: {src_to_read} -> {dst}')
            except Exception as e:
                print(f'ERROR converting {src}: {e}')

print('\nDone. Converted files:')
for s,d in converted:
    print('-', s, '->', d)
