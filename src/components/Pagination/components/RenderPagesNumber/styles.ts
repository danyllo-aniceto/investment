import styled from 'styled-components';

export const PageButton = styled.button<{ $isActive: boolean }>`
  padding: 6px 12px;
  margin: 0 4px;
  border-radius: 6px;
  background-color: ${({ $isActive }) => ($isActive ? '#3B82F6' : '#E5E7EB')};
  color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#374151')};
  cursor: pointer;
  border: none;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#2563EB' : '#DBEAFE')};
  }
`;
