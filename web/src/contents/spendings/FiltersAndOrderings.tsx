
import React, { useState } from 'react';
import { FiltersWrapper } from '../../styles';
import { Filters, Select } from '../../components';
import { CURRENCY } from '../../constants/Currency';

type OrderType = {
  name: string,
  value: string,
};

type FiltersAndOrderingsProps = {
  filterSpendings: (event: React.MouseEvent<HTMLButtonElement>) => void,
  orderSpendings: (value: string) => void,
  currencyFilter: string,
};

export default function FiltersAndOrderings(props: FiltersAndOrderingsProps) {
  const { filterSpendings, orderSpendings, currencyFilter } = props;

  const [currencyFilters] = useState([
    CURRENCY.ALL,
    CURRENCY.HUNGARY,
    CURRENCY.USA,
  ]);

  const [orders] = useState<OrderType[]>([
    {
      name: 'Sort by Date descending (default)',
      value: '-date',
    },
    {
      name: 'Sort by Date ascending',
      value: 'date',
    },
    {
      name: 'Sort by Amount descending',
      value: '-amount_in_huf',
    },
    {
      name: 'Sort by Amount ascending',
      value: 'amount_in_huf',
    },
  ]);

  function handleSpendingsOrder(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    orderSpendings(value);
  }

  return (
    <FiltersWrapper>
      <Select
        options={orders}
        onChange={handleSpendingsOrder}
        name="order"
      />
      <Filters
        filters={currencyFilters}
        onChange={filterSpendings}
        selected={currencyFilter}
      />
    </FiltersWrapper>
  );
}
