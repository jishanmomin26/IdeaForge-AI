/**
 * Spinner component for IdeaForge AI
 * Subtle, professional animated SVG loading indicator following the light educational design system.
 * 
 * Props:
 * - size: 'sm' (16px), 'md' (24px, default), 'lg' (32px), 'xl' (48px)
 * - color: 'primary' (blue-600, default), 'white' (text-white), 'slate' (text-slate-500), 'current' (currentColor)
 * - className: additional styling classes
 */
export function Spinner({
  size = 'md',
  color = 'primary',
  className = '',
  ...props
}) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const colors = {
    primary: 'text-blue-600',
    white: 'text-white',
    slate: 'text-slate-500',
    current: 'text-current',
  };

  const sizeClass = sizes[size] || sizes.md;
  const colorClass = colors[color] || colors.primary;

  return (
    <svg
      className={`animate-spin ${sizeClass} ${colorClass} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="status"
      aria-label="Loading"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}

export default Spinner;
