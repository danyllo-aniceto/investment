import { IInvestment } from '../../../../../../models/IInvestment';

export interface IDataTableProps {
  investments: IInvestment[];
  loading: boolean;
  onOpenModal: (id?: number) => void;
}
