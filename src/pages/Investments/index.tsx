import { Link } from 'react-router-dom';
import { BaseLayout } from '../../components/BaseLayout';
import { Button } from '../../components/Button';
import { InvestmentTable } from './components/InvestmentTable';
import { Container } from './styles';

export function Investments() {
  return (
    <BaseLayout>
      <Container>
        <Link to={'/new-investment'}>
          <Button variant="secondary">Adicionar Investimento</Button>
        </Link>
        <InvestmentTable />
      </Container>
    </BaseLayout>
  );
}
