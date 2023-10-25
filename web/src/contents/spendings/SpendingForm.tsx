import React, { useState, useMemo } from 'react';
import { InputStyles, FormStyles } from '../../styles';
import { CURRENCY } from '../../constants/Currency';
import spendingService from '../../service/spendingService';
import { Select } from '../../components';
import { isEmpty } from 'lodash';
import { Spending } from '../../interfaces';

type SpendingFormProps = {
  addSpending: (value: Spending) => void, 
};

const costumStyle = {
  fontWeight: '700',
};

export default function SpendingForm(props: SpendingFormProps) {
  const { addSpending } = props;
  const [isSaving, setIsSaving] = useState(false);
  const [state, setState] = useState<Spending>({
    description: '',
    amount: '',
    currency: CURRENCY.USA,
  });

  const currencies = useMemo(
    () => [
      {
        name: CURRENCY.USA,
        value: CURRENCY.USA,
      },
      {
        name: CURRENCY.HUNGARY,
        value: CURRENCY.HUNGARY,
      },
    ],
    []
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  }

  async function submitSpending(event: React.FormEvent<HTMLFormElement>) {
    event.stopPropagation();
    if (isEmpty(state.amount) || isEmpty(state.description)) {
      alert(
        `The following fields are required: ${
          isEmpty(state.description) ? '\n description' : ''
        } ${isEmpty(state.amount) ? '\n amount' : ''}`
      );
      return;
    }
    try {
      setIsSaving(true);
      const saveSpending = await spendingService.saveSpending(state);

      if (saveSpending) {
        addSpending(saveSpending);
        setState((previousState) => ({
          ...previousState,
          description: '',
          amount: '',
        }));
      }
    } catch (error) {
      alert('something went wrong while saving!');
      throw error;
    } finally {
      setIsSaving(false);
    }
  }
 
  return (
    <FormStyles onSubmit={submitSpending}>
      <InputStyles
        type="text"
        placeholder="description"
        name="description"
        value={state.description}
        onChange={handleChange}
      />
      <InputStyles
        type="number"
        placeholder="amount"
        name="amount"
        value={state.amount}
        onChange={handleChange}
      />
      <Select
        options={currencies}
        onChange={handleChange}
        name="currency"
        style={costumStyle}
      />
      <InputStyles
        name="submit"
        type="submit"
        value="Save"
        disabled={isSaving}
      />
    </FormStyles>
  );
}
