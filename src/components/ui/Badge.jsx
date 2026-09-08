/**
 * Badge component for IdeaForge AI
 * Used for tags, status indicators, and categories.
 * 
 * Variants:
 * - primary: Light blue background with blue text (default)
 * - secondary: Slate gray background with dark text
 * - success: Light emerald background with green text
 * - outline: Subtle border with dark text
 * 
 * Sizes:
 * - sm: Compact for inline chips or card tags
 * - md: Standard badge size (default)
 * - lg: Prominent tag size
 */
export function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center font-medium rounded-full transition-colors';

  const variants = {
    primary: 'bg-blue-50 text-blue-700 border border-blue-200/80',
    secondary: 'bg-slate-100 text-slate-700 border border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
    emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
    purple: 'bg-purple-50 text-purple-700 border border-purple-200/80',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    sky: 'bg-sky-50 text-sky-700 border border-sky-200/80',
    outline: 'bg-transparent text-slate-700 border border-slate-300',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5',
  };

  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;

  return (
    <span
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
