import React from 'react';
import { isEmpty }  from 'lodash';
import { SelectStyles } from '../styles';

export default function Select(props) {
  const { options, onChange, name, style} = props;

  if (isEmpty(options)) return null;

  return (
    <SelectStyles onChange={onChange} name={name} style={style}>
      {options.map((option, index) => (
        <option key={index} value={option.value} >
          {option.name}
        </option>
      ))}
    </SelectStyles>
  );
}
