import { render, screen } from '@testing-library/react';
import React from 'react';
import SpendingForm from './SpendingForm';
import { Spending } from '../../interfaces';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

test('if description and amunt is entered, the save button is enabled', async () => {
  render(<SpendingForm addSpending={(value: Spending): void => {
    console.log('New spending: ', value);
  }} />);
  const button = await screen.findByRole('button', { name: /save/i });
  expect(button).toBeDisabled();

  const description = screen.getByPlaceholderText(/description/i);
  const amount = screen.getByPlaceholderText(/amount/i);
  userEvent.type(description, 'some description');
  userEvent.type(amount, '50.5');

  expect(button).toBeEnabled();
});
