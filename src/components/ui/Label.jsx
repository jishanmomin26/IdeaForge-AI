/**
 * Label component for IdeaForge AI form controls
 * Supports accessible htmlFor association and optional required indicator.
 */
export function Label({
  children,
  htmlFor,
  required = false,
  className = '',
  ...props
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-slate-700 ${className}`.trim()}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-1 text-red-500 font-bold" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

export default Label;
