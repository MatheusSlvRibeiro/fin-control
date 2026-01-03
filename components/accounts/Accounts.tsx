import styles from "./Accounts.module.scss";

export function AccountsCard() {
    function formatCurrency(value: number): string {
        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }
    const tableHeader = [
        {
            name: "Descrição",
        },
        {
            name: "Receitas",
        },
        {
            name: "Despesas",
        },
        {
            name: "Saldo",
        },
    ];

    const accounts = [
        {
            name: "Minha Carteira",
            incomes: 0,
            expenses: 0,
            balance: 0,
        },
        {
            name: "Minha Conta Corrente",
            incomes: 8700,
            expenses: 1768,
            balance: 6932,
        },
    ];

    return (
        <section className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr className={styles.tableRow}>
                        {tableHeader.map((item) => {
                            return (
                                <th
                                    key={item.name}
                                    className={styles.tableHeader}
                                >
                                    {item.name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <tbody className={styles.tableBody}>
                    {accounts.map((item) => {
                        return (
                            <tr className={styles.tableRow} key={item.name}>
                                <td className={styles.accountName}>
                                    {item.name}
                                </td>
                                <td className={styles.value}>
                                    {formatCurrency(item.incomes)}
                                </td>
                                <td className={styles.value}>
                                    {formatCurrency(item.expenses)}
                                </td>
                                <td className={styles.value}>
                                    {formatCurrency(item.balance)}
                                </td>
                            </tr>
                        );
                    })}
                    <tr className={styles.tableRow}>
                        <td className={styles.accountName}>Total</td>
                        <td className={styles.value}>{formatCurrency(0)}</td>
                        <td className={styles.value}>{formatCurrency(0)}</td>
                        <td className={styles.value}>{formatCurrency(0)}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
