import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { mediaQuery } from '../../styles/global';

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

export const Option = styled.option``;

export const DatePickerStyled = styled(DatePicker)`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  height: 38px;
`;

export const ContainerForm = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${mediaQuery.mobile} {
    width: 70vw;
  }
`;
