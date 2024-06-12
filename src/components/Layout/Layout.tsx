import { ReactNode } from "react";
import Header from "../Header";
import Head from "next/head";

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
      <main className="max-w-[100rem] mx-auto">{children}</main>
    </>
  );
}
