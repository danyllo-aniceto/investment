import styled from 'styled-components';

interface IDisabled {
  $disabled: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ArrowButton = styled.button<IDisabled>`
  background: none;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowIcon = styled.svg<IDisabled>`
  width: 28px;
  height: 28px;
  color: ${({ $disabled }) => ($disabled ? '#4B5563' : '#E5E7EB')};
  transition: color 0.2s;

  &:hover {
    color: ${({ $disabled }) => ($disabled ? '#4B5563' : '#FFFFFF')};
  }
`;
