import { useCallback, useState } from 'react';
import { IInvestment } from '../../../models/IInvestment';
import EditInvestment from '../../../services/Investment/update-investment';
import { emitAlert } from '../../../utils/emitAlert';
import { parseDate } from '../../../utils/parseDate';

export function useEditInvestment() {
  const [loading, setLoading] = useState(false);

  const handleEditInvestment = useCallback(async (investment: IInvestment) => {
    setLoading(true);
    const service = new EditInvestment();

    try {
      const response = await service.update({
        ...investment,
        date_of_investment: parseDate(investment.date_of_investment),
      });
      alert(response?.message ?? 'Investimento editado com sucesso!');
    } catch (error) {
      emitAlert(error, 'Erro ao editar investimento');
    } finally {
      setLoading(false);
    }
  }, []);

  return { handleEditInvestment, loading };
}
