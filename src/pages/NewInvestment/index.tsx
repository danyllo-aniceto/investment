import { Link } from 'react-router-dom';
import { BaseLayout } from '../../components/BaseLayout';
import { InvestmentForm } from '../../components/InvestmentForm';
import { useCreateInvestment } from './hooks/useCreateInvestment';
import { Container } from './styles';
import { BiArrowBack } from 'react-icons/bi';

export function NewInvestment() {
  const { handleCreateInvestment, loading } = useCreateInvestment();

  return (
    <BaseLayout>
      <Link to={'/investments'}>
        <BiArrowBack size={30} />
      </Link>
      <Container>
        <InvestmentForm onSubmit={handleCreateInvestment} loading={loading} />
      </Container>
    </BaseLayout>
  );
}
