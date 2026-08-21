import HeroAbout from "@/app/components/about/heroAbout";
import LearningMethod from "@/app/components/learnhinMethod/learningMethod";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import ProfessionalTeam from "@/app/components/profesionalTeam";
import Promo from "@/app/components/promo";

const About = () => {
  return (
    <>
      <HeroAbout />
      <LearningMethod />
      <ProfessionalTeam />
      <Promo />
      <MediaMassa />
    </>
  );
};

export default About;
