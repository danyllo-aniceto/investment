import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(24, 24, 100, 0.2);
  border-top: 5px solid #1a3e5a;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Message = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;
