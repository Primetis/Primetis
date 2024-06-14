import { ReactNode, useTransition } from "react";
import Header from "../Header";
import Head from "next/head";
import { Exo_2 } from "next/font/google";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

export const exo2 = Exo_2({
  subsets: ["vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const DynamicFooter = dynamic(() => import("../Footer"), {
  loading: () => <></>,
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
          exo2.className
        )}
      >
        {children}
      </main>
      <DynamicFooter />
    </>
  );
}
