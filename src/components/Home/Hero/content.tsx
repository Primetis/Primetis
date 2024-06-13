import { TypewriterEffect } from "@/components/ui/aceternity/typewriterEffect";

export default function Content() {
  const words = [
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
        className="lg:text-left h-[63px] md:h-fit lg:h-[84px] lg:text-5xl text-3xl text-center"
        words={words}
      />
      <p className="lg:text-xl">
        {
          "Effortlessly create a professional-looking website with Primetis. Our extensive range of customizable templates ensures you'll find the perfect match for your needs."
        }
      </p>
      <button className="p-[4px] relative w-fit font-semibold lg:text-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl" />
        <div className="px-8 py-2 bg-white rounded-lg relative group transition duration-150 text-black lg:hover:bg-gradient-to-r from-primary to-secondary lg:hover:text-white ease-linear">
          Create Your Website
        </div>
      </button>
    </div>
  );
}
