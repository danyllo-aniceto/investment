export interface ICustomDatePickerProps {
  label: string;
  value: string;
  onChange: (value: string | undefined) => void;
  error?: string;
}
