import { IInvestment } from "../../models/IInvestment";

export interface IInvestmentTableProps {
  investments: IInvestment[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}
