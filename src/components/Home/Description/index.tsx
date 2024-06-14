import Image from "next/image";
import Link from "next/link";
import Benifits from "./benifits";
import { useTranslation } from "next-i18next";

export default function Description() {
  const { t } = useTranslation("common");
  return (
    <section className="flex flex-col gap-y-16 lg:gap-y-6">
      <main className="flex flex-col md:flex-row items-center lg:justify-between lg:items-center max-w-7xl mx-auto">
        <Image
          src="/illustrations/Description.png"
          alt=""
          width={1000}
          height={1000}
          quality={85}
          priority
          className="lg:w-[40%] w-1/2 h-auto"
        />
        <div className="lg:w-1/2 flex flex-col gap-y-6 lg:gap-y-6 text-center md:text-left items-center md:items-start">
          <p className="lg:text-5xl text-2xl font-extrabold text-primary">
            {t("introduction.title")}{" "}
            <span className="text-secondary">
              {t("introduction.highlight")}.
            </span>
          </p>
          <p className="font-base lg:text-lg text-gray-strong">
            {t("introduction.desc.discover")}{" "}
            <span className="text-primary font-semibold">
              {t("introduction.desc.highlight")}
            </span>
            {t("introduction.desc.content")}
          </p>
          <Link
            className="bg-primary rounded-lg font-semibold text-white w-fit p-2.5 lg:p-3 lg:text-lg"
            href="/portfolio"
          >
            {t("introduction.desc.button")}
          </Link>
        </div>
      </main>
      <Benifits />
    </section>
  );
}
