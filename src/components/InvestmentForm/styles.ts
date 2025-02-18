import DatePicker from "react-datepicker";
import styled from "styled-components";

export const Form = styled.form`
  background-color: #fff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
`;

export const Label = styled.label`
  font-size: 14px; 
  font-weight: bold; 
  margin-bottom: 4px; 
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px; 
  border: 1px solid #ccc; 
  width: 100%; 
  box-sizing: border-box;
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

export const Option = styled.option``;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DatePickerStyled = styled(DatePicker)`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  height: 38px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  height: 20px; 
  display: block;
  margin-top: 4px;
`;

export const ContainerForm = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`