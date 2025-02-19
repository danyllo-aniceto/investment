import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { ContainerInput, Form, Input, Label, Select, ErrorMessage, ContainerForm } from './styles';
import { Button } from '../Button';
import { validateValue } from '../../utils/validateValue';
import { IInvestment, InvestmentType, investmentTypeStyles } from '../../models/IInvestment';

export function InvestmentForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<IInvestment>({
    defaultValues: {
      name: '',
      type: InvestmentType.EMPTY,
      valueInvested: 0,
      dateOfInvestment: new Date().toISOString(),
    },
  });

  const [error, setError] = useState<string>('');

  const onSubmit = (data: IInvestment) => {
    const newInvestment: IInvestment = {
      ...data,
      id: Date.now(),
      dateOfInvestment: new Date(data.dateOfInvestment).toISOString(),
    };

    console.log('Investimento salvo:', newInvestment);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ContainerForm>
        <ContainerInput>
          <Label>Nome do Investimento:</Label>
          <Input {...register('name', { required: 'Nome é obrigatório' })} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </ContainerInput>

        <ContainerInput>
          <Label>Tipo:</Label>
          <Select {...register('type', { required: 'Selecione um tipo' })}>
            <option value={InvestmentType.EMPTY} disabled>
              Selecione o tipo de investimento
            </option>
            <option value={InvestmentType.ACTION}>{investmentTypeStyles.ACTION.label}</option>
            <option value={InvestmentType.FUND}>{investmentTypeStyles.FUND.label}</option>
            <option value={InvestmentType.TITLE}>{investmentTypeStyles.TITLE.label}</option>
          </Select>
          {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}
        </ContainerInput>

        <ContainerInput>
          <Label>Valor Investido:</Label>
          <Input
            type="text"
            {...register('valueInvested', { required: 'Valor é obrigatório', valueAsNumber: true })}
            onChange={e =>
              validateValue(e.target.value, val => setValue('valueInvested', Number(val)), setError)
            }
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {errors.valueInvested && <ErrorMessage>{errors.valueInvested.message}</ErrorMessage>}
        </ContainerInput>

        <ContainerInput>
          <Label>Data do Investimento:</Label>
          <Controller
            control={control}
            name="dateOfInvestment"
            render={({ field }) => (
              <DatePicker
                selected={new Date(field.value)}
                onChange={date => field.onChange(date?.toISOString())}
                dateFormat="dd/MM/yyyy"
                className="custom-datepicker"
              />
            )}
          />
          {errors.dateOfInvestment && (
            <ErrorMessage>{errors.dateOfInvestment.message}</ErrorMessage>
          )}
        </ContainerInput>

        <Button type="submit">Salvar Investimento</Button>
      </ContainerForm>
    </Form>
  );
}
