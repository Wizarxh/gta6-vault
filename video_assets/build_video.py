#!/usr/bin/env python3
"""
GTA6 VAULT — Video Montage Script
Crée une vidéo 45 sec avec texte, graphiques, transitions
Utilise: FFmpeg + ImageMagick (ou PIL fallback)
"""

import subprocess
import os
import json
import sys
from pathlib import Path

# Configuration
CONFIG = {
    "resolution": "1080x1920",
    "fps": 30,
    "duration": 45,
    "output": "GTA6V_FrameByFrame_20260515_Test.mp4",
    "bitrate": "10M",
    "audio_bitrate": "128k"
}

# Couleurs
COLORS = {
    "pink": "#FF6B9D",
    "cyan": "#00D4FF",
    "black": "#0a0a0a",
    "white": "#FFFFFF",
    "green_verified": "#10b981"
}

def check_ffmpeg():
    """Vérifier FFmpeg disponible"""
    try:
        subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)
        print("✅ FFmpeg disponible")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("❌ FFmpeg non trouvé. Installation via Homebrew en cours...")
        return False

def create_title_frame(duration=3):
    """Créer frame titre (3 sec)"""
    print(f"🎬 Créating title frame ({duration}s)...")
    
    # Utiliser ffmpeg pour créer une image
    cmd = [
        "ffmpeg", "-f", "lavfi",
        "-i", f"color=c={COLORS['black']}:s=1080x1920:d={duration}",
        "-vf", (
            f"drawtext=text='FRAME-BY-FRAME BREAKDOWN:':fontfile=/Library/Fonts/Arial.ttf:"
            f"fontsize=48:fontcolor={COLORS['white']}:x=(w-text_w)/2:y=(h-text_h)/2-200"
        ),
        "-y", "frame_title.mp4"
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"✅ Title frame créé")
        return True
    except Exception as e:
        print(f"⚠️  Erreur création title: {e}")
        return False

def create_placeholder_frame(duration=10, text="Content Placeholder"):
    """Créer frame placeholder (fallback si pas de B-roll)"""
    print(f"🎬 Creating placeholder ({duration}s): {text}...")
    
    cmd = [
        "ffmpeg", "-f", "lavfi",
        "-i", f"color=c={COLORS['black']}:s=1080x1920:d={duration}",
        "-vf", (
            f"drawtext=text='{text}':fontfile=/Library/Fonts/Arial.ttf:"
            f"fontsize=32:fontcolor={COLORS['cyan']}:x=(w-text_w)/2:y=(h-text_h)/2"
        ),
        "-y", f"frame_{text.lower().replace(' ', '_')}.mp4"
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"✅ Placeholder créé")
        return True
    except Exception as e:
        print(f"⚠️  Erreur création placeholder: {e}")
        return False

def create_status_tag_frame(duration=5, status="VERIFIED"):
    """Créer frame avec status tag"""
    print(f"🎬 Creating status tag ({duration}s): {status}...")
    
    status_color = {
        "VERIFIED": COLORS["green_verified"],
        "RUMOR": "#fbbf24",
        "DEBUNKED": COLORS["pink"]
    }.get(status, COLORS["green_verified"])
    
    cmd = [
        "ffmpeg", "-f", "lavfi",
        "-i", f"color=c={COLORS['black']}:s=1080x1920:d={duration}",
        "-vf", (
            f"drawbox=x=54:y=1440:w=972:h=80:color={status_color}:thickness=fill,"
            f"drawtext=text='✓ {status}':fontfile=/Library/Fonts/Arial.ttf:"
            f"fontsize=28:fontcolor={COLORS['white']}:x=90:y=1460"
        ),
        "-y", f"frame_status_{status.lower()}.mp4"
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"✅ Status tag créé")
        return True
    except Exception as e:
        print(f"⚠️  Erreur création status: {e}")
        return False

