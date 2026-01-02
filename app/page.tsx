// import SimpleAreaChart from "@/components/charts/ExpenseChart";
import { SummaryCard } from "@/components/charts/SummaryCard/SummaryCard";
import { PageHeader } from "@components/layout/PageHeader/PageHeader";

export default function Home() {
    return (
        <div>
            <PageHeader 
                title="Resumo"
                subtitle="Visão geral das suas finanças" />
            
            <SummaryCard />
            {/* <SimpleAreaChart /> */}
        </div>
    );
}
