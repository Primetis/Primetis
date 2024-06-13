import { ReactNode } from "react";
import BenifitCard from "./benifitCard";
import { FileStack, MessageCircleQuestion, School } from "lucide-react";

export type Benifit = {
  icon: ReactNode;
  heading: string;
  desc: string;
};

export default function Benifits() {
  const benifits = [
    {
      icon: <FileStack className="text-primary lg:size-24 size-10" />,
      heading: "Beautiful and Various Templates",
      desc: "Explore Primetis and discover a diverse selection of beautifully crafted templates designed to suit every style and purpose. Whether you're showcasing a portfolio, launching a startup, or establishing an online presence, our templates offer stunning aesthetics and easy customization to help you stand out effortlessly.",
    },
    {
      icon: <School className="text-primary lg:size-24 size-10" />,
      heading: "Suitable For Many Professions",
      desc: "Primetis offers versatile templates tailored for professionals across diverse industries. From corporate to creative fields, our templates reflect modern trends and best practices, empowering you to showcase your expertise effectively and professionally.",
    },
    {
      icon: (
        <MessageCircleQuestion className="text-primary lg:size-24 size-10" />
      ),
      heading: "Strong Support",
      desc: "At Primetis, we prioritize your success with reliable support at every step. Our dedicated team ensures prompt assistance, whether you need guidance on template customization or technical help, ensuring a smooth experience as you build and manage your online presence.",
    },
  ];
  return (
    <div className="flex flex-col md:w-3/5 lg:w-auto md:mx-auto lg:mx-0 lg:flex-row lg:jusitfy-between gap-x-14 gap-y-10">
      {benifits.map((benifit) => {
        return <BenifitCard benifit={benifit} />;
      })}
    </div>
  );
}
