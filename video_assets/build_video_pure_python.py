#!/usr/bin/env python3
"""
GTA6 VAULT — Video Build (Pure Python)
Crée vidéo 45 sec avec PIL + imageio (zéro dépendances système)
"""

import os
import sys
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import imageio

# ============================================================================
# CONFIGURATION
# ============================================================================

RESOLUTION = (1080, 1920)
FPS = 30
DURATION = 45
OUTPUT_FILE = "GTA6V_FrameByFrame_20260515_Test.mp4"

# Couleurs (RGB)
COLORS = {
    "pink": (255, 107, 157),        # #FF6B9D
    "cyan": (0, 212, 255),          # #00D4FF
    "black": (10, 10, 10),          # #0a0a0a
    "white": (255, 255, 255),       # #FFFFFF
    "green": (16, 185, 129),        # #10b981 (verified)
    "yellow": (251, 191, 36),       # #fbbf24 (rumor)
    "dark_gray": (26, 26, 26),      # #1a1a1a
}

# ============================================================================
# FONCTIONS UTILITAIRES
# ============================================================================

def create_blank_frame(duration_frames=None, color="black"):
    """Créer une image noire vierge"""
    img = Image.new("RGB", RESOLUTION, COLORS[color])
    if duration_frames:
        return [np.array(img) for _ in range(duration_frames)]
    return img

def add_text(img, text, position, font_size=32, color="white", bold=False, shadow=True):
    """Ajouter du texte à une image"""
    draw = ImageDraw.Draw(img)
    
    # Essayer charger une font, fallback à default
    try:
        font_path = "/System/Library/Fonts/Arial.ttf"
        font = ImageFont.truetype(font_path, font_size)
    except:
        font = ImageFont.load_default()
    
    # Calculer position si relative
    if isinstance(position, str):
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        if position == "center":
            position = (
                (RESOLUTION[0] - text_width) // 2,
                (RESOLUTION[1] - text_height) // 2
            )
        elif position == "center-top":
            position = (
                (RESOLUTION[0] - text_width) // 2,
                200
            )
        elif position == "center-bottom":
            position = (
                (RESOLUTION[0] - text_width) // 2,
                RESOLUTION[1] - 300
            )
    
    # Drop shadow
    if shadow:
        shadow_color = (0, 0, 0)
        shadow_pos = (position[0] + 2, position[1] + 2)
        draw.text(shadow_pos, text, font=font, fill=shadow_color)
    
    # Texte principal
    draw.text(position, text, font=font, fill=COLORS[color])
    return img

def create_title_frame(duration_sec=3):
    """Frame 0-3 sec: Titre HOOK"""
    print(f"  🎬 Creating title frame ({duration_sec}s)...")
    frames = []
    
    for frame_num in range(duration_sec * FPS):
        img = create_blank_frame()
        
        # Fade in du texte (première 0.5 sec)
        opacity = min(1.0, (frame_num / (0.5 * FPS)))
        
        # Créer une image temporaire pour le texte
        text_img = Image.new("RGBA", RESOLUTION, (0, 0, 0, 0))
        text_draw = ImageDraw.Draw(text_img)
        
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 48)
        except:
            font = ImageFont.load_default()
        
        text = "FRAME-BY-FRAME BREAKDOWN:"
        bbox = text_draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        text_pos = (
            (RESOLUTION[0] - text_width) // 2,
            (RESOLUTION[1] - text_height) // 2 - 200
        )
        
        # Ajouter drop shadow
        shadow_color = (0, 0, 0, int(180 * opacity))
        text_draw.text(
            (text_pos[0] + 2, text_pos[1] + 2),
            text,
            font=font,
            fill=shadow_color
        )
        
        # Texte principal avec opacity
        main_color = (*COLORS["white"], int(255 * opacity))
        text_draw.text(text_pos, text, font=font, fill=main_color)
        
        # Convertir base frame RGB en RGBA pour composer
        img_rgba = Image.new("RGBA", RESOLUTION)
        img_rgba.paste(Image.new("RGB", RESOLUTION, COLORS["black"]))
        img_rgba.paste(text_img, (0, 0), text_img)
        
        frames.append(np.array(img_rgba.convert("RGB")))
    
    return frames

