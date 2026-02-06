import sys
from PIL import Image, ImageDraw, ImageFont

def create_placeholder(width, height, text, color_bg, color_text, filename):
    """Cria imagem de placeholder com texto centrado"""
    img = Image.new('RGB', (width, height), color=color_bg)
    draw = ImageDraw.Draw(img)
    
    # Tentar usar fonte padrão, senão usar fonte padrão do sistema
    try:
        font = ImageFont.truetype("arial.ttf", 60)
    except:
        font = ImageFont.load_default()
    
    # Calcular posição do texto para centralizar
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    draw.text((x, y), text, fill=color_text, font=font)
    img.save(filename, quality=95)
    print(f"Criado: {filename}")

# Criando imagens "ANTES" (tons mais escuros/pastel antes do tratamento)
create_placeholder(1200, 900, "ANTES", (220, 200, 210), (100, 100, 100), "public/images/1.jpg")
create_placeholder(1200, 900, "ANTES", (220, 200, 210), (100, 100, 100), "public/images/2.jpg")

# Criando imagens "DEPOIS" (tons mais claros/rosados após tratamento)
create_placeholder(1200, 900, "DEPOIS", (245, 235, 240), (150, 100, 120), "public/images/result-1.jpg")
create_placeholder(1200, 900, "DEPOIS", (245, 235, 240), (150, 100, 120), "public/images/result-2.jpg")

print("\n✅ Imagens de placeholder criadas com sucesso!")
