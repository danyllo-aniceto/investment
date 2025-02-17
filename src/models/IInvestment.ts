export enum InvestmentType {
  ACTION = "action",
  FUND = "fund",
  TITLE = "title",
}

export interface IInvestment {
  id: number;
  name: string;
  type: InvestmentType; 
  valueInvested: number;
  dateOfInvestment: Date; 
}