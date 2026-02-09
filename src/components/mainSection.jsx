import AboutSection from "./aboutSection";
import ServiceSection from "./serviceSection";
import Curve from "../assets/curve.svg";

const MainSection = () => {
  return (
    <main className="relative w-full">

      {/* Curva decorativa */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
       <img
  src={Curve}
  alt=""
  className="
    hidden md:block
    absolute
    right-0
    w-[600px]
    pointer-events-none
  "
/>

      </div>

      {/* HERO */}
      <section className="relative z-10 mt-24 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-900 leading-tight mb-6">
              Bem-vindo à{" "}
              <span className="relative inline-block">
                Consult
                <span className="text-[#8A0000]">AR</span>
                <span
                  className="
                    absolute inset-0 -z-10
                    bg-red-500/30
                    -skew-y-3
                    rounded-sm
                  "
                />
              </span>
            </h1>

            <p className="inline-block text-xl font-semibold text-[#8A0000] bg-[#8A0000]/10 px-5 py-2 mb-8">
              Saúde e Bem-Estar
            </p>

            <p className="text-xl text-neutral-700 max-w-2xl mb-12 leading-relaxed">
              Nós conectamos você aos{" "}
              <span className="font-semibold text-[#8A0000]">
                melhores profissionais
              </span>{" "}
              de saúde para um atendimento{" "}
              <span className="underline decoration-red-700">
                personalizado e eficaz
              </span>.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("sobre-nos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                bg-[#8A0000] hover:bg-[#d10303]
                text-white font-semibold
                px-8 py-3 rounded-lg
                transition-colors duration-300
              "
            >
              Quero saber mais
            </button>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre-nos" className="mt-[150px] relative">
        <AboutSection />
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" >
        <ServiceSection />
      </section>

    </main>
  );
};

export default MainSection;
