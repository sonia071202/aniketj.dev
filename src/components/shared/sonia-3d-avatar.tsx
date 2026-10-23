"use client";

const SKETCHFAB_MODEL_URL =
  "https://sketchfab.com/models/533dd824fc4f4732ad733249cff10c55/embed?autostart=1&preload=1&transparent=1&ui_controls=0&ui_infos=0&ui_stop=0&ui_watermark=0&autospin=0.35&camera=0";

export function Sonia3DAvatar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-full bg-transparent ${className}`}
      aria-label="Interactive 3D Baby Yoda avatar"
      title="Cute Baby Yoda 3D avatar by Sabrina Zakir on Sketchfab"
    >
      <iframe
        title="Cute creature 3D avatar by Tongxin"
        src={SKETCHFAB_MODEL_URL}
        className="pointer-events-auto absolute inset-[-12%] h-[124%] w-[124%] border-0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        loading="lazy"
      />
    </div>
  );
}
