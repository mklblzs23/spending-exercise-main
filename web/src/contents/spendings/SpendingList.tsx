import React from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { DateTime } from 'luxon';
import {
  SpendingCard,
  IconWrapper,
  TextWrapper,
  Amount,
  AmountWrapper,
  SpendingsContainer,
} from '../../styles';
import { Spending } from '../../interfaces';

type SpendingListProps = {
  spendings: Spending[];
};

export default function SpendingList(props: SpendingListProps) {
  const { spendings } = props;

  return (
    <SpendingsContainer>
      {spendings?.map((spending) => (
        <SpendingCard key={spending.id}>
          <IconWrapper>
            <FiDollarSign color="var(--color-blue)" />
          </IconWrapper>
          <TextWrapper>
            <h3>{spending.description}</h3>
            <p>
              {spending.spent_at ? DateTime.fromISO(`${spending.spent_at}`).toFormat(
                't - MMMM dd, yyyy'
              ) : null}
            </p>
          </TextWrapper>
          <AmountWrapper>
            <Amount $currency={spending.currency}>{spending.amount}</Amount>
          </AmountWrapper>
        </SpendingCard>
      ))}
    </SpendingsContainer>
  );
}
