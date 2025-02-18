import { formatDateToBR } from "../../utils/formatDateToBR";
import { Button } from "../Button";
import { ContentColumn, ContentRow, Table, TitleColumn, TitleRow } from "./styles";
import { IInvestmentTableProps } from "./types";
import { FiEdit, FiTrash } from "react-icons/fi";

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
              <Button variant="icon" onClick={() => onEdit(investment.id)}>
                  <FiEdit size={20} />
              </Button>

              <Button variant="icon" onClick={() => onDelete(investment.id)}>
                   <FiTrash size={20} />
              </Button>
            </ContentColumn>
          </ContentRow>
        ))}
      </tbody>
    </Table>
  );
}

