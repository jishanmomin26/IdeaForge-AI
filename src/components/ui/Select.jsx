/**
 * Select component for IdeaForge AI
 * Supports both an `options` array or passing custom <option> children.
 * Follows the professional light design system with blue focus state.
 */
export function Select({
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder,
  disabled = false,
  required = false,
  error = false,
  children,
  className = '',
  ...props
}) {
  const baseStyles =
    'w-full px-3.5 py-2.5 bg-white text-slate-900 border rounded-lg text-sm shadow-xs transition-all duration-200 ease-out focus:outline-none disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed';

  const stateStyles = error
    ? 'border-red-400 text-red-900 focus:border-red-500 focus:ring-4 focus:ring-red-500/15'
    : 'border-slate-300 hover:border-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15';

  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      aria-invalid={error ? 'true' : undefined}
      className={`${baseStyles} ${stateStyles} ${className}`.trim()}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children
        ? children
        : options.map((opt) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const label = typeof opt === 'object' ? opt.label : opt;
            const isOptDisabled = typeof opt === 'object' ? opt.disabled : false;
            return (
              <option key={val} value={val} disabled={isOptDisabled}>
                {label}
              </option>
            );
          })}
    </select>
  );
}

export default Select;
