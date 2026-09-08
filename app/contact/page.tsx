import AllContactCS from "./components/allContactCS";
import HeroContactCS from "./components/heroContactCs";

const ContactPage = () => {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-linear-to-b
        from-[#056dc9]
        via-[#0453a8]
        to-[#033790]
      ">
      {/* BACKGROUND LIQUID REFRACTIONS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-52
          top-[10%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#4DA3FF]/18
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-52
          top-[38%]
          h-[540px]
          w-[540px]
          rounded-full
          bg-[#168cff]/14
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-60
          left-[20%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#FAAE17]/8
          blur-3xl
        "
      />

      {/* SOFT TOP LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-48
          w-[75%]
          -translate-x-1/2
          rounded-full
          bg-white/5
          blur-3xl
        "
      />

      <div className="relative z-10">
        <HeroContactCS />
        <AllContactCS />
      </div>
    </main>
  );
};

export default ContactPage;
