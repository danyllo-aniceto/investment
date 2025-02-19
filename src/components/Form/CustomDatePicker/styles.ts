import styled from 'styled-components';

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  height: 20px;
  display: block;
  margin-top: 4px;
`;
