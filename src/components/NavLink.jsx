import { NavLink as RouterNavLink } from 'react-router-dom';

/**
 * NavLink component for IdeaForge AI
 * Integrates with React Router while maintaining existing design tokens.
 * Automatically computes active state for client-side navigation.
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
    'inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150';

  return (
    <RouterNavLink
      to={target}
      end={target === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        `${baseStyles} ${
          isActive
            ? 'text-blue-600 bg-blue-50 font-semibold'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
        } ${className}`.trim()
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  );
}

export default NavLink;
