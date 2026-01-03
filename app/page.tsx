import SimpleAreaChart from "@/components/charts/ExpenseChart/ExpenseChart";
import { SummaryCard } from "@/components/charts/SummaryCard/SummaryCard";
// import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import styles from "./Page.module.scss";
import PieChartExpenses from "@/components/charts/PieChart/PieChart";

export default function Home() {
    return (
        <section className={styles.dashboard}>
            <section className={styles.container}>
                <div className={styles.leftContent}>
                    <SummaryCard />
                    <SimpleAreaChart />
                </div>

                <div className={styles.rightContent}>
                    <PieChartExpenses />
                </div>
            </section>
        </section>
    );
}
