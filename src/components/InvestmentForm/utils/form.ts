import { investmentTypeStyles } from '../../../constants/investmentTypeStyles';
import { IInvestment, InvestmentType } from '../../../models/IInvestment';

export const optionsTypeInvestment = [
  { value: InvestmentType.EMPTY, label: 'Selecione o tipo de investimento' },
  { value: InvestmentType.ACTION, label: investmentTypeStyles.ACTION.label },
  { value: InvestmentType.FUND, label: investmentTypeStyles.FUND.label },
  { value: InvestmentType.TITLE, label: investmentTypeStyles.TITLE.label },
];

export const defaultValues: IInvestment = {
  name: '',
  type: InvestmentType.EMPTY,
  value_invested: 0,
  date_of_investment: new Date().toISOString(),
};
