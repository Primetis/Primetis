import { ReactNode } from "react";
import BenifitCard from "./benifitCard";
import { FileStack, MessageCircleQuestion, School } from "lucide-react";
import { useTranslation } from "next-i18next";

export type Benifit = {
  icon: ReactNode;
  heading: string;
  desc: string;
};

export default function Benifits() {
  const { t } = useTranslation("common");
  const benifits = [
    {
      icon: <FileStack className="text-primary lg:size-24 size-10" />,
      heading: t("introduction.benifits.one.title"),
      desc: t("introduction.benifits.one.desc"),
    },
    {
      icon: <School className="text-primary lg:size-24 size-10" />,
      heading: t("introduction.benifits.two.title"),
      desc: t("introduction.benifits.two.desc"),
    },
    {
      icon: (
        <MessageCircleQuestion className="text-primary lg:size-24 size-10" />
      ),
      heading: t("introduction.benifits.three.title"),
      desc: t("introduction.benifits.three.desc"),
    },
  ];
  return (
    <div className="flex flex-col md:w-3/5 lg:w-auto md:mx-auto lg:mx-0 lg:flex-row lg:jusitfy-between gap-x-14 gap-y-10">
      {benifits.map((benifit) => {
        return <BenifitCard key={benifit.heading} benifit={benifit} />;
      })}
    </div>
  );
}
