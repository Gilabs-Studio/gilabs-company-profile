export function BlogImageFallback() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="300" fill="rgba(255, 255, 255, 0.05)" />
      <g opacity="0.3">
        <rect x="150" y="100" width="100" height="100" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
        <path
          d="M150 100 L200 150 L150 200"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M200 150 L250 100 L250 200 L200 150"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="200"
        y="230"
        textAnchor="middle"
        fill="rgba(255, 255, 255, 0.3)"
        fontSize="14"
        fontFamily="monospace"
      >
        Image not available
      </text>
    </svg>
  );
}

