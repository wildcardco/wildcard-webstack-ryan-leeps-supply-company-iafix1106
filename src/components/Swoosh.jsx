export default function Swoosh({ className = "" }) {
  return (
    <svg
      className={`swoosh ${className}`.trim()}
      viewBox="0 0 240 48"
      aria-hidden="true"
      focusable="false"
    >
      <path className="swoosh-red" d="M2 28 H128" />
      <path
        className="swoosh-shade"
        d="M124 33C162 35 178 16 210 21C226 24 234 33 238 30"
      />
      <path
        className="swoosh-steel"
        d="M116 26C158 26 176 6 212 13C230 17 236 26 238 22"
      />
    </svg>
  );
}