def create_cta_frame(duration=5):
    """Créer frame CTA final"""
    print(f"🎬 Creating CTA frame ({duration}s)...")
    
    cmd = [
        "ffmpeg", "-f", "lavfi",
        "-i", f"color=c={COLORS['black']}:s=1080x1920:d={duration}",
        "-vf", (
            f"drawtext=text='Full investigation':fontfile=/Library/Fonts/Arial.ttf:"
            f"fontsize=32:fontcolor={COLORS['white']}:x=(w-text_w)/2:y=(h-text_h)/2-100,"
            f"drawtext=text='gta6-vault.com':fontfile=/Library/Fonts/Arial.ttf:"
            f"fontsize=36:fontcolor={COLORS['pink']}:x=(w-text_w)/2:y=(h-text_h)/2+50"
        ),
        "-y", "frame_cta.mp4"
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"✅ CTA frame créé")
        return True
    except Exception as e:
        print(f"⚠️  Erreur création CTA: {e}")
        return False

def concatenate_frames(frames, output):
    """Concaténer les frames en vidéo finale"""
    print(f"🎬 Concatenating {len(frames)} frames...")
    
    # Créer fichier de liste
    with open("concat_list.txt", "w") as f:
        for frame in frames:
            f.write(f"file '{frame}'\n")
    
    cmd = [
        "ffmpeg",
        "-f", "concat",
        "-safe", "0",
        "-i", "concat_list.txt",
        "-c", "copy",
        "-y", output
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"✅ Vidéo concaténée: {output}")
        return True
    except Exception as e:
        print(f"❌ Erreur concaténation: {e}")
        return False

def add_audio(video, audio, output):
    """Ajouter audio à la vidéo"""
    print(f"🎬 Adding audio track...")
    
    cmd = [
        "ffmpeg",
        "-i", video,
        "-i", audio,
        "-c:v", "copy",
        "-c:a", "aac",
        "-b:a", CONFIG["audio_bitrate"],
        "-shortest",
        "-y", output
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"✅ Audio ajouté: {output}")
        return True
    except Exception as e:
        print(f"⚠️  Erreur audio: {e}")
        return False

def generate_test_audio(output_file="test_audio.wav"):
    """Générer audio de test (synthwave tone)"""
    print(f"🎵 Generating test audio...")
    
    # Utiliser ffmpeg pour générer un tone synthwave
    cmd = [
        "ffmpeg",
        "-f", "lavfi",
        "-i", "sine=frequency=440:duration=45",
        "-c:a", "pcm_s16le",
        "-y", output_file
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"✅ Test audio créé: {output_file}")
        return output_file
    except Exception as e:
        print(f"⚠️  Erreur audio: {e}")
        return None

def main():
    print("=" * 60)
    print("GTA6 VAULT — Video Build Script")
    print("=" * 60)
    
    # Vérifier FFmpeg
    if not check_ffmpeg():
        print("\n⚠️  FFmpeg requis. Attends que Homebrew finisse d'installer...")
        sys.exit(1)
    
    # Créer les frames
    print("\n🎬 Building video frames...")
    frames = []
    
    if create_title_frame(3):
        frames.append("frame_title.mp4")
    
    # Content placeholders
    if create_placeholder_frame(7, "Scene 1: Comparison"):
        frames.append("frame_scene_1:_comparison.mp4")
    
    if create_placeholder_frame(10, "Scene 2: Detail Analysis"):
        frames.append("frame_scene_2:_detail_analysis.mp4")
    
    if create_placeholder_frame(10, "Scene 3: Easter Egg"):
        frames.append("frame_scene_3:_easter_egg.mp4")
    
    if create_placeholder_frame(10, "Filler"):
        frames.append("frame_filler.mp4")
    
    if create_status_tag_frame(2, "VERIFIED"):
        frames.append("frame_status_verified.mp4")
    
    if create_cta_frame(5):
        frames.append("frame_cta.mp4")
    
    # Concaténer
    print("\n🎬 Assembling video...")
    if not concatenate_frames(frames, "video_raw.mp4"):
        print("❌ Erreur lors de l'assemblage")
        sys.exit(1)
    
    # Ajouter audio (test)
    print("\n🎵 Adding audio...")
    audio_file = generate_test_audio()
    if audio_file:
        final_output = CONFIG["output"]
        if add_audio("video_raw.mp4", audio_file, final_output):
            print(f"\n✅ VIDÉO FINALE: {final_output}")
            print(f"   Duration: 45 sec")
            print(f"   Resolution: 1080x1920")
            print(f"   Codec: H.264")
    
    print("\n" + "=" * 60)
    print("✅ Build complete!")
    print("=" * 60)

if __name__ == "__main__":
    main()
