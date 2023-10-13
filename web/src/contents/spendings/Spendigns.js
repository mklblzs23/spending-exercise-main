import React from 'react';
import useLoadSpendins from './useLoadSpendings';
import { Loader, Layout } from '../../components';
import SpendingList from './SpendingList';
import SpendingForm from './SpendingForm';
import FiltersAndOrderings from './FiltersAndOrderings';
import { ErrorMessage, EmptyListMessage } from '../../styles';
import { isEmpty } from 'lodash';

export default function Spendings() {
  const { spendings, isLoading, isError, currencyFilter, addSpending, filterSpendings, orderSpendings } = useLoadSpendins();
  
  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <ErrorMessage>
        The server is probably down. Please try again later.
      </ErrorMessage>
    );
  }

  return (
    <Layout title='Spendings'>
      <SpendingForm
        addSpending={addSpending}
      />
      <FiltersAndOrderings
        filterSpendings={filterSpendings}
        orderSpendings={orderSpendings}
        currencyFilter={currencyFilter}
      />
      {!isEmpty(spendings)
        ? (
          <SpendingList
            spendings={spendings}
          />
        ) : (
          <EmptyListMessage>
            Yay!{' '}
            <span role="img" aria-label="jsx-a11y/accessible-emoji">
              🎉
            </span>{' '}
            No spendings!
          </EmptyListMessage>
        )}
    </Layout>
  );
}
