import { BaseLayout } from "../../components/BaseLayout";
import { InvestmentForm } from "../../components/InvestmentForm";

export function NewInvestment(){
    return(
      <BaseLayout>
        <h1>Tela Novo Investimento</h1>
        <InvestmentForm />
      </BaseLayout>
    )
}