import { TypewriterEffect } from "@/components/ui/aceternity/typewriterEffect";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Content = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const VIwords = [
    {
      text: "Thiết",
    },
    {
      text: "Kế",
    },
    {
      text: "Trang",
    },
    {
      text: "Web",
    },
    {
      text: "Của",
    },
    {
      text: "Riêng",
    },
    {
      text: "Bạn",
    },
    {
      text: "Tại",
    },
    {
      text: "Primetis.",
      className: "text-primary dark:text-primary",
    },
  ];

  const ENwords = [
    {
      text: "Design",
    },
    {
      text: "Your",
    },
    {
      text: "Digital",
    },
    {
      text: "Presence",
    },
    {
      text: "With",
    },
    {
      text: "Primetis.",
      className: "text-primary dark:text-primary",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:items-start gap-y-6 text-center lg:text-left lg:gap-y-10 lg:w-1/2 self-center">
      <TypewriterEffect
        className="lg:text-left h-[118.13px] md:h-fit !leading-normal lg:h-[126px] lg:text-5xl text-3xl text-center"
        words={router.locale === "en" ? ENwords : VIwords}
      />
      <p className="lg:text-xl text-gray-strong">{t("hero.desc")}</p>
      <Link href={"/portfolio"}>
        <button className="p-[4px] relative w-fit font-semibold lg:text-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl" />
          <div className="px-8 py-2 bg-white rounded-lg relative group transition duration-150 text-black lg:hover:bg-gradient-to-r from-primary to-secondary lg:hover:text-white ease-linear">
            {t("hero.button")}
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Content;
