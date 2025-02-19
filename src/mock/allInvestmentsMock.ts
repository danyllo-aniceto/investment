import { IInvestmentAPI, InvestmentType } from '../models/IInvestment';

export const allInvestmentsMock: IInvestmentAPI[] = [
  {
    id: 1,
    name: 'Fundo Alpha',
    type: InvestmentType.FUND,
    valueInvested: 1500.75,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 2,
    name: 'Ação Beta',
    type: InvestmentType.ACTION,
    valueInvested: 3200.4,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 3,
    name: 'Título Gama',
    type: InvestmentType.TITLE,
    valueInvested: 5000.0,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 4,
    name: 'Fundo Omega',
    type: InvestmentType.FUND,
    valueInvested: 2200.99,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 5,
    name: 'Ação Zeta',
    type: InvestmentType.ACTION,
    valueInvested: 700.25,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 6,
    name: 'Título Sigma',
    type: InvestmentType.TITLE,
    valueInvested: 8000.75,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 7,
    name: 'Fundo Delta',
    type: InvestmentType.FUND,
    valueInvested: 1200.8,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 8,
    name: 'Ação Kappa',
    type: InvestmentType.ACTION,
    valueInvested: 4100.5,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 9,
    name: 'Título Lambda',
    type: InvestmentType.TITLE,
    valueInvested: 3500.0,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
  {
    id: 10,
    name: 'Fundo Epsilon',
    type: InvestmentType.FUND,
    valueInvested: 8900.6,
    dateOfInvestment: '2025-02-17T19:38:51.444Z',
  },
];
