"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import styles from "./ExpenseChart.module.scss";

const data = [
    {
        name: "27/12",
        despesa: 19,
    },
    {
        name: "28/12",
        despesa: 89,
    },
    {
        name: "29/12",
        despesa: 120,
    },
    {
        name: "30/12",
        despesa: 550,
    },
    {
        name: "31/12",
        despesa: 50,
    },
    {
        name: "01/01",
        despesa: 1100,
    },
    {
        name: "02/01",
        despesa: 100,
    },
];

const SimpleAreaChart = () => {
    return (
        <section className={styles.chartContainer}>

            <p>Evolução das despesas</p>

            <AreaChart
                className={styles.chart}
                responsive
                data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="despesa"
                    stroke="#D94E41"
                    fill="#D94E41"
                />
            </AreaChart>
        </section>
    );
};

export default SimpleAreaChart;
