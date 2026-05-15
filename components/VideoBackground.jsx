export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)",
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/3571899/3571899-sd_640_360_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for better text readability */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Grid overlay for Vice City aesthetic */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          backgroundPosition: "0 0, 0 0",
        }}
      />
    </div>
  );
}
