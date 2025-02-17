import { useCallback, useState } from "react";
import { IInvestment, InvestmentType } from "../../../models/IInvestment";
import GetAllInvestments from "../../../services/Investment/get-all-investments";
import GetInvestmentById from "../../../services/Investment/get-investment-by-id";
import CreateInvestment from "../../../services/Investment/create-investment";
import UpdateInvestment from "../../../services/Investment/update-investment";
import DeleteInvestment from "../../../services/Investment/delete-investment";

export const useInvestment = () => {
  const [investments, setInvestments] = useState<IInvestment[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllInvestments = useCallback(async () => {
    setLoading(true);
    const service = new GetAllInvestments();
    try {
      const response = await service.loadAll();
      setInvestments(response.map(item => ({
        id: item?.id ?? 0,
        name: item?.name ?? '',
        dateOfInvestment: item?.dateOfInvestment ?? '',
        valueInvested: item?.valueInvested ?? 0,
        type: item?.type ?? InvestmentType.EMPTY,
      })));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
     
      alert("Erro ao buscar investimentos");
    } finally {
      setLoading(false);
    }
  }, []) ;

  const getInvestmentById = async (id: number) => {
    setLoading(true);
    const service = new GetInvestmentById();
    try {
      return await service.loadInvestment(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Erro ao buscar investimento");
    } finally {
      setLoading(false);
    }
  };

  const createInvestment = async (investment: Omit<IInvestment, "id">) => {
    setLoading(true);
    const service = new CreateInvestment();
    try {
      const newInvestment = await service.create(investment);
      setInvestments((prev) => [...prev, newInvestment]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Erro ao criar investimento");
    } finally {
      setLoading(false);
    }
  };

  const updateInvestment = async (investment: IInvestment) => {
    setLoading(true);
    const service = new UpdateInvestment();
    try {
      const updatedInvestment = await service.update(investment);
      setInvestments((prev) =>
        prev.map((item) => (item.id === investment.id ? updatedInvestment : item))
      );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Erro ao atualizar investimento");
    } finally {
      setLoading(false);
    }
  };

  const deleteInvestment = async (id: number) => {
    setLoading(true);
    const service = new DeleteInvestment();
    try {
      await service.delete(id);
      setInvestments((prev) => prev.filter((item) => item.id !== id));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Erro ao excluir investimento");
    } finally {
      setLoading(false);
    }
  };

  return {
    investments,
    loading,
    getAllInvestments,
    getInvestmentById,
    createInvestment,
    updateInvestment,
    deleteInvestment,
  };
};
