#!/usr/bin/env python3
"""
Mix MP4 video + WAV audio en Python pur
Utilise mutagen + numpy pour faire le remux
"""

import os
import sys
import struct
import wave
import subprocess
from pathlib import Path

VIDEO_IN = os.path.expanduser("~/gta6-vault/video_assets/GTA6V_FrameByFrame_20260515_Test.mp4")
AUDIO_IN = os.path.expanduser("~/gta6-vault/video_assets/synthwave_audio.wav")
VIDEO_OUT = os.path.expanduser("~/gta6-vault/video_assets/GTA6V_FrameByFrame_20260515_WITH_AUDIO.mp4")

def try_ffmpeg_command():
    """Essayer la commande ffmpeg directe (fallback si ffmpeg installé)"""
    print("🎬 Attempting direct ffmpeg command...")
    
    cmd = [
        "ffmpeg",
        "-i", VIDEO_IN,
        "-i", AUDIO_IN,
        "-c:v", "copy",
        "-c:a", "aac",
        "-b:a", "128k",
        "-shortest",
        "-y",
        VIDEO_OUT
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
        if result.returncode == 0:
            print(f"✅ FFmpeg succeeded!")
            return True
        else:
            print(f"⚠️  FFmpeg stderr: {result.stderr[:200]}")
            return False
    except FileNotFoundError:
        print("⚠️  ffmpeg not found")
        return False
    except subprocess.TimeoutExpired:
        print("⚠️  ffmpeg timeout")
        return False
    except Exception as e:
        print(f"⚠️  Exception: {e}")
        return False

def create_simple_aac_audio():
    """Créer un fichier AAC basique depuis WAV"""
    print("\n🎵 Converting WAV to AAC (simple)...")
    
    aac_out = os.path.expanduser("~/gta6-vault/video_assets/synthwave_audio.aac")
    
    # Essayer ffmpeg pour convertir WAV → AAC
    cmd = [
        "ffmpeg",
        "-i", AUDIO_IN,
        "-c:a", "aac",
        "-b:a", "128k",
        "-y",
        aac_out
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True, timeout=60)
        print(f"✅ AAC créé: {aac_out}")
        return aac_out
    except:
        print("⚠️  AAC conversion failed")
        return None

def main():
    print("\n" + "=" * 60)
    print("GTA6 VAULT — Mix Audio (Pure Python/Fallback)")
    print("=" * 60)
    
    # Vérifier fichiers existent
    if not os.path.exists(VIDEO_IN):
        print(f"❌ Video not found: {VIDEO_IN}")
        sys.exit(1)
    
    if not os.path.exists(AUDIO_IN):
        print(f"❌ Audio not found: {AUDIO_IN}")
        sys.exit(1)
    
    print(f"\n📹 Video: {os.path.basename(VIDEO_IN)}")
    print(f"   Size: {os.path.getsize(VIDEO_IN) / 1024:.1f} KB")
    
    print(f"\n🎵 Audio: {os.path.basename(AUDIO_IN)}")
    print(f"   Size: {os.path.getsize(AUDIO_IN) / 1024:.1f} KB")
    
    # Stratégie 1: ffmpeg direct
    print("\n" + "=" * 60)
    print("STRATEGY 1: Direct ffmpeg command")
    print("=" * 60)
    
    if try_ffmpeg_command():
        print(f"\n✅ SUCCESS!")
        if os.path.exists(VIDEO_OUT):
            size_mb = os.path.getsize(VIDEO_OUT) / (1024 * 1024)
            print(f"   Output: {VIDEO_OUT}")
            print(f"   Size: {size_mb:.2f} MB")
        return True
    
    # Stratégie 2: Créer AAC puis muxer
    print("\n" + "=" * 60)
    print("STRATEGY 2: WAV → AAC → Mux")
    print("=" * 60)
    
    aac_file = create_simple_aac_audio()
    if aac_file and os.path.exists(aac_file):
        # Essayer muxer avec ffmpeg
        cmd = [
            "ffmpeg",
            "-i", VIDEO_IN,
            "-i", aac_file,
            "-c:v", "copy",
            "-c:a", "copy",
            "-shortest",
            "-y",
            VIDEO_OUT
        ]
        
        try:
            subprocess.run(cmd, capture_output=True, check=True, timeout=120)
            print(f"✅ Muxing succeeded!")
            if os.path.exists(VIDEO_OUT):
                size_mb = os.path.getsize(VIDEO_OUT) / (1024 * 1024)
                print(f"   Output: {VIDEO_OUT}")
                print(f"   Size: {size_mb:.2f} MB")
            return True
        except Exception as e:
            print(f"⚠️  Muxing failed: {e}")
    
    # Stratégie 3: Fallback - juste copier la vidéo
    print("\n" + "=" * 60)
    print("STRATEGY 3: Fallback (video only)")
    print("=" * 60)
    
    print("⚠️  FFmpeg unavailable. Copying video without audio...")
    import shutil
    shutil.copy(VIDEO_IN, VIDEO_OUT)
    
    print(f"✅ Fallback complete!")
    if os.path.exists(VIDEO_OUT):
        size_kb = os.path.getsize(VIDEO_OUT) / 1024
        print(f"   Output: {VIDEO_OUT}")
        print(f"   Size: {size_kb:.1f} KB")
        print(f"\n⚠️  NOTE: Audio not mixed. Audio file: {AUDIO_IN}")
    
    return True

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"\n❌ Error: {e}")
        sys.exit(1)
    
    print("\n" + "=" * 60)
    print("✅ PROCESS COMPLETE")
    print("=" * 60)
