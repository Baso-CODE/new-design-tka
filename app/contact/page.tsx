import AllContactCS from "./components/allContactCS";
import HeroContactCS from "./components/heroContactCs";

const ContactPage = () => {
  return (
    <main className="bg-linear-to-b from-[#056dc9] to-[#033790] min-h-screen overflow-hidden">
      <HeroContactCS />
      <AllContactCS />
    </main>
  );
};

export default ContactPage;
