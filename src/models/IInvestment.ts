import { IBaseApi } from './IBaseApi';
import { IBasePagedApi } from './IBasePagedApi';

export enum InvestmentType {
  EMPTY = '',
  ACTION = 'ACTION',
  FUND = 'FUND',
  TITLE = 'TITLE',
}

interface IInvestmentAPI {
  id: number | null | undefined;
  name: string | null | undefined;
  type: InvestmentType | null | undefined;
  value_invested: number | null | undefined;
  date_of_investment: string | null | undefined;
  created_at: string | null | undefined;
  updated_at: string | null | undefined;
}

export interface IInvestment {
  id?: number;
  name: string;
  type: InvestmentType;
  value_invested: number;
  date_of_investment: string;
  created_at?: string;
  updated_at?: string;
}

export type IInvestmentPagedResponseApi = IBaseApi<IBasePagedApi<IInvestmentAPI>>;

export type IInvestmentPagedData = IBaseApi<IBasePagedApi<IInvestment>>;
