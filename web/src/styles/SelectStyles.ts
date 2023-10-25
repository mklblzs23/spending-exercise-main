import styled, { Interpolation, css } from 'styled-components';

type SelectStylesProp = {
  style?: Interpolation<object>,
};

export const SelectStyles = styled.select<SelectStylesProp>`
  appearance: none;
  border: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;

  padding: 10px;
  font-family: var(--font-family);
  font-size: 18px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  ${(props) =>
    props.style &&
    css`
      ${props.style}
    `}
`;

export const CurrencySelectStyle = styled(SelectStyles)`
  font-weight: 700;
`;
