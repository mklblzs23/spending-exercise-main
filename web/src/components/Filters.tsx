import React from 'react';
import { isEmpty } from 'lodash';
import { FiltersContainer, FilterButton } from '../styles';

type FiltersProp = {
  filters: string[] | undefined;
  onChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  selected: string;
};

const Filters = (props: FiltersProp) => {
  const { filters, onChange, selected } = props;

  if (isEmpty(filters)) return null;

  return (
    <FiltersContainer>
      {filters?.map((filterElement, index) => (
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
};

export default Filters;
