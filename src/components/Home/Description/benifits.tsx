import { ReactNode } from "react";
import BenifitCard from "./benifitCard";

export type Benifit = {
  icon: ReactNode;
  heading: string;
  desc: string;
};

export default function Benifits() {
  const benifits = [
    {
      icon: <></>,
      heading: "Beautiful and Various Templates",
      desc: "",
    },
    {
      icon: <></>,
      heading: "Suitable For Many Professions",
      desc: "",
    },
    {
      icon: <></>,
      heading: "Strong Support",
      desc: "",
    },
  ];
  return (
    <div className="flex lg:flex-row jusitfy-between gap-x-4">
      {benifits.map((benifit) => {
        return <BenifitCard benifit={benifit} />;
      })}
    </div>
  );
}
