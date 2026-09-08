import { Button } from './Button';

/**
 * ErrorMessage component for IdeaForge AI
 * Displays a clean, professional error banner with an optional Retry action.
 * Follows the light educational design system:
 * - Subtle red tint background (#FEF2F2 / red-50)
 * - Light red border (#FECACA / red-200)
 * - Clear warning icon and bold title
 * - White/secondary Retry button with icon
 * 
 * Props:
 * - title: string (optional, defaults to 'Unable to Generate Startup Idea')
 * - message: string (required)
 * - onRetry: function (optional, callback triggered on retry click)
 * - retryLabel: string (optional, default 'Try Again')
 * - className: string (optional)
 */
export function ErrorMessage({
  title = 'Unable to Generate Startup Idea',
  message,
  onRetry,
  retryLabel = 'Try Again',
  className = '',
}) {
  if (!message && !title) return null;

  return (
    <div
      role="alert"
      className={`p-4 sm:p-5 rounded-xl bg-red-50 border border-red-200 text-slate-800 shadow-sm ${className}`.trim()}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            {title && (
              <h4 className="font-semibold text-sm sm:text-base text-red-950">
                {title}
              </h4>
            )}
            {message && (
              <p className="text-xs sm:text-sm text-red-800 mt-1 leading-relaxed">
                {message}
              </p>
            )}
          </div>
        </div>

        {onRetry && (
          <div className="shrink-0 pl-11 sm:pl-0">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={onRetry}
              className="border-red-200 bg-white hover:bg-red-50 text-red-900 font-medium shadow-none"
            >
              <svg
                className="w-3.5 h-3.5 mr-1.5 text-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {retryLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ErrorMessage;
