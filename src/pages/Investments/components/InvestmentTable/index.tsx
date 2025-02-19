import { useCallback, useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { Pagination } from '../../../../components/Pagination';
import { usePaginationEvents } from '../../../../hooks/usePaginationEvents';
import { DataTable } from './components/DataTable';
import { useGetAllPagedAndDeleteInvestment } from './hooks/useGetAllPagedAndDeleteInvestment';
import { Table, TableContainer, TitleColumn, TitleRow } from './styles';

export function InvestmentTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idInvestment, setIdInvestment] = useState<number>();

  const handleOpenModal = useCallback((id?: number) => {
    if (id) {
      setIdInvestment(id);
      setIsModalOpen(true);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setIdInvestment(undefined);
    setIsModalOpen(false);
  }, []);

  const { handlePageChange, page } = usePaginationEvents();
  const { dataPaged, loading, handleDeleteInvestment } = useGetAllPagedAndDeleteInvestment({
    page,
    handlePageChange,
  });

  const handleActionDelete = async () => {
    await handleDeleteInvestment(idInvestment);
    handleCloseModal();
  };

  const investments = dataPaged.data.data;

  return (
    <>
      <TableContainer>
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
            <DataTable investments={investments} loading={loading} onOpenModal={handleOpenModal} />
          </tbody>
        </Table>
      </TableContainer>
      {investments.length > 0 && (
        <Pagination
          page={Number(page)}
          onPageChange={handlePageChange}
          totalResults={dataPaged.data.pagination.totalItems}
          totalPages={dataPaged.data.pagination.totalPages}
        />
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleActionDelete}
        title="Deletar Investimento"
        confirmText="Deletar"
        cancelText="Cancelar"
        isLoading={loading}
      >
        Tem certeza que deseja deletar este investimento?
      </Modal>
    </>
  );
}
