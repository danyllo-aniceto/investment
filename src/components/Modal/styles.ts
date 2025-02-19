import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.2s ease-in-out;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
`;

export const Content = styled.div`
  margin: 15px 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
