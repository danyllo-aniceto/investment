import { useState } from 'react';
import { investmentTypeStyles } from '../../models/IInvestment';
import { formatDateToBR } from '../../utils/formatDateToBR';
import { Button } from '../Button';
import { ActionButtons, ContentColumn, ContentRow, Table, TitleColumn, TitleRow } from './styles';
import { IInvestmentTableProps } from './types';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Modal } from '../Modal';

export function InvestmentTable({ investments, onEdit, onDelete }: IInvestmentTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleOpenModal = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedId !== null) {
      onDelete(selectedId);
    }
    setIsModalOpen(false);
  };
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
                  <Button variant="icon" onClick={() => onEdit(investment.id)}>
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
