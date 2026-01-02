import expensesData from "@data/Expenses.json";
import { Expense } from "@/types/Expense";
import { ExpenseFilter } from "@/types/ExpenseFilter";

export const expenseService = {
    getTotal(filter: ExpenseFilter = {}): number {
        const items: Expense[] = expensesData;
        
        return items
            .filter((item) => !filter.type || item.type === filter.type)
            .reduce((total, item) => total + Number(item.value), 0);
    },
}