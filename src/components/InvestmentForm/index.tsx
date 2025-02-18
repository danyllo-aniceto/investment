import "react-datepicker/dist/react-datepicker.css";
import { ContainerInput, DatePickerStyled, Form, Input, Label, Select, ErrorMessage, ContainerForm } from "./styles";
import { Button } from "../Button";
import { useState } from "react";
import { validateValue } from "../../utils/validateValue"; 

export function InvestmentForm() {
  const [value, setValue] = useState<string>(""); 
  const [error, setError] = useState<string>(""); 

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    validateValue(newValue, setValue, setError);
  };

  return(
    <Form>
      <ContainerForm>
        <ContainerInput>
          <Label>Nome do Investimento:</Label>
          <Input />
        </ContainerInput>
        <ContainerInput>
          <Label>Tipo:</Label>
          <Select></Select>
        </ContainerInput>
        <ContainerInput>
          <Label>Valor Investido:</Label>
          <Input 
            type="text"
            value={value}
            onChange={handleValueChange}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </ContainerInput>
        <ContainerInput>
          <Label>Data do Investimento:</Label>
          <DatePickerStyled />
        </ContainerInput>

        <Button type="submit">Salvar Investimento</Button>
      </ContainerForm>
    </Form>
  );
}
