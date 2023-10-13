import styled from 'styled-components';
import { CURRENCY } from '../constants/Currency';

export const FiltersWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;

@media (max-width: 756px) {
  flex-direction: column;
}
`;

export const FormStyles = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
`;


export const Spending = styled.article`
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 1.5rem;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  h3,
  p {
    margin: 0;
  }

  h3 {
    line-height: 1.4;
  }

  p {
    color: #adadad;
  }
  @media (max-width: 756px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const IconWrapper = styled.div`
  padding: 8px;
  line-height: 0;
  background-color: #d1e7fb;
  border-radius: 12px;
  margin-right: 1.5rem;

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 756px) {
    margin: 0;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;


export const TextWrapper = styled.div`
  @media (max-width: 756px) {
    text-align: center;
    margin: 0.5rem 0;
  }
`;

export const AmountWrapper = styled.div`
  margin-left: auto;
  margin-right: 1rem;

  @media (max-width: 756px) {
    margin: 0.5rem 0;
  }
`;

export const Amount = styled.h3`
  &::before {
    content: '${(props) => (props.$currency === CURRENCY.USA ? '$' : '')}';
  }

  &::after {
    content: '${(props) => (props.$currency === CURRENCY.HUNGARY ? ' HUF' : '')}';
  }
`;

export const ErrorMessage = styled.h1`
  text-align: center;
  margin: 4rem auto;
  font-size: 20px;
  background-color: #fb7c7d;
  color: var(--color-white);
  padding: 10px 15px;
  border-radius: 8px;
  max-width: 80%;
`;

export const EmptyListMessage = styled.h1`
  text-align: center;
  margin-top: 4rem;
`;

export const SpendingsContainer = styled.div`
  overflow: auto;
`;