def create_content_frame(duration_sec, label, style="comparison"):
    """Frames de contenu avec texte + graphiques"""
    print(f"  🎬 Creating content frame ({duration_sec}s): {label}...")
    frames = []
    
    for frame_num in range(duration_sec * FPS):
        img = create_blank_frame()
        draw = ImageDraw.Draw(img)
        
        # Titre de la scene
        try:
            font_title = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 32)
            font_body = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 24)
        except:
            font_title = ImageFont.load_default()
            font_body = ImageFont.load_default()
        
        # Texte principal
        main_text = label
        bbox = draw.textbbox((0, 0), main_text, font=font_title)
        main_width = bbox[2] - bbox[0]
        main_pos = ((RESOLUTION[0] - main_width) // 2, 400)
        
        # Drop shadow + main text
        draw.text((main_pos[0] + 2, main_pos[1] + 2), main_text, font=font_title, fill=(0, 0, 0))
        draw.text(main_pos, main_text, font=font_title, fill=COLORS["cyan"])
        
        # Graphique simple (rectangle highlight)
        if style == "comparison":
            # Split screen hint
            draw.rectangle([50, 600, 500, 1200], outline=COLORS["pink"], width=3)
            draw.rectangle([580, 600, 1030, 1200], outline=COLORS["cyan"], width=3)
            
            left_text = "2002"
            right_text = "2026"
            draw.text((200, 650), left_text, font=font_body, fill=COLORS["white"])
            draw.text((750, 650), right_text, font=font_body, fill=COLORS["white"])
        
        elif style == "detail":
            # Zoom rectangle
            draw.rectangle([200, 800, 880, 1400], outline=COLORS["cyan"], width=4)
            zoom_text = "DETAIL ZOOM"
            draw.text((400, 850), zoom_text, font=font_body, fill=COLORS["pink"])
        
        frames.append(np.array(img))
    
    return frames

def create_status_frame(duration_sec=2, status="VERIFIED"):
    """Frame avec status tag (bottom third)"""
    print(f"  🎬 Creating status frame ({duration_sec}s): {status}...")
    frames = []
    
    # Couleur selon status
    status_colors = {
        "VERIFIED": "green",
        "RUMOR": "yellow",
        "DEBUNKED": "pink"
    }
    status_color = status_colors.get(status, "green")
    
    for frame_num in range(duration_sec * FPS):
        img = create_blank_frame()
        draw = ImageDraw.Draw(img)
        
        # Rectangle de fond pour status tag
        tag_top = 1440
        tag_height = 80
        tag_left = 54
        tag_width = 972
        
        draw.rectangle(
            [tag_left, tag_top, tag_left + tag_width, tag_top + tag_height],
            fill=COLORS[status_color]
        )
        
        # Texte du status
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 28)
        except:
            font = ImageFont.load_default()
        
        status_text = f"✓ {status} — Official Rockstar Trailer 2"
        draw.text((tag_left + 20, tag_top + 20), status_text, font=font, fill=COLORS["white"])
        
        frames.append(np.array(img))
    
    return frames

