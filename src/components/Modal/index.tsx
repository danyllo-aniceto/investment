import { FiX } from 'react-icons/fi';
import { IModalProps } from './types';
import { CloseButton, Content, Footer, Header, ModalContainer, Overlay } from './styles';
import { Button } from '../Button';

export function Modal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirmação',
  children,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
}: IModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>
            <FiX size={24} />
          </CloseButton>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Button variant="secondary" onClick={onClose}>
            {cancelText}
          </Button>
          {onConfirm && (
            <Button variant="danger" onClick={onConfirm}>
              {confirmText}
            </Button>
          )}
        </Footer>
      </ModalContainer>
    </Overlay>
  );
}
