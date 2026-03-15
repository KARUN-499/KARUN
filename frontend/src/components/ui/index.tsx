// ── Button ──────────────────────────────────────────────────────────
import React from 'react';
import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary', size = 'md', loading, children, className, disabled, ...rest
}) => (
  <button
    className={clsx(
      'btn',
      variant === 'primary'   && 'btn-primary',
      variant === 'secondary' && 'btn-secondary',
      variant === 'danger'    && 'btn-danger',
      variant === 'ghost'     && 'btn bg-transparent text-gray-600 hover:bg-gray-100',
      size === 'sm'  && 'px-3 py-1.5 text-xs',
      size === 'lg'  && 'px-6 py-3 text-base',
      className
    )}
    disabled={disabled || loading}
    {...rest}
  >
    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
    {children}
  </button>
);

// ── Input ────────────────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...rest }, ref) => (
    <div className="w-full">
      {label && <label className="label">{label}</label>}
      <input
        ref={ref}
        className={clsx('input', error && 'border-red-500 focus:border-red-500 focus:ring-red-500', className)}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
);
Input.displayName = 'Input';

// ── Select ───────────────────────────────────────────────────────────
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...rest }, ref) => (
    <div className="w-full">
      {label && <label className="label">{label}</label>}
      <select
        ref={ref}
        className={clsx('input', error && 'border-red-500', className)}
        {...rest}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
);
Select.displayName = 'Select';

// ── Textarea ─────────────────────────────────────────────────────────
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...rest }, ref) => (
    <div className="w-full">
      {label && <label className="label">{label}</label>}
      <textarea
        ref={ref}
        className={clsx('input min-h-[120px] resize-y', error && 'border-red-500', className)}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
);
Textarea.displayName = 'Textarea';

// ── Badge ─────────────────────────────────────────────────────────────
interface BadgeProps { children: React.ReactNode; color?: 'green' | 'red' | 'yellow' | 'blue' | 'gray' | 'purple'; }
export const Badge: React.FC<BadgeProps> = ({ children, color = 'gray' }) => (
  <span className={clsx('badge',
    color === 'green'  && 'bg-green-100 text-green-800',
    color === 'red'    && 'bg-red-100 text-red-800',
    color === 'yellow' && 'bg-yellow-100 text-yellow-800',
    color === 'blue'   && 'bg-blue-100 text-blue-800',
    color === 'purple' && 'bg-purple-100 text-purple-800',
    color === 'gray'   && 'bg-gray-100 text-gray-700',
  )}>
    {children}
  </span>
);

// ── Table ─────────────────────────────────────────────────────────────
export const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 text-sm">{children}</table>
  </div>
);
export const Th: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => (
  <th className={clsx('px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50', className)}>
    {children}
  </th>
);
export const Td: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => (
  <td className={clsx('px-4 py-3 text-gray-700 whitespace-nowrap', className)}>{children}</td>
);

// ── Modal ─────────────────────────────────────────────────────────────
interface ModalProps { open: boolean; onClose: () => void; title?: string; children: React.ReactNode; }
export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div className="card w-full max-w-lg p-6" onClick={e => e.stopPropagation()}>
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

// ── Spinner ───────────────────────────────────────────────────────────
export const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <Loader2 className={clsx('animate-spin text-brand-600', className || 'w-6 h-6')} />
);

// ── Empty state ───────────────────────────────────────────────────────
export const EmptyState: React.FC<{ title: string; description?: string; action?: React.ReactNode }> = ({ title, description, action }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
      <span className="text-2xl">📭</span>
    </div>
    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
    {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
    {action}
  </div>
);

// ── Pagination ────────────────────────────────────────────────────────
interface PaginationProps { page: number; pages: number; total: number; onPage: (p: number) => void; }
export const Pagination: React.FC<PaginationProps> = ({ page, pages, total, onPage }) => (
  <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 text-sm text-gray-600">
    <span>{total} total</span>
    <div className="flex gap-1">
      <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => onPage(page - 1)}>← Prev</Button>
      <span className="px-3 py-1.5 rounded bg-gray-100 font-medium">{page} / {pages}</span>
      <Button variant="secondary" size="sm" disabled={page >= pages} onClick={() => onPage(page + 1)}>Next →</Button>
    </div>
  </div>
);

// ── ConfirmDialog ─────────────────────────────────────────────────────
interface ConfirmProps { open: boolean; title: string; message: string; onConfirm: () => void; onCancel: () => void; loading?: boolean; }
export const ConfirmDialog: React.FC<ConfirmProps> = ({ open, title, message, onConfirm, onCancel, loading }) => (
  <Modal open={open} onClose={onCancel} title={title}>
    <p className="text-sm text-gray-600 mb-6">{message}</p>
    <div className="flex justify-end gap-3">
      <Button variant="secondary" onClick={onCancel}>Cancel</Button>
      <Button variant="danger" loading={loading} onClick={onConfirm}>Delete</Button>
    </div>
  </Modal>
);
