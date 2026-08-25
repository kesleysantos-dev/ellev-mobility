export default function ImagePlaceholder({ label, className = '' }) {
  return (
    <div className={`img-placeholder ${className}`}>
      <svg viewBox="0 0 120 60" className="img-placeholder__icon" aria-hidden="true">
        <circle cx="24" cy="46" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="90" cy="46" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M24 46 L46 22 H70 L90 46 M46 22 L54 34 H80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="img-placeholder__label">{label}</span>
    </div>
  )
}
