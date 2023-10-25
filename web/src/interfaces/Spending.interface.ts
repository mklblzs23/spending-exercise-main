export interface Spending {
  id?: number,
  description: string,
  amount: number | string,
  spent_at?: number | Date,
  currency: string,
}
