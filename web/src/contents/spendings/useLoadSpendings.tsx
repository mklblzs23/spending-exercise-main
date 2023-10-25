import { useEffect, useState } from 'react';
import spendingService from '../../service/spendingService';
import { isEmpty } from 'lodash';
import { CURRENCY } from '../../constants/Currency';
import { Spending } from '../../interfaces';

export default function useLoadSpendins() {
  const [allSpendings, setAllSpendings] = useState<Spending[]>([]);
  const [spendings, setSpendings] = useState<Spending[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [filters, setFilters] = useState<{ currency: string, order: string}>({
    currency: CURRENCY.ALL,
    order: '',
  });

  useEffect(() => {
    let isCancelled = false;
    async function loadSpendings() {
      try {
        const spendingList: Spending[] = await spendingService.getSpendigns();

        if (spendingList && !isCancelled) {
          setAllSpendings(spendingList);
          setSpendings(
            spendingList.sort(
              (a: Spending, b: Spending) => {
                let dateA = 0;
                let dateB = 0;
                if (a.spent_at) dateA = new Date(a.spent_at).getTime();
                if (b.spent_at) dateB = new Date(b.spent_at).getTime();
              
                return dateB - dateA;
              })
          );
        }
      } catch (error) {
        alert('Something went wrong!');
        setIsError(true);
        throw error;
      } finally {
        setIsLoading(false);
      }
    }

    loadSpendings();

    return () => {
      isCancelled = true;
    };
  }, []);

  function addSpending(value: Spending): void {
    const newAllSpendings: Spending[] = isEmpty(allSpendings)
      ? [value]
      : [...allSpendings, value];
    setAllSpendings(newAllSpendings);
    if (
      value.currency == filters.currency ||
      filters.currency == CURRENCY.ALL
    ) {
      const newFilteredSpendings = isEmpty(spendings)
        ? [value]
        : [...spendings, value];
      orderSpendings(filters.order, newFilteredSpendings);
    }
  }

  function filterSpendings(event: React.MouseEvent<HTMLButtonElement>): void {
    const value = event.currentTarget.name;
    const filteredSpendings =
      value == CURRENCY.ALL
        ? allSpendings
        : allSpendings?.filter((spending) => spending.currency == value);
    console.log(filteredSpendings);
    if (spendings != filteredSpendings) setSpendings(filteredSpendings);
    if (filters.currency != value) {
      setFilters((previousFilters) => ({
        ...previousFilters,
        currency: value,
      }));
    }
  }

  function orderSpendings(orderBy: string, list?: Spending[]): void {
    const orderList = list ?? spendings;
    let sortedList;
    switch (orderBy) {
    case 'date':
      sortedList = orderList.slice().sort(
        (a: Spending, b: Spending) => {
          let dateA = 0;
          let dateB = 0;
          if (a.spent_at) dateA = new Date(a.spent_at).getTime();
          if (b.spent_at) dateB = new Date(b.spent_at).getTime();
        
          return dateA - dateB;
        });
      break;
    case '-amount_in_huf':
      sortedList = orderList.slice().sort((a: Spending, b: Spending) => {
        let amountA = 0;
        let amountB = 0;
        if (a.amount) amountA = +a.amount;
        if (b.amount) amountB = +b.amount;
      
        return amountB - amountA;
      });
      break;
    case 'amount_in_huf':
      sortedList = orderList.slice().sort((a: Spending, b: Spending) => {
        let amountA = 0;
        let amountB = 0;
        if (a.amount) amountA = +a.amount;
        if (b.amount) amountB = +b.amount;
      
        return amountA - amountB;
      });
      break;
    default:
      sortedList = orderList
        .slice()
        .sort(
          (a: Spending, b: Spending) => {
            let dateA = 0;
            let dateB = 0;
            if (a.spent_at) dateA = new Date(a.spent_at).getTime();
            if (b.spent_at) dateB = new Date(b.spent_at).getTime();
          
            return dateA - dateB;
          });
    }
    setSpendings(sortedList);
    if (filters.order != orderBy) {
      setFilters((previousFilters) => ({
        ...previousFilters,
        order: orderBy,
      }));
    }
  }

  return {
    spendings,
    isLoading,
    isError,
    currencyFilter: filters.currency,
    addSpending,
    filterSpendings,
    orderSpendings,
  };
}
