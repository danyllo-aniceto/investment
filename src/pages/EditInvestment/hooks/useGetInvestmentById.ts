import { useEffect, useState } from 'react';
import GetInvestmentById from '../../../services/Investment/get-investment-by-id';
import { useParams } from 'react-router-dom';
import { emitAlert } from '../../../utils/emitAlert';
import { IInvestment } from '../../../models/IInvestment';

export function useGetInvestmentById() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IInvestment>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setLoading(true);
        const service = new GetInvestmentById();

        try {
          const response = await service.loadById(id);
          setData(response.data);
        } catch (error) {
          emitAlert(error, 'Erro ao buscar investimento');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [id]);

  return { data, loading };
}
