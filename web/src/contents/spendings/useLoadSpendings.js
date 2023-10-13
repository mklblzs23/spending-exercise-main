import { useEffect, useState } from 'react';
import spendingService from '../../service/spendingService';
import { isEmpty } from 'lodash';
import { CURRENCY } from '../../constants/Currency';

export default function useLoadSpendins() {
  const [allSpendings, setAllSpendings] = useState([]);
  const [spendings, setSpendings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErrorr, setIsError] = useState(false);
  const [filters, setFilters] = useState({
    currency: CURRENCY.ALL,
    order: '',
  });

  useEffect(() => {
    let isCancelled = false;
    async function loadSpendings() {
      try {
        const spendingList = await spendingService.getSpendigns();

        if (spendingList && !isCancelled) {
          setAllSpendings(spendingList);
          setSpendings(spendingList.sort((a, b) => (new Date(b.spent_at) - new Date(a.spent_at))));
        }
      } catch(error) {
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
 
  function addSpending(value) {
    const newAllSpendings = isEmpty(allSpendings) ? [value] : [...allSpendings, value];
    setAllSpendings(newAllSpendings);
    if (value.currency == filters.currency || filters.currency == CURRENCY.ALL) {
      const newFilteredSpendings = isEmpty(spendings) ? [value] : [...spendings, value];
      orderSpendings(filters.order, newFilteredSpendings);
    }
  }

  function filterSpendings(value) {
    const filteredSpendings = value == CURRENCY.ALL ? allSpendings : allSpendings?.filter(spending => spending.currency == value);
    if (spendings != filteredSpendings) setSpendings(filteredSpendings);
    if (filters.currency != value) {
      setFilters((previousFilters) =>({
        ...previousFilters,
        currency: value,
      }));
    }
  }

  function orderSpendings(orderBy, list) {
    const orderList = list ?? spendings;
    let sortedList;
    switch(orderBy) {
    case 'date':
      sortedList = orderList.slice().sort((a, b) => (new Date(a.spent_at) - new Date(b.spent_at)));
      break;
    case '-amount_in_huf':
      sortedList = orderList.slice().sort((a, b) => (b.amount - a.amount));
      break;
    case 'amount_in_huf':
      sortedList = orderList.slice().sort((a, b) => (a.amount - b.amount));
      break;
    default:
      sortedList = orderList.slice().sort((a, b) => (new Date(b.spent_at) - new Date(a.spent_at)));
    }
    setSpendings(sortedList);
    if (filters.order != orderBy) {
      setFilters((previousFilters) =>({
        ...previousFilters,
        order: orderBy,
      }));
    }
  }

  return {
    spendings,
    isLoading,
    isErrorr,
    currencyFilter: filters.currency,
    addSpending,
    filterSpendings,
    orderSpendings,
  };
}
