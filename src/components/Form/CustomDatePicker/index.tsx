import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { ContainerInput, ErrorMessage, Label } from './styles';
import { ICustomDatePickerProps } from './types';

export function CustomDatePicker({ value, onChange, label, error }: ICustomDatePickerProps) {
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <DatePicker
        selected={new Date(value)}
        onChange={(date) => onChange(date?.toISOString())}
        dateFormat="dd/MM/yyyy"
        className="custom-datepicker"
        maxDate={new Date()}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </ContainerInput>
  );
}
