import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import prof1 from "../assets/profissionais/profissional1.png";
import prof2 from "../assets/profissionais/profissional2.png";
import prof3 from "../assets/profissionais/profissional3.png";
import prof4 from "../assets/profissionais/profissional4.png";
import prof5 from "../assets/profissionais/profissional5.png";
import prof7 from "../assets/profissionais/profissional7.png";

const slideData = [
  {
    title: "Massoterapeuta Acácio Fonseca Borges",
    image: prof1,
    description:
    "Desenvolvo protocolos para promoção de Saúde e Bem-Estar e prevenção de dores. Ajudo você a desenvolver hábitos mais saudáveis e sem dores no dia a dia. São mais de 30 certificações na área de massoterapia. Trabalho com massagens relaxantes, desportivas e terapêuticas, além de outras técnicas como terapia com ventosas, dry needling, moxa, cone hindu, pedras quentes e bandagem funcional.",

  },
  {
    title: "Psicóloga Regiane Magalhães (CRP 05/31197)",
    image: prof2,
    description:
        "Pós-graduada em Gestão de Pessoas e Psicanalista em formação. Já atuei como palestrante e professora universitária. Regularmente habilitada pelo Conselho de Psicologia, atualmente atuo como psicóloga clínica de adultos, auxiliando no tratamento de demandas emocionais e na promoção de Saúde e Bem-Estar.",
  },
  {
    title: "Psicóloga Bárbara Crivas (CRP 05/55030)",
    image: prof3,
    description:
        "Graduada em Psicologia e Direito. Atuo na promoção de Saúde e Bem-Estar com o público feminino no desenvolvimento de autonomia, resgate da autoestima e estabelecimento de relações saudáveis. Também atendo o público infantojuvenil por meio de grupos psicoterapêuticos associados ao trabalho com os familiares. Habilitada pelo Conselho de Psicologia para atendimentos presenciais e remotos.",
  },
  {
    title: "Psicóloga Raabe Santos (CRP 05/57226)",
    image: prof4,
    description:
        "Pós-graduada em Neuropsicologia, Psicopedagogia e Psicologia Hospitalar e da Saúde. Realizo avaliação do desenvolvimento infantil e trabalho com demandas de autismo infantil e técnica ABA visando a promoção de Saúde e Bem-Estar. Habilitada pelo Conselho de Psicologia, faço atendimento infantojuvenil e orientação de pais e responsáveis.",
  },
  {
    title: "Psicopedagoga Ana Cláudia",
    image: prof5,
    description:
        "Professora de Educação Especial desde 2002 e formada em Psicopedagogia. Atende no Espaço Psicopedagógico em Barra do Piraí. Especialista em autismo, apaixonada por práticas baseadas em evidências: ABA, TEACCH, Denver, DIR Floortime (DIR 101 e 201 em andamento) e integração sensorial.",
  },
  {
    title: "Psicóloga Fabiana da Fonseca (CRP 05/71281)",
    image: prof7,
    description:
      "Graduada em Psicologia, atende na abordagem TCC (Terapia Cognitivo-Comportamental), uma linha de trabalho que tem como princípio central analisar a influência dos pensamentos sobre as nossas emoções e comportamentos.",
  },
];

const Carousel = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-12 text-center">
          Nossos Profissionais
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={1.1}
          infinite ={true}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="
                bg-gray-50
                rounded-2xl
                shadow-inner
                shadow-gray-300/50
                p-4
                max-w-[400px]
                min-h-[420px]
                flex flex-col
                items-center
                text-center
              ">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 object-cover ring-4 ring-red-800/80"
                />

                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  {slide.title}
                </h3>

                <p className="text-[#3F3F3F] text-sm leading-relaxed text-justify">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
