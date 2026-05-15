#!/usr/bin/env python3
"""
Mixer vidéo + audio avec moviepy
"""

import os
from moviepy.editor import VideoFileClip, AudioFileClip

OUTPUT_DIR = os.path.expanduser("~/gta6-vault/video_assets")
VIDEO_FILE = os.path.join(OUTPUT_DIR, "GTA6V_FrameByFrame_20260515_Test.mp4")
AUDIO_FILE = os.path.join(OUTPUT_DIR, "synthwave_audio.wav")
FINAL_FILE = os.path.join(OUTPUT_DIR, "GTA6V_FrameByFrame_20260515_FINAL.mp4")

def main():
    print("\n" + "=" * 60)
    print("GTA6 VAULT — Final Mix (moviepy)")
    print("=" * 60)
    
    print(f"\n📹 Loading video: {os.path.basename(VIDEO_FILE)}")
    video = VideoFileClip(VIDEO_FILE)
    print(f"   Duration: {video.duration}s")
    print(f"   Resolution: {video.size}")
    
    print(f"\n🎵 Loading audio: {os.path.basename(AUDIO_FILE)}")
    audio = AudioFileClip(AUDIO_FILE)
    print(f"   Duration: {audio.duration}s")
    
    print(f"\n🎬 Mixing audio + video...")
    final = video.set_audio(audio)
    
    print(f"✨ Writing final video: {os.path.basename(FINAL_FILE)}")
    final.write_videofile(
        FINAL_FILE,
        codec='libx264',
        audio_codec='aac',
        verbose=False,
        logger=None,
        threads=4
    )
    
    print(f"\n✅ FINAL VIDEO CREATED")
    print(f"   File: {FINAL_FILE}")
    
    file_size_mb = os.path.getsize(FINAL_FILE) / (1024 * 1024)
    print(f"   Size: {file_size_mb:.2f} MB")
    
    # Cleanup
    video.close()
    audio.close()
    final.close()
    
    print("\n" + "=" * 60)
    print("✅ READY FOR PRODUCTION")
    print("=" * 60)

if __name__ == "__main__":
    os.chdir(OUTPUT_DIR)
    main()
