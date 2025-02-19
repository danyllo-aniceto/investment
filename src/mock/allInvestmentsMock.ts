import { IInvestment, InvestmentType } from '../models/IInvestment';

export const allInvestmentsMock: IInvestment[] = [
  {
    id: 1,
    name: 'Fundo Alpha',
    type: InvestmentType.FUND,
    value_invested: 1500.75,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 2,
    name: 'Ação Beta',
    type: InvestmentType.ACTION,
    value_invested: 3200.4,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 3,
    name: 'Título Gama',
    type: InvestmentType.TITLE,
    value_invested: 5000.0,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 4,
    name: 'Fundo Omega',
    type: InvestmentType.FUND,
    value_invested: 2200.99,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 5,
    name: 'Ação Zeta',
    type: InvestmentType.ACTION,
    value_invested: 700.25,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 6,
    name: 'Título Sigma',
    type: InvestmentType.TITLE,
    value_invested: 8000.75,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 7,
    name: 'Fundo Delta',
    type: InvestmentType.FUND,
    value_invested: 1200.8,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 8,
    name: 'Ação Kappa',
    type: InvestmentType.ACTION,
    value_invested: 4100.5,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 9,
    name: 'Título Lambda',
    type: InvestmentType.TITLE,
    value_invested: 3500.0,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 10,
    name: 'Fundo Epsilon',
    type: InvestmentType.FUND,
    value_invested: 8900.6,
    date_of_investment: '2025-02-17T19:38:51.444Z',
  },
];
