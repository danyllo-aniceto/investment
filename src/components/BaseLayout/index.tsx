import { Container, Wrapper } from './styles';
import { IBaseLayoutProps } from './types';

export function BaseLayout({ children }: IBaseLayoutProps) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}