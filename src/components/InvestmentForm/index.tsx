import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ContainerInput, Form, Input, Label, Select } from "./styles";
import { Button } from "../Button";

export function InvestmentForm(){
  
  return(
    <Form>
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
        <Input />
      </ContainerInput>
      <ContainerInput>
        <Label>Data do Investimento:</Label>
        <DatePicker />
      </ContainerInput>

      <Button type="submit">Salvar Investimento</Button>
    </Form>
  )
}