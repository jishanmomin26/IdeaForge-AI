/**
 * Button component for IdeaForge AI
 * Enhanced with modern tactile micro-interactions:
 * - Subtle hover lift & gentle scale
 * - Polished shadow depth
 * - Active press-down tactile feedback
 * - Fully accessible keyboard focus ring
 * 
 * Variants:
 * - primary: Solid blue with vibrant hover depth
 * - secondary: Crisp white with border and blue text
 * - outline: Transparent with blue border
 * - purple: Innovation/AI accent button
 * - ghost: Flat with hover background
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
    'inline-flex items-center justify-center font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer transition-all duration-150 ease-out active:scale-[0.98] active:translate-y-0 select-none';

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-lg hover:shadow-blue-500/25 active:bg-blue-800 shadow-sm shadow-blue-500/20 focus:ring-blue-500',
    secondary:
      'bg-white text-blue-700 border border-slate-300 hover:bg-blue-50/70 hover:border-blue-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-xs shadow-xs focus:ring-blue-500',
    outline:
      'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50/80 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-xs focus:ring-blue-500',
    purple:
      'bg-purple-600 text-white hover:bg-purple-700 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-lg hover:shadow-purple-500/25 active:bg-purple-800 shadow-sm shadow-purple-500/20 focus:ring-purple-500',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-300',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[38px] sm:min-h-[36px]',
    md: 'text-sm px-4.5 py-2 gap-2 min-h-[44px] sm:min-h-[40px]',
    lg: 'text-base px-6 py-2.5 sm:py-3 gap-2.5 min-h-[48px] sm:min-h-[46px] font-semibold',
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