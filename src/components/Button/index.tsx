import { StyledButton } from './styles';
import { IButtonProps } from './types';

export function Button({ variant = 'primary', children, ...rest }: IButtonProps) {
  return (
    <StyledButton $variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}
