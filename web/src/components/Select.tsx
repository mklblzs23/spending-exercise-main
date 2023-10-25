import React from 'react';
import { isEmpty } from 'lodash';
import { SelectStyles } from '../styles';
import { Interpolation } from 'styled-components/dist/types';

type OptionsType = {
  name: string,
  value: number | string,
};

type SelectProps = {
  options: OptionsType[],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  name?: string,
  style?: Interpolation<object>,
};

export default function Select(props: SelectProps) {
  const { options, onChange, name, style } = props;

  if (isEmpty(options)) return null;

  return (
    <SelectStyles onChange={onChange} name={name} style={style}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectStyles>
  );
}
