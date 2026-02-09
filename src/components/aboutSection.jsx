
import equipeImage from '../assets/about-image.png';

const AboutSection = () => {
    return (
        <section id="sobre-nos" className="py-20 bg-[#e4e4e4] shadow-inner">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Imagem */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={equipeImage} 
                        alt="Sobre nós"
                        className="rounded-2xl shadow-lg w-full max-w-md object-cover"
                    />
                </div>

                {/* Conteúdo textual */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        <span className="relative z-10 text-[#8A0000]">
                        Sobre nós
                        <span
                            className="
                            absolute inset-0 
                            -z-10 
                            bg-[#ff0000]/30 
                            transform -skew-y-5 
                            rounded-sm
                            "
                            style={{ pointerEvents: "none" }}
                        />
                        </span>
                    </h2>
                

                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        A ConsultAR foi fundada pela Regiane Magalhães e Acácio Borges que estabeleceram parceria com profissionais de outras especialidades e estabelecimentos na área da saúde. Eles sempre buscaram colocar o público atendido em posição privilegiada no universo da empresa: ao centro, com os serviços oferecidos em sua órbita.
                    </p>

                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        Desta forma, busca-se ofertar um olhar integrativo e um atendimento contínuo e humanizado, visando à promoção da Saúde e do Bem-Estar. Hoje a ConsultAR é gerida por três profissionais: Regiane Magalhães & Bárbara Crivas (psicólogas) e pelo Acácio Borges (pedagogo e massoterapeuta).
                    </p>

                    <a 
                        href="https://wa.me/5524981159042?text=Ol%C3%A1%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informações+sobre+o+acompanhamento+psicol%C3%B3gico"
                        className="inline-block px-8 py-4 bg-black text-white font-medium rounded-xl shadow-md hover:bg-gray-900 transition"
                    >
                        Entre em Contato
                    </a>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
