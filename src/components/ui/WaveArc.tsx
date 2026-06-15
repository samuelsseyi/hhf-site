type WaveArcProps = {
  fill: string;
  className?: string;
  flipped?: boolean;
};

export function WaveArc({ fill, className = "", flipped = false }: WaveArcProps) {
  return (
    <div
      className={`absolute ${flipped ? "top-0 rotate-180" : "bottom-0"} left-0 right-0 overflow-hidden leading-none pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "80px" }}
      >
        <path
          d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
