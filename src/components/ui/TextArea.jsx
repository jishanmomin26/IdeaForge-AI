/**
 * TextArea component for IdeaForge AI
 * Multiline input for descriptions, skill lists, and startup goals.
 * Follows the clean, light-mode educational design system.
 */
export function TextArea({
  id,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  required = false,
  error = false,
  className = '',
  ...props
}) {
  const baseStyles =
    'w-full px-3.5 py-2.5 bg-white text-slate-900 border rounded-lg text-sm shadow-xs transition-all duration-200 ease-out placeholder:text-slate-400 focus:outline-none disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed resize-y';

  const stateStyles = error
    ? 'border-red-400 text-red-900 focus:border-red-500 focus:ring-4 focus:ring-red-500/15'
    : 'border-slate-300 hover:border-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15';

  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      required={required}
      aria-invalid={error ? 'true' : undefined}
      className={`${baseStyles} ${stateStyles} ${className}`.trim()}
      {...props}
    />
  );
}

export default TextArea;
