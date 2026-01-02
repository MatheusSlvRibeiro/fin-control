"use client";

import { expenseService } from "@/services/expenseService";
import { ExpenseType } from "@/types/Expense";
import { useState } from "react";

export function useExpenseSummary(){
    
    const [totals] = useState<Record<ExpenseType, number>>({
            income: expenseService.getTotal({ type: 'income'}),
            expense: expenseService.getTotal({ type: 'expense'}),
            transfer: expenseService.getTotal({ type: 'transfer'}),
            credit: expenseService.getTotal({ type: 'credit'})
    });

    return {
        totals
    };
}