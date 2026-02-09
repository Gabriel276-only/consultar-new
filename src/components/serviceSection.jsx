import Carousel from "./carrousel";

const ServiceSection = () => {
  return (
    <section
      id="servicos"
      className="w-full min-h-screen  mx-auto px-6 py-5 "
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-900">
        Nossos Pilares 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        
        {/* Card */}
        <div className="group bg-white backdrop-blur-xl rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
            Nossa Missão
          </h3>
          <p className="text-neutral-700 leading-relaxed text-sm">
            Promover o bem-estar integral de cada indivíduo por meio de um
            atendimento personalizado, ético e humanizado. Acreditamos que a
            saúde vai além da ausência de doenças, abrangendo o bem-estar físico,
            emocional e social.
          </p>
        </div>

        {/* Card */}
        <div className="group bg-white backdrop-blur-xl rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
            Nossa Visão
          </h3>
          <p className="text-neutral-700 leading-relaxed text-sm">
            Ser referência em saúde e bem-estar, oferecendo soluções inovadoras
            que transformem a vida das pessoas e promovam hábitos saudáveis,
            tornando qualidade de vida acessível a todos.
          </p>
        </div>

        {/* Card */}
        <div className="group bg-white backdrop-blur-xl rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
            Nossos Valores
          </h3>
          <p className="text-neutral-700 leading-relaxed text-sm">
            Humanização, integridade, respeito às diferenças e compromisso com a
            excelência. Esses valores são a base de todas as nossas ações e
            refletem a paixão pela construção de uma marca sólida e confiável.
          </p>
        </div>
      </div>

      {/* Carrossel */}
      <Carousel />
    </section>
  );
};

export default ServiceSection;
