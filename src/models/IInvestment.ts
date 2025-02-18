export enum InvestmentType {
  EMPTY = '',
  ACTION = 'ACTION',
  FUND = "FUND",
  TITLE = "TITLE",
}

export interface IInvestmentAPI {
  id: number | null | undefined;
  name: string | null | undefined;
  type: InvestmentType | null | undefined; 
  valueInvested: number | null | undefined;
  dateOfInvestment: string | null | undefined; 
}

export interface IInvestment {
  id: number;
  name: string;
  type: InvestmentType; 
  valueInvested: number;
  dateOfInvestment: string; 
}