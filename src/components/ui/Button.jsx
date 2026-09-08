/**
 * Button component for IdeaForge AI
 * Follows the professional light/blue design system.
 * 
 * Variants:
 * - primary: Solid blue background with white text (default)
 * - secondary: White background with subtle border and dark text
 * - outline: Transparent background with blue border and blue text
 * - ghost: Transparent background with text that darkens on hover
 * 
 * Sizes:
 * - sm: Compact for tight spaces, tags, or small cards
 * - md: Standard size for general interactions (default)
 * - lg: Prominent size for hero and main call-to-actions
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm shadow-blue-500/20 focus:ring-blue-500',
    secondary:
      'bg-white text-blue-700 border border-slate-300 hover:bg-blue-50/60 hover:border-blue-300 shadow-xs focus:ring-blue-500',
    outline:
      'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    purple:
      'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 shadow-sm shadow-purple-500/20 focus:ring-purple-500',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-300',
  };

  const sizes = {
    sm: 'text-xs px-3 py-2 sm:py-1.5 gap-1.5 min-h-[38px] sm:min-h-[34px]',
    md: 'text-sm px-4 py-2.5 sm:py-2 gap-2 min-h-[44px] sm:min-h-[40px]',
    lg: 'text-base px-5 py-3 sm:py-2.5 gap-2.5 min-h-[48px] sm:min-h-[44px]',
  };

  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
