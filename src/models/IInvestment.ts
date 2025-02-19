export enum InvestmentType {
  EMPTY = '',
  ACTION = 'ACTION',
  FUND = 'FUND',
  TITLE = 'TITLE',
}

export const investmentTypeStyles = {
  ACTION: { label: 'Ação', color: 'rgb(241 220 109)' },
  FUND: { label: 'Fundo', color: 'rgb(114 244 114)' },
  TITLE: { label: 'Título', color: 'rgb(255 138 138)' },
  EMPTY: { label: 'Desconhecido', color: '#D3D3D3' },
};

export interface IInvestmentAPI {
  id: number | null | undefined;
  name: string | null | undefined;
  type: InvestmentType | null | undefined;
  value_invested: number | null | undefined;
  date_of_investment: string | null | undefined;
  created_at: string | null | undefined;
  updated_at: string | null | undefined;
}

export interface IInvestment {
  id: number;
  name: string;
  type: InvestmentType;
  valueInvested: number;
  dateOfInvestment: string;
}
