import React from "react";
import type { Metadata } from "next";
import HeaderComponent from "../../../../components/headerComponents/headerComponent";
import SidebarComponent from "../../../../components/sidebar/SidebarComponent";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Lendsqr - Dashboard",
  description: "Lendsqr Dashboard page",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layoutContainer}>
      <HeaderComponent />
      <div className={styles.layoutBody}>
        <SidebarComponent />
        <main className={styles.layoutMain}>{children}</main>
      </div>
    </div>
  );
}
