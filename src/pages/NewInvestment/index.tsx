import { BaseLayout } from "../../components/BaseLayout";
import { InvestmentForm } from "../../components/InvestmentForm";
import { Container } from "./styles";

export function NewInvestment(){
    return(
      <BaseLayout>
        <Container>
          <InvestmentForm />
        </Container>
      </BaseLayout>
    )
}