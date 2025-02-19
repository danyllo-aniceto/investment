import { forwardRef } from 'react';
import { IInputProps } from './types';
import { ContainerInput, ErrorMessage, Input, Label } from './styles';

export const CustomInput = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <ContainerInput>
        <Label>{label}</Label>
        <Input ref={ref} {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ContainerInput>
    );
  }
);
