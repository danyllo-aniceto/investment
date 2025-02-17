import { Container, Message, Overlay, Spinner } from "./styles";
import { ILoadingProps } from "./types";

export function Loading({ message = "Carregando..." }: ILoadingProps) {
  return (
    <Overlay>
      <Container>
        <Spinner />
        <Message>{message}</Message>
      </Container>
    </Overlay>
  );
}
