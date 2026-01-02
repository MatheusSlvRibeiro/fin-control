"use client";

import { Landmark, Plus, Minus, ArrowUpDown, CreditCard } from "lucide-react";
import type { LucideProps } from "lucide-react";
import styles from "./SummaryCard.module.scss";
import { useExpenseSummary } from "@/hook/useExpenses";
import type { ComponentType } from "react";

export function SummaryCard() {
    const { totals } = useExpenseSummary();

    const variantStyles = {
        default: styles.default,
        income: styles.income,
        expense: styles.expense,
        transfer: styles.transfer,
        credit: styles.credit,
    } as const;

    type VariantKey = keyof typeof variantStyles;
    type SummaryItem = {
        icon: ComponentType<LucideProps>;
        name: string;
        variant: VariantKey;
        value?: number;
    };

    const Expenses: readonly SummaryItem[] = [
        {
            icon: Landmark,
            name: "Contas",
            variant: "default" as VariantKey,
        },
        {
            icon: Plus,
            name: "Receitas",
            variant: "income" as VariantKey,
            value: totals.income ?? 0,
        },
        {
            icon: Minus,
            name: "Despesas",
            variant: "expense" as VariantKey,
            value: totals.expense ?? 0,
        },
        {
            icon: ArrowUpDown,
            name: "Movimentação",
            variant: "transfer" as VariantKey,
            value: totals.transfer ?? 0,
        },
        {
            icon: CreditCard,
            name: "Cartões de Crédito",
            variant: "credit" as VariantKey,
            value: totals.credit ?? 0,
        },
    ] as const;

    return (
        <section className={styles.grid}>
            {Expenses.map((item) => (
                <div
                    key={item.name}
                    className={`${styles.card} ${variantStyles[item.variant]}`}
                >
                    <div className={styles.icon}>
                        <item.icon />
                    </div>
                    <div className={styles.itemInfo}>
                        <span className={styles.values}>
                            <span>R$ </span>
                            {Number(item.value ?? 0).toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                        </span>
                        <p className={styles.names}>{item.name}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
