import Accordion from "@/app/components/faq/Accordion";
import Contact from "@/app/components/home/contact";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import Promo from "@/app/components/promo";
import HeroProgram from "./components/heroProgram";

const Program = () => {
  return (
    <>
      <HeroProgram />
      <Accordion />
      <Promo />
      <Contact />
      <MediaMassa />
    </>
  );
};

export default Program;
