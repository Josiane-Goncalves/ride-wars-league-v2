import type { ReactNode } from 'react';
import { Link } from 'react-router';

type AppLinkButtonProps = {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function AppLinkButton({
  to,
  children,
  variant = 'primary',
}: AppLinkButtonProps) {
  const className =
    variant === 'secondary'
      ? 'app-button app-button-secondary'
      : 'app-button';

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}