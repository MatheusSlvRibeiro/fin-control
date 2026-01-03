import SimpleAreaChart from "@/components/charts/ExpenseChart/ExpenseChart";
import { SummaryCard } from "@/components/charts/SummaryCard/SummaryCard";
import { PageHeader } from "@components/layout/PageHeader/PageHeader";
import styles from "./Page.module.scss";

export default function Home() {
    return (
        <section className={styles.dashboard}>
            <PageHeader 
                title="Resumo"
                subtitle="Visão geral das suas finanças" />
            
            <SummaryCard />
            <SimpleAreaChart />
        </section>
    );
}
