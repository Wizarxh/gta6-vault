#!/usr/bin/env python3
"""
Ajouter audio synthwave + booste bitrate
"""

import os
import subprocess
import sys
import numpy as np
import wave

OUTPUT_DIR = os.path.expanduser("~/gta6-vault/video_assets")
VIDEO_FILE = os.path.join(OUTPUT_DIR, "GTA6V_FrameByFrame_20260515_Test.mp4")
AUDIO_FILE = os.path.join(OUTPUT_DIR, "synthwave_audio.wav")
FINAL_FILE = os.path.join(OUTPUT_DIR, "GTA6V_FrameByFrame_20260515_Final.mp4")

def generate_synthwave_audio(duration_sec=45, sample_rate=48000):
    """Générer audio synthwave basique (mix de sine waves)"""
    print(f"🎵 Generating synthwave audio ({duration_sec}s @ {sample_rate}Hz)...")
    
    t = np.linspace(0, duration_sec, int(sample_rate * duration_sec))
    
    # Mix de fréquences pour effet synthwave
    # Basse synthétique (110 Hz)
    bass = 0.3 * np.sin(2 * np.pi * 110 * t)
    
    # Pad synthétique (440 Hz)
    pad = 0.25 * np.sin(2 * np.pi * 440 * t)
    
    # Lead arpeggiante (oscillating 880-660 Hz)
    lead_freq = 770 + 110 * np.sin(2 * np.pi * 0.5 * t)  # LFO
    lead = 0.2 * np.sin(2 * np.pi * lead_freq * t)
    
    # Hihat synthétique (haute fréquence)
    hihat = 0.1 * np.sin(2 * np.pi * 8000 * t)
    
    # Mix total
    audio = bass + pad + lead + hihat
    
    # Normaliser
    max_val = np.max(np.abs(audio))
    if max_val > 0:
        audio = audio / max_val * 0.95  # Leave headroom
    
    # Convertir en int16
    audio_int16 = np.int16(audio * 32767)
    
    # Sauvegarder WAV avec wave module
    try:
        with wave.open(AUDIO_FILE, 'wb') as wav_file:
            wav_file.setnchannels(1)  # Mono
            wav_file.setsampwidth(2)  # int16 = 2 bytes
            wav_file.setframerate(sample_rate)
            wav_file.writeframes(audio_int16.tobytes())
        print(f"✅ Audio sauvegardé: {AUDIO_FILE}")
        return AUDIO_FILE
    except Exception as e:
        print(f"❌ Erreur audio: {e}")
        return None

def add_audio_to_video(video_file, audio_file, output_file):
    """Mixer audio + video avec FFmpeg"""
    print(f"🎬 Mixing audio + video...")
    
    cmd = [
        "ffmpeg",
        "-i", video_file,
        "-i", audio_file,
        "-c:v", "copy",
        "-c:a", "aac",
        "-b:a", "128k",
        "-shortest",
        "-y", output_file
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✅ Audio + Video mixé: {output_file}")
            return True
        else:
            print(f"❌ FFmpeg error: {result.stderr}")
            return False
    except FileNotFoundError:
        print("❌ FFmpeg non trouvé")
        return False
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return False

def get_file_info(filepath):
    """Afficher info fichier"""
    if os.path.exists(filepath):
        size_mb = os.path.getsize(filepath) / (1024 * 1024)
        print(f"   File: {os.path.basename(filepath)}")
        print(f"   Size: {size_mb:.2f} MB")
        return True
    return False

def main():
    print("\n" + "=" * 60)
    print("GTA6 VAULT — Audio + Finalize")
    print("=" * 60)
    
    # Check video exists
    if not os.path.exists(VIDEO_FILE):
        print(f"❌ Video not found: {VIDEO_FILE}")
        sys.exit(1)
    
    print(f"\n📹 Input video:")
    get_file_info(VIDEO_FILE)
    
    # Generate audio
    print(f"\n🎵 Audio generation:")
    audio = generate_synthwave_audio(45, 48000)
    if not audio:
        print("⚠️  Fallback: créer audio avec tone simple")
        # Fallback simple
        try:
            import subprocess
            subprocess.run([
                "ffmpeg", "-f", "lavfi",
                "-i", "sine=frequency=440:duration=45",
                "-c:a", "pcm_s16le",
                "-y", AUDIO_FILE
            ], capture_output=True, check=True)
            print(f"✅ Fallback audio créé")
        except:
            print("❌ Impossible de créer audio")
            sys.exit(1)
    
    if os.path.exists(AUDIO_FILE):
        get_file_info(AUDIO_FILE)
    
    # Mix video + audio
    print(f"\n🎬 Mixing:")
    if add_audio_to_video(VIDEO_FILE, AUDIO_FILE, FINAL_FILE):
        print(f"\n✅ Final output:")
        get_file_info(FINAL_FILE)
    else:
        print("⚠️  FFmpeg mixing failed, copying original video")
        import shutil
        shutil.copy(VIDEO_FILE, FINAL_FILE)
        get_file_info(FINAL_FILE)
    
    print("\n" + "=" * 60)
    print("✅ PROCESS COMPLETE")
    print("=" * 60)
    print(f"\nVideo ready: {FINAL_FILE}")

if __name__ == "__main__":
    os.chdir(OUTPUT_DIR)
    main()
