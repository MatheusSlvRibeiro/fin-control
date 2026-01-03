"use client";

import { usePathname } from "next/navigation";
import {
    Wallet,
    LayoutDashboard,
    Landmark,
    Tags,
    ArrowRightLeft,
} from "lucide-react";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        {
            name: "Resumo",
            icon: LayoutDashboard,
            path: "/",
        },
        {
            name: "Contas",
            icon: Landmark,
            path: "/accounts",
        },
        {
            name: "Transações",
            icon: ArrowRightLeft,
            path: "/transacoes",
        },
        {
            name: "Categorias",
            icon: Tags,
            path: "/categorias",
        },
    ];

    return (
        <aside className={styles.aside}>
            <header className={styles.logo}>
                <div className={styles.logoIcon}>
                    <Wallet />
                </div>
                <span>FinControl</span>
            </header>
            <nav className={styles.navbar}>
                <ul>
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;

                        return (
                            <li key={item.name}>
                                <a
                                    className={
                                        isActive
                                            ? styles.navItemActive
                                            : styles.navItem
                                    }
                                    href={item.path}
                                >
                                    <item.icon className={styles.navIcon} />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <footer>
                    &copy; 2026 FinControl
            </footer>
        </aside>
    );
}
