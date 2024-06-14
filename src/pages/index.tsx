import Description from "@/components/Home/Description";
import Hero from "@/components/Home/Hero";
import Layout from "@/components/Layout/Layout";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Description />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});
