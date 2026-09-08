/**
 * Container component for IdeaForge AI
 * Centers content horizontally with responsive padding and max-width options.
 * 
 * Sizes:
 * - sm: max-w-3xl (768px)
 * - md: max-w-5xl (1024px)
 * - lg: max-w-6xl (1152px, default per design system)
 * - xl: max-w-7xl (1280px)
 * - full: max-w-full
 */
export function Container({
  children,
  size = 'lg',
  className = '',
  as: Component = 'div',
  ...props
}) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const maxWidth = sizes[size] || sizes.lg;

  return (
    <Component
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
