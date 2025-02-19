import { Controller, useForm } from 'react-hook-form';
import { IInvestment } from '../../models/IInvestment';
import { Button } from '../Button';
import { CustomDatePicker } from '../Form/CustomDatePicker';
import { CustomInput } from '../Form/CustomInput';
import { CustomSelect } from '../Form/CustomSelect';
import { ContainerForm, Form } from './styles';
import { defaultValues, optionsTypeInvestment } from './utils/form';
import { IInvestmentFormProps } from './types';

export function InvestmentForm({ onSubmit, initialData, loading }: IInvestmentFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IInvestment>({
    defaultValues: initialData ?? defaultValues,
  });

  const isPageEdit = Boolean(initialData);

  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
      <ContainerForm>
        <CustomInput
          label="Nome do investimento:"
          error={errors.name?.message}
          {...register('name', { required: 'Nome é obrigatório' })}
          disabled={loading || isPageEdit}
        />

        <CustomSelect
          label="Tipo:"
          options={optionsTypeInvestment}
          error={errors.type?.message}
          {...register('type', { required: 'Selecione um tipo' })}
          disabled={loading}
        />

        <CustomInput
          label="Valor Investido:"
          type="number"
          error={errors.value_invested?.message}
          {...register('value_invested', {
            required: 'Valor é obrigatório',
            valueAsNumber: true,
            min: { value: 0.01, message: 'O valor deve ser maior que zero' },
          })}
          disabled={loading}
        />

        <Controller
          control={control}
          name="date_of_investment"
          render={({ field }) => (
            <CustomDatePicker
              label="Data do investimento:"
              error={errors.date_of_investment?.message}
              {...field}
            />
          )}
          disabled={loading}
        />
        <Button type="submit" disabled={loading}>
          {loading ? '...' : 'Salvar Investimento'}
        </Button>
      </ContainerForm>
    </Form>
  );
}
