import { formatDateToBR } from "../../utils/formatDateToBR";
import { ContentColumn, ContentRow, Table, TitleColumn, TitleRow } from "./styles";
import { IInvestmentTableProps } from "./types";

export function InvestmentTable({ investments, onEdit, onDelete }: IInvestmentTableProps) {
  return (
    <Table>
      <thead>
        <TitleRow>
          <TitleColumn>Nome</TitleColumn>
          <TitleColumn>Tipo</TitleColumn>
          <TitleColumn>Valor Investido</TitleColumn>
          <TitleColumn>Data do Investimento</TitleColumn>
          <TitleColumn>Ações</TitleColumn>
        </TitleRow>
      </thead>
      <tbody>
        {investments.map((investment) => (
          <ContentRow key={investment.id}>
            <ContentColumn>{investment.name}</ContentColumn>
            <ContentColumn>{investment.type}</ContentColumn>
            <ContentColumn>R$ {investment.valueInvested.toFixed(2)}</ContentColumn>
            <ContentColumn>{formatDateToBR(investment.dateOfInvestment)}</ContentColumn>
            <ContentColumn>
              <button onClick={() => onEdit(investment.id)}>✏️</button>
              <button onClick={() => onDelete(investment.id)}>🗑️</button>
            </ContentColumn>
          </ContentRow>
        ))}
      </tbody>
    </Table>
  );
}

