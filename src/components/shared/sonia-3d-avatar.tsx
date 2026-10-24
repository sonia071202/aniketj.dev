"use client";

export function Sonia3DAvatar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-transparent ${className}`}
      aria-label="Animated cute bunny avatar"
      title="Animated bunny avatar"
    >
      <div className="bunny-avatar" aria-hidden="true">
        <span className="bunny-ear bunny-ear-left" />
        <span className="bunny-ear bunny-ear-right" />
        <span className="bunny-face">
          <span className="bunny-eye bunny-eye-left" />
          <span className="bunny-eye bunny-eye-right" />
          <span className="bunny-nose" />
          <span className="bunny-cheek bunny-cheek-left" />
          <span className="bunny-cheek bunny-cheek-right" />
        </span>
        <span className="bunny-body" />
      </div>
      <style jsx>{`
        .bunny-avatar { position: relative; width: 72%; height: 72%; animation: bunny-hop 1.8s ease-in-out infinite; }
        .bunny-ear { position: absolute; top: 0; width: 25%; height: 48%; border: 2px solid #c4b5fd; border-radius: 999px 999px 45% 45%; background: #f5f3ff; transform-origin: bottom center; }
        .bunny-ear-left { left: 22%; transform: rotate(-14deg); animation: bunny-ear-left 1.8s ease-in-out infinite; }
        .bunny-ear-right { right: 22%; transform: rotate(14deg); animation: bunny-ear-right 1.8s ease-in-out infinite; }
        .bunny-face { position: absolute; left: 10%; right: 10%; top: 24%; height: 52%; border-radius: 48% 48% 44% 44%; background: #f5f3ff; border: 2px solid #c4b5fd; }
        .bunny-eye { position: absolute; top: 38%; width: 9%; height: 13%; border-radius: 50%; background: #312e81; }
        .bunny-eye-left { left: 30%; } .bunny-eye-right { right: 30%; }
        .bunny-nose { position: absolute; left: 46%; top: 54%; width: 9%; height: 9%; border-radius: 50%; background: #f0abfc; }
        .bunny-cheek { position: absolute; top: 57%; width: 17%; height: 8%; border-radius: 50%; background: #fbcfe8; opacity: .8; }
        .bunny-cheek-left { left: 12%; } .bunny-cheek-right { right: 12%; }
        .bunny-body { position: absolute; left: 26%; right: 26%; bottom: 0; height: 34%; border-radius: 50% 50% 35% 35%; background: #ddd6fe; border: 2px solid #c4b5fd; }
        @keyframes bunny-hop { 0%, 100% { transform: translateY(3px) rotate(-2deg); } 50% { transform: translateY(-7px) rotate(2deg); } }
        @keyframes bunny-ear-left { 0%, 100% { transform: rotate(-14deg); } 50% { transform: rotate(-25deg); } }
        @keyframes bunny-ear-right { 0%, 100% { transform: rotate(14deg); } 50% { transform: rotate(25deg); } }
        @media (prefers-reduced-motion: reduce) { .bunny-avatar, .bunny-ear { animation: none; } }
      `}</style>
    </div>
  );
}
