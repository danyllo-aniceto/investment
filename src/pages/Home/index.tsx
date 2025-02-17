import { useEffect } from "react";
import { BaseLayout } from "../../components/BaseLayout";
import { InvestmentTable } from "../../components/InvestmentTable";
import { useInvestment } from "../../hooks/services/Investment/useInvestment"; 

export function Home() {
  const {
    investments, 
    loading, 
    deleteInvestment,
    updateInvestment,
    getAllInvestments
  } = useInvestment();

  useEffect(() => {
    getAllInvestments();
  }, [getAllInvestments]);

  const handleEdit = (id: number) => {
    const investmentToEdit = investments.find((investment) => investment.id === id);
  
    if (investmentToEdit) {
      console.log("Editar:", investmentToEdit);
      updateInvestment(investmentToEdit); 
    } else {
      console.log("Investimento não encontrado.");
    }
  };

  const handleDelete = (id: number) => {
    console.log("Deletar:", id);
    deleteInvestment(id); 
  };

  if (loading) {
    return <div>Carregando investimentos...</div>;
  }

  return (
    <BaseLayout>
      <h2>Tela Home</h2>
      <InvestmentTable
        investments={investments} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </BaseLayout>
  );
}
