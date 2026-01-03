"use client";

import {
    Cell,
    Pie,
    PieChart,
    PieLabelRenderProps,
    ResponsiveContainer,
} from "recharts";
import styles from "./PieChartExpense.module.scss"

// #region Sample data
const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 500 },
];

// #endregion
const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: PieLabelRenderProps) => {
    if (
        cx == null ||
        cy == null ||
        innerRadius == null ||
        outerRadius == null
    ) {
        return null;
    }
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const ncx = Number(cx);
    const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const ncy = Number(cy);
    const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > ncx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${((percent ?? 1) * 100).toFixed(0)}%`}
        </text>
    );
};

export default function PieChartExpenses({
    isAnimationActive = true,
}: {
    isAnimationActive?: boolean;
}) {
    return (
        <div className={styles.pieChart}>
            <p>Contas por categoria</p>
            <ResponsiveContainer className={styles.container}>
                <PieChart>
                    <Pie
                        data={data}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        fill="#8884d8"
                        dataKey="value"
                        isAnimationActive={isAnimationActive}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${entry.name}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
