import { useNavigate } from 'react-router-dom';
import { BaseLayout } from '../../components/BaseLayout';
import { Button } from '../../components/Button';
import { InvestmentTable } from './components/InvestmentTable';
import { Container } from './styles';

export function Home() {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <Container>
        <Button variant="secondary" onClick={() => navigate('/new-investment')}>
          Adicionar Investimento
        </Button>
        <InvestmentTable />
      </Container>
    </BaseLayout>
  );
}
