import type { Metadata } from "next";
import "@styles/main.scss";
import { Sidebar } from "@/components/layout/Sidebar/sidebar";

export const metadata: Metadata = {
    title: "FinControl",
    description: "Created by Matheus ribeiro",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`app-layout`}
            >
                <Sidebar />
                <main>{children}</main>
            </body>
        </html>
    );
}