def create_cta_frame(duration_sec=5):
    """Frame CTA final (40-45 sec)"""
    print(f"  🎬 Creating CTA frame ({duration_sec}s)...")
    frames = []
    
    for frame_num in range(duration_sec * FPS):
        img = create_blank_frame()
        draw = ImageDraw.Draw(img)
        
        try:
            font_large = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 36)
            font_medium = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 28)
        except:
            font_large = ImageFont.load_default()
            font_medium = ImageFont.load_default()
        
        # Fade in effect
        opacity = min(1.0, (frame_num / (0.5 * FPS)))
        
        # Line 1: "Full investigation"
        text1 = "Full investigation"
        bbox1 = draw.textbbox((0, 0), text1, font=font_large)
        width1 = bbox1[2] - bbox1[0]
        pos1 = ((RESOLUTION[0] - width1) // 2, 800)
        
        # Line 2: URL
        text2 = "gta6-vault.com"
        bbox2 = draw.textbbox((0, 0), text2, font=font_large)
        width2 = bbox2[2] - bbox2[0]
        pos2 = ((RESOLUTION[0] - width2) // 2, 900)
        
        # Drop shadows
        draw.text((pos1[0] + 2, pos1[1] + 2), text1, font=font_large, fill=(0, 0, 0))
        draw.text((pos2[0] + 2, pos2[1] + 2), text2, font=font_large, fill=(0, 0, 0))
        
        # Main text
        draw.text(pos1, text1, font=font_large, fill=COLORS["white"])
        draw.text(pos2, text2, font=font_large, fill=COLORS["pink"])
        
        # Sub-text
        text3 = "Follow @gta6vault for more"
        draw.text((200, 1050), text3, font=font_medium, fill=COLORS["cyan"])
        
        # Logo watermark (top-left, very subtle)
        watermark = "GTA6 VAULT"
        draw.text((20, 20), watermark, font=font_medium, fill=(255, 255, 255))
        
        frames.append(np.array(img))
    
    return frames

# ============================================================================
# MAIN BUILD FUNCTION
# ============================================================================

def build_video():
    """Assembler tous les frames en vidéo 45 sec"""
    print("\n" + "=" * 60)
    print("GTA6 VAULT — Video Build (Pure Python)")
    print("=" * 60)
    
    all_frames = []
    
    # SCENE 1: Hook (0-3 sec)
    print("\n📹 Building scenes...")
    all_frames.extend(create_title_frame(3))
    
    # SCENE 2: Content (3-25 sec)
    all_frames.extend(create_content_frame(7, "Scene 1: Vice City Comparison", "comparison"))
    all_frames.extend(create_content_frame(10, "Scene 2: Easter Egg Revealed", "detail"))
    all_frames.extend(create_content_frame(8, "Scene 3: Hidden Details", "detail"))
    
    # SCENE 3: Status tag (25-27 sec)
    all_frames.extend(create_status_frame(2, "VERIFIED"))
    
    # SCENE 4: Filler/padding (27-40 sec)
    all_frames.extend(create_content_frame(13, "Full analysis available online", "comparison"))
    
    # SCENE 5: CTA (40-45 sec)
    all_frames.extend(create_cta_frame(5))
    
    # Vérifier nombre de frames
    expected_frames = DURATION * FPS
    print(f"\n📊 Frames: {len(all_frames)} / {expected_frames} expected")
    
    if len(all_frames) != expected_frames:
        print(f"⚠️  Frame mismatch! Adjusting...")
        if len(all_frames) < expected_frames:
            # Ajouter des frames noires
            diff = expected_frames - len(all_frames)
            all_frames.extend([
                np.array(create_blank_frame()[0]) 
                for _ in range(diff)
            ])
        else:
            # Couper
            all_frames = all_frames[:expected_frames]
    
    # Écrire la vidéo
    print(f"\n🎬 Encoding video: {OUTPUT_FILE}...")
    print(f"   Resolution: {RESOLUTION}")
    print(f"   FPS: {FPS}")
    print(f"   Duration: {DURATION} sec")
    print(f"   Frames: {len(all_frames)}")
    
    try:
        writer = imageio.get_writer(
            OUTPUT_FILE,
            fps=FPS,
            codec='libx264'
        )
        
        for i, frame in enumerate(all_frames):
            writer.append_data(frame)
            if (i + 1) % (FPS * 10) == 0:
                progress = (i + 1) / len(all_frames) * 100
                print(f"   Progress: {progress:.1f}%")
        
        writer.close()
        print(f"\n✅ Video saved: {OUTPUT_FILE}")
        
        # Vérifier file size
        file_size = os.path.getsize(OUTPUT_FILE) / (1024 * 1024)
        print(f"   File size: {file_size:.1f} MB")
        
        return True
    
    except Exception as e:
        print(f"\n❌ Error encoding video: {e}")
        return False

# ============================================================================
# MAIN
# ============================================================================

if __name__ == "__main__":
    # Change to workspace directory
    os.chdir(os.path.expanduser("~/gta6-vault/video_assets"))
    
    success = build_video()
    
    if success:
        print("\n" + "=" * 60)
        print("✅ BUILD COMPLETE")
        print("=" * 60)
        sys.exit(0)
    else:
        print("\n" + "=" * 60)
        print("❌ BUILD FAILED")
        print("=" * 60)
        sys.exit(1)
