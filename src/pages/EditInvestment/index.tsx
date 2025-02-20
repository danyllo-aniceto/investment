import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BaseLayout } from "../../components/BaseLayout";
import { InvestmentForm } from "../../components/InvestmentForm";
import { Loading } from "../../components/Loading";
import { useEditInvestment } from "./hooks/useEditInvestment";
import { useGetInvestmentById } from "./hooks/useGetInvestmentById";
import { Container } from "./styles";

export function EditInvestment() {
  const { data, loading } = useGetInvestmentById();
  const { handleEditInvestment, loading: loadingSubmit } = useEditInvestment();

  return (
    <BaseLayout>
      <Link to={"/investments"}>
        <BiArrowBack size={30} />
      </Link>
      <Container>
        {loading ? (
          <Loading width="480px" height="364px" quantity={1} />
        ) : (
          <InvestmentForm
            initialData={data}
            onSubmit={handleEditInvestment}
            loading={loadingSubmit}
          />
        )}
      </Container>
    </BaseLayout>
  );
}
