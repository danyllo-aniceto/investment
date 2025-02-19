import { useCallback, useEffect, useState } from 'react';
import { IInvestmentPagedData, InvestmentType } from '../../../../../models/IInvestment';
import DeleteInvestment from '../../../../../services/Investment/delete-investment';
import GetAllInvestments from '../../../../../services/Investment/get-all-investments';
import { emitAlert } from '../../../../../utils/emitAlert';

interface Props {
  page: string;
  handlePageChange: (page: number) => void;
}

export function useGetAllPagedAndDeleteInvestment({ page, handlePageChange }: Props) {
  const [loading, setLoading] = useState(false);
  const [dataPaged, setDataPaged] = useState<IInvestmentPagedData>({
    data: { data: [], pagination: { currentPage: 1, limit: 10, totalItems: 0, totalPages: 1 } },
    status: false,
    message: '',
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    const service = new GetAllInvestments();

    try {
      const response = await service.loadAll(Number(page));
      setDataPaged({
        ...response,
        data: {
          pagination: response.data.pagination,
          data: response.data.data.map((item) => ({
            id: item?.id ?? 0,
            name: item?.name ?? '',
            date_of_investment: item?.date_of_investment ?? '',
            type: item?.type ?? InvestmentType.EMPTY,
            value_invested: item?.value_invested ?? 0,
            created_at: item?.created_at ?? '',
            updated_at: item?.updated_at ?? '',
          })),
        },
      });
    } catch (error) {
      emitAlert(error, 'Erro ao buscar investimentos');
    } finally {
      setLoading(false);
    }
  }, [page]);

  const handleDeleteInvestment = useCallback(
    async (id: number | undefined) => {
      if (!id) return;

      setLoading(true);
      const service = new DeleteInvestment();

      try {
        const response = await service.delete(id);
        if (response.status === true) {
          if (dataPaged.data.data.length === 1 && Number(page) > 1) {
            handlePageChange(Number(page) - 1);
          } else {
            await fetchData();
          }
        }
      } catch (error) {
        emitAlert(error, 'Erro ao excluir investimento');
      } finally {
        setLoading(false);
      }
    },
    [dataPaged, fetchData, handlePageChange, page]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData, page]);

  return { dataPaged, loading, handleDeleteInvestment };
}
