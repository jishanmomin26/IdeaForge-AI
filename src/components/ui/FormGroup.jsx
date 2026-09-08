import { Label } from './Label';

/**
 * FormGroup component for IdeaForge AI
 * Composes Label, form control (input/select/textarea), error message, and helper text.
 * Ensures consistent spacing and accessible associations across forms.
 */
export function FormGroup({
  label,
  htmlFor,
  required = false,
  helperText,
  error,
  children,
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`.trim()} {...props}>
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      {children}
      {error ? (
        <p className="text-xs text-red-600 font-medium" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
}

export default FormGroup;
