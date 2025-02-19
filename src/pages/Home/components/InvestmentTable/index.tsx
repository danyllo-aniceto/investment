import { useEffect, useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Button } from '../../../../components/Button';
import { Loading } from '../../../../components/Loading';
import { Modal } from '../../../../components/Modal';
import { Pagination } from '../../../../components/Pagination';
import { useInvestment } from '../../../../hooks/services/Investment/useInvestment';
import { usePaginationEvents } from '../../../../hooks/usePaginationEvents';
import { investmentTypeStyles } from '../../../../models/IInvestment';
import { formatDateToBR } from '../../../../utils/formatDateToBR';
import { ActionButtons, ContentColumn, ContentRow, Table, TitleColumn, TitleRow } from './styles';

export function InvestmentTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { investments, deleteInvestment, updateInvestment, getAllInvestments } = useInvestment();

  const loading = true;

  const handleEdit = (id: number) => {
    const investmentToEdit = investments.find(investment => investment.id === id);

    if (investmentToEdit) {
      console.log('Editar:', investmentToEdit);
      updateInvestment(investmentToEdit);
    } else {
      console.log('Investimento não encontrado.');
    }
  };

  const { handlePageChange, page } = usePaginationEvents();

  const handleOpenModal = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedId !== null) {
      console.log('Deletar:', selectedId);
      deleteInvestment(selectedId);
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    getAllInvestments();
  }, [getAllInvestments]);

  if (loading) {
    return <Loading quantity={1} width={'100%'} height={'500px'} />;
  }

  return (
    <>
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
          {investments.map(investment => (
            <ContentRow key={investment.id}>
              <ContentColumn>{investment.name}</ContentColumn>
              <ContentColumn
                style={{
                  backgroundColor: investmentTypeStyles[investment.type || 'EMPTY'].color,
                }}
              >
                {investmentTypeStyles[investment.type || 'EMPTY'].label}
              </ContentColumn>
              <ContentColumn>R$ {investment.valueInvested.toFixed(2)}</ContentColumn>
              <ContentColumn>{formatDateToBR(investment.dateOfInvestment)}</ContentColumn>
              <ContentColumn>
                <ActionButtons>
                  <Button variant="icon" onClick={() => handleEdit(investment.id)}>
                    <FiEdit size={20} />
                  </Button>

                  <Button variant="icon" onClick={() => handleOpenModal(investment.id)}>
                    <FiTrash size={20} />
                  </Button>
                </ActionButtons>
              </ContentColumn>
            </ContentRow>
          ))}
        </tbody>
      </Table>
      <Pagination
        page={Number(page)}
        onPageChange={handlePageChange}
        totalResults={10}
        totalPages={4}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Deletar Investimento"
        confirmText="Deletar"
        cancelText="Cancelar"
      >
        Tem certeza que deseja deletar este investimento?
      </Modal>
    </>
  );
}
