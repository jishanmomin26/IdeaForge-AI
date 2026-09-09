import { NavLink as RouterNavLink } from 'react-router-dom';

/**
 * NavLink component for IdeaForge AI
 * Integrates with React Router while maintaining modern interactive tokens.
 * Features an active pill indicator, subtle bottom accent line, and smooth hover state.
 */
export function NavLink({
  to,
  href,
  children,
  onClick,
  className = '',
  ...props
}) {
  const target = to || href || '/';
  const baseStyles =
    'relative inline-flex items-center px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-150 ease-out cursor-pointer';

  return (
    <RouterNavLink
      to={target}
      end={target === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        `${baseStyles} ${
          isActive
            ? 'text-blue-700 bg-blue-50/90 font-bold border border-blue-200/70 shadow-xs'
            : 'text-slate-600 hover:text-blue-700 hover:bg-slate-100/70 border border-transparent'
        } ${className}`.trim()
      }
      {...props}
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <span
              className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-blue-600 animate-fade-in"
              aria-hidden="true"
            />
          )}
        </>
      )}
    </RouterNavLink>
  );
}

export default NavLink;