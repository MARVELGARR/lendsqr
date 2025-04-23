import { Inter, Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";
import { Lato } from "next/font/google";


//login page

export const inter = Inter({
  subsets: ["latin"],
});

export const sidebarItems = Work_Sans({
  weight: ["400", "700", "900"],
  fallback: ["Arial", "sans-serif"],
  subsets: ["latin"],
});

export const Doc = Roboto({
  weight: ["400", "500", "600"],
  subsets: ["latin"], // 👈 Add this line
});

export const tabsFont = Lato({
  weight: ["400"],
  fallback: ["Roboto", "Arial", "sans-serif"],
  subsets: ["latin"],
});
