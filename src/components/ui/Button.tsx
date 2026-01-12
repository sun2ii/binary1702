import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export function Button({ variant, href, children, external = false, className: customClassName }: ButtonProps) {
  const baseStyles = 'px-6 py-3 text-base font-medium transition-colors text-center';

  const variantStyles = {
    primary: 'bg-[var(--accent)] !text-white hover:bg-blue-600 hover:!no-underline',
    secondary: 'border border-[var(--border)] text-[var(--fg)] hover:border-[var(--muted)] hover:!no-underline',
  };

  const className = `${baseStyles} ${variantStyles[variant]} ${customClassName || 'inline-block'}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
