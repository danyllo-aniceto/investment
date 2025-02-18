import { useEffect } from "react";
import { BaseLayout } from "../../components/BaseLayout";
import { InvestmentTable } from "../../components/InvestmentTable";
import { useInvestment } from "../../hooks/services/Investment/useInvestment"; 
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export function Home() {

  const navigate = useNavigate();
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

  console.log('re-render')

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
    return <Loading message="Carregando Investimentos" />;
  }

  return (
    <BaseLayout>
      <h2>Tela Home</h2>
      
      <Button variant="secondary" onClick={() => navigate("/new-investment")}>
      Adicionar Investimento
      </Button>
      <InvestmentTable
        investments={investments} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </BaseLayout>
  );
}
