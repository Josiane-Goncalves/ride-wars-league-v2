type AppButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export function AppButton({ children, variant = 'primary' }: AppButtonProps) {
  const buttonClassName = variant === 'secondary' ? 'secondary-button' : '';

  return (
    <button type="button" className={buttonClassName}>
      {children}
    </button>
  );
}