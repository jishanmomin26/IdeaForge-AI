/**
 * NavLink component for IdeaForge AI
 * Reusable navigation link supporting an active visual state.
 * Structure is ready for seamless React Router integration in Phase 13.
 */
export function NavLink({
  href = '#',
  children,
  isActive = false,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150';

  const activeStyles = isActive
    ? 'text-blue-600 bg-blue-50 font-semibold'
    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100';

  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`${baseStyles} ${activeStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}

export default NavLink;
