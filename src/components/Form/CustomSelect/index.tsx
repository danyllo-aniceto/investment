import { forwardRef } from 'react';
import { ContainerInput, ErrorMessage, Label, StyledOption, StyledSelect } from './styles';
import { ISelectProps } from './types';

export const CustomSelect = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ label, error, options, ...props }, ref) => {
    return (
      <ContainerInput>
        {label && <Label>{label}</Label>}
        <StyledSelect ref={ref} {...props}>
          {options.map((option) => (
            <StyledOption key={option.value} value={option.value}>
              {option.label}
            </StyledOption>
          ))}
        </StyledSelect>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ContainerInput>
    );
  }
);
