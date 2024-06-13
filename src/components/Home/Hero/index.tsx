import Content from "./content";
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards";

export default function Hero() {
  const portfolios = [
    {
      img: "/portfolios/Portfolio1.png",
    },
    {
      img: "/portfolios/Portfolio2.png",
    },
    {
      img: "/portfolios/Portfolio3.png",
    },
    {
      img: "/portfolios/Portfolio4.png",
    },
  ];
  return (
    <section className="!text-black max-w-7xl mx-auto flex lg:flex-row flex-col lg:justify-between lg:py-16 lg:px-4">
      <Content />
      <InfiniteMovingCards
        className="w-1/2"
        items={portfolios}
        direction="right"
        speed="slow"
      />
    </section>
  );
}
