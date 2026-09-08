/**
 * Card component and modular subcomponents for IdeaForge AI
 * Follows the light-mode clean card specification:
 * - White background (#FFFFFF)
 * - Subtle slate border (#E2E8F0)
 * - Rounded corners (rounded-xl)
 * - Very subtle shadow (shadow-sm)
 */
export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div
      className={`p-6 border-b border-slate-100 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = '',
  as: Component = 'h3',
  ...props
}) {
  return (
    <Component
      className={`text-lg font-semibold text-slate-900 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p
      className={`mt-1 text-sm text-slate-500 ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-6 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div
      className={`p-6 bg-slate-50/50 border-t border-slate-100 flex items-center ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
