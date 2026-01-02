export type ExpenseType = 'income' | 'expense' | 'transfer' | 'credit';

export type Expense = {
    id: string;
    description: string;
    category: string;
    value: number;
    type: ExpenseType;
    date: string;
}
