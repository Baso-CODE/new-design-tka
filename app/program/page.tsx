import Accordion from "../components/faq/Accordion";
import Contact from "../components/home/contact";
import MediaMassa from "../components/mediaMassa/mediaMassa";
import Promo from "../components/promo";
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
