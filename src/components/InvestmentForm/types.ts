import { UseFormReset } from 'react-hook-form';
import { IInvestment } from '../../models/IInvestment';

export interface IInvestmentFormProps {
  initialData?: IInvestment;
  loading?: boolean;
  onSubmit: (data: IInvestment, reset?: UseFormReset<IInvestment>) => void;
}
