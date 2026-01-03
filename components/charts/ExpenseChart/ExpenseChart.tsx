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
        name: "Page A",
        uv: 4000,
    },
    {
        name: "Page B",
        uv: 3000,
    },
    {
        name: "Page C",
        uv: 2000,
    },
    {
        name: "Page D",
        uv: 2780,
    },
    {
        name: "Page E",
        uv: 1890,
    },
    {
        name: "Page F",
        uv: 2390,
    },
    {
        name: "Page G",
        uv: 3490,
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
                    dataKey="uv"
                    stroke="#D94E41"
                    fill="#D94E41"
                />
            </AreaChart>
        </section>
    );
};

export default SimpleAreaChart;
