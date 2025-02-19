import { useCallback, useState } from 'react';
import { UseFormReset } from 'react-hook-form';
import { IInvestment } from '../../../models/IInvestment';
import CreateInvestment from '../../../services/Investment/create-investment';
import { emitAlert } from '../../../utils/emitAlert';
import { parseDate } from '../../../utils/parseDate';

export function useCreateInvestment() {
  const [loading, setLoading] = useState(false);

  const handleCreateInvestment = useCallback(
    async (investment: IInvestment, reset?: UseFormReset<IInvestment>) => {
      setLoading(true);
      const service = new CreateInvestment();

      try {
        const response = await service.create({
          ...investment,
          date_of_investment: parseDate(investment.date_of_investment),
        });
        alert(response?.message ?? 'Investimento criado com sucesso!');
        reset?.();
      } catch (error) {
        emitAlert(error, 'Erro ao cadastrar investimento');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { handleCreateInvestment, loading };
}
