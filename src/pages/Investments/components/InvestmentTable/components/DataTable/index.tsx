import { FiEdit, FiTrash } from 'react-icons/fi';
import { Button } from '../../../../../../components/Button';
import { Loading } from '../../../../../../components/Loading';
import { formatDateToBR } from '../../../../../../utils/formatDateToBR';
import { ActionButtons, ContentColumn, ContentEmpty, ContentRow, Empty, Td } from './styles';
import { IDataTableProps } from './types';
import { Link } from 'react-router-dom';
import { formatCurrencyBR } from '../../../../../../utils/formatCurrencyBR';
import { investmentTypeStyles } from '../../../../../../constants/investmentTypeStyles';

export function DataTable({ investments, loading, onOpenModal }: IDataTableProps) {
  if (loading) {
    return (
      <tr>
        <Td colSpan={5}>
          <Loading quantity={1} width={'100%'} height={'380px'} />
        </Td>
      </tr>
    );
  }

  if (investments.length === 0) {
    return (
      <tr>
        <Td colSpan={5}>
          <ContentEmpty>
            <Empty>Não há nenhum investimento cadastrado</Empty>
          </ContentEmpty>
        </Td>
      </tr>
    );
  }

  return (
    <>
      {investments.map((investment) => (
        <ContentRow key={investment.id}>
          <ContentColumn>{investment.name}</ContentColumn>
          <ContentColumn
            style={{
              backgroundColor: investmentTypeStyles[investment.type || 'EMPTY'].color,
            }}
          >
            {investmentTypeStyles[investment.type || 'EMPTY'].label}
          </ContentColumn>
          <ContentColumn>{formatCurrencyBR(investment.value_invested)}</ContentColumn>
          <ContentColumn>{formatDateToBR(investment.date_of_investment)}</ContentColumn>
          <ContentColumn>
            <ActionButtons>
              <Link to={`/edit-investment/${investment.id}`}>
                <Button variant="icon">
                  <FiEdit size={20} />
                </Button>
              </Link>

              <Button variant="icon" onClick={() => onOpenModal(investment.id)}>
                <FiTrash size={20} />
              </Button>
            </ActionButtons>
          </ContentColumn>
        </ContentRow>
      ))}
    </>
  );
}
