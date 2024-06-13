import { Benifit } from "./benifits";

export default function BenifitCard({ benifit }: { benifit: Benifit }) {
  const { icon, heading, desc } = benifit;

  return (
    <div className="flex flex-col gap-y-2.5 lg:gap-y-5 items-center lg:items-start text-center lg:text-left">
      {icon}
      <p className="lg:text-xl md:text-lg text-secondary font-semibold">
        {heading}
      </p>
      <p className="font-base lg:text-lg text-gray-strong">{desc}</p>
    </div>
  );
}
