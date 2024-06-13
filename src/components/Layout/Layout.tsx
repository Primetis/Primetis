import { ReactNode } from "react";
import Header from "../Header";
import Head from "next/head";
import Footer from "../Footer";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const DynamicFooter = dynamic(() => import("../Footer"), {
  loading: () => <>Loading...</>,
});

export default function Layout({
  children,
  pageName = "Home",
}: {
  children: ReactNode;
  pageName?: string;
}) {
  const tabName = `Primetis | ${pageName}`;
  return (
    <>
      <Head>
        <title>{tabName}</title>
      </Head>
      <Header />
      <main
        className={cn(
          "max-w-[100rem] mx-auto min-h-screen text-black mb-16 lg:pb-16 lg:mb-0 px-4 lg:px-0",
          poppins.className
        )}
      >
        {children}
      </main>
      <DynamicFooter />
    </>
  );
}
