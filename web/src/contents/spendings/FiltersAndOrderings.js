import React, { useState } from 'react';

import { FiltersWrapper } from '../../styles';
import { Filters, Select } from '../../components';
import { CURRENCY } from '../../constants/Currency';

export default function FiltersAndOrderings(props) {
  const { filterSpendings, orderSpendings, currencyFilter } = props;

  const [currencyFilters] = useState([
    CURRENCY.ALL,
    CURRENCY.HUNGARY,
    CURRENCY.USA,
  ]);

  const [orders] = useState([
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

  return (
    <FiltersWrapper>
      <Select
        options={orders}
        onChange={(event) => orderSpendings(event.target.value)}
      />
      <Filters
        filters={currencyFilters}
        onChange={(event) => filterSpendings(event.target.name)}
        selected={currencyFilter}
      />
    </FiltersWrapper>
  );
}
