import React from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { DateTime } from 'luxon';
import {
  Spending,
  IconWrapper,
  TextWrapper,
  Amount,
  AmountWrapper,
  SpendingsContainer,
} from '../../styles';

export default function SpendingList(props) {
  const { spendings } = props;

  return (
    <SpendingsContainer>
      {spendings?.map(spending => (
        <Spending key={spending.id}>
          <IconWrapper>
            <FiDollarSign color="var(--color-blue)" />
          </IconWrapper>
          <TextWrapper>
            <h3>{spending.description}</h3>
            <p>
              {DateTime.fromISO(spending.spent_at).toFormat(
                't - MMMM dd, yyyy'
              )}
            </p>
          </TextWrapper>
          <AmountWrapper>
            <Amount $currency={spending.currency}>
              {spending.amount}
            </Amount>
          </AmountWrapper>
        </Spending>
      ))}
    </SpendingsContainer>
  );
}
