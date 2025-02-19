import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledOption = styled.option``;

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

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
