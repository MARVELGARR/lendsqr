import { Inter, Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";
import { Lato } from "next/font/google";
const inter = Inter();

//login page

export const sidebarItems = Work_Sans({
  weight: ["400", "700", "900"],
  fallback: ["Arial", "sans-serif"],
  subsets: ["latin"],
});

export const Doc = Roboto({
  weight: ["400", "500", "600"],
});

export const tabs = Lato({
weight: ["400"],
  fallback: ["Roboto", "Arial", "sans-serif"],
  subsets: ["latin"],
});
