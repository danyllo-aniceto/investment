import { IInvestment } from '../../models/IInvestment';

export interface IInvestmentFormProps {
  initialData?: IInvestment;
  onSubmit: (data: IInvestment) => void;
}
