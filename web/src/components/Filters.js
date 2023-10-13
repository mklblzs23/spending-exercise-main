import React from 'react';
import { isEmpty } from 'lodash';
import { FiltersContainer, FilterButton } from '../styles';


export default function Filters(props) {
  const { filters, onChange, selected } = props;

  if (isEmpty(filters)) return null;

  return (
    <FiltersContainer>
      {filters.map((filterElement, index) => (
        <FilterButton
          key={index}
          name={filterElement}
          onClick={onChange}
          selected={selected}
        >
          {filterElement}
        </FilterButton>
      ))}
    </FiltersContainer>
  );
}
