export type ExpenseType = 'income' | 'expense' | 'transfer' | 'credit';

export type ExpenseDate = {
    date: string;
}

export type Expense = {
    id: string;
    description: string;
    category: string;
    value: number;
    type: ExpenseType;
    date: ExpenseDate;
}

