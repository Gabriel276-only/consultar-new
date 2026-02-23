import { useState } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const profissionais = [
{ nome: 'Bárbara Crivas - Psicóloga', criterio: ['avaliacao-psicologica', 'Depressao','autoconhecimento', 'psicologia-clinica', 'grupos-terapeuticos', 'Ansiedade', 'Autoconhecimento', 'Cirurgia Bariátrica', 'Conflitos Familiares', 'Crianças e Adolescentes', 'Emagrecimento/Obesidade', 'Estresse','Exame Psicológico/Avaliação Admissional', 'Incertezas quanto ao Futuro', 'Maternidade', 'Orientação de Pais', 'Questões Raciais', 'Saúde Feminina', 'Suicídio','Violência Doméstica'], contato: "https://wa.me/5524992478872?text=Ol%C3%A1%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+acompanhamento+psicol%C3%B3gico" },
{ nome: 'Regiane Araújo - Psicóloga', criterio: ['avaliacao-psicologica', 'Depressao', 'Desenvolvimento de Competências Profissionais','psicologia-clinica', 'Adoção', 'Ansiedade', ' Cirurgia Bariátrica', 'Compulsões', 'Conflitos Familiares', 'Depressão', 'Desenvolvimento de Compentências Profissionais', 'Emagrecimento/Obesidade', 'Estresse', 'Exame Psicológico/Avaliação Admissional', 'Fobias', 'Idoso/Terceira idade', 'Incertezas quanto ao Futuro', 'Morte e Luto', 'Sexualidade e Identidade de gênero', 'Transtorno Alimentares'], contato: "https://wa.me/5524981159042?text=Ol%C3%A1%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+acompanhamento+psicol%C3%B3gico" },
{ nome: 'Raabe Santos - Psicóloga', criterio: ['avaliacao-psicologica', 'Depressao', 'Crianças e Adolescentes','psicologia-clinica', 'neuropsicologia', 'psicopedagogia', 'ABA', 'Ansieade', 'Aprendizagem', 'Autoconhecimento', 'Conflitos Familiares', 'Criança e Adolescentes', 'Depressão', 'Dores', 'Exame psicológico/Avaliação Admissional','Estresse','Fobias','Incertezas quanto ao futuro','Maternidade','Morte e Luto', 'Orientação de Pais', 'Orientação Profissional', 'Pacientes enfermos', 'Planejamento psicopedagógico', 'Reabilitação Neuropsicológica', 'Saúde Feminina', 'Síndrome do Pânico', 'TEA', 'TDAH','TOC','Treinamento de memória'], contato: "https://wa.me/5524992985705?text=Ol%C3%A1%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+acompanhamento+psicol%C3%B3gico"},
{ nome: 'Acácio Borges - Massoterapeuta', criterio: ['psicomotricidade', 'Massagem Terapeutica', 'grupos-terapeuticos', 'massoterapia','Ansiedade', 'Bandagem elástica', 'Cone Hindu', 'Drenagem Linfática', 'Dores', 'Dry needling', 'Estresse', 'Idoso/Terceira idade', 'Liberação Miofascial', 'Massagem esportiva','Massagem Relaxante', 'Massagem Terapeutica', 'Pedras quentes', 'Recuperação Muscular', 'Ventosaterapia'], contato: "https://wa.me/5524981149085?text=Ol%C3%A1%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+massoterapia" },
{ nome: 'Andressa - Fisioterapeuta', criterio: ['pilates'], contato: "https://api.whatsapp.com/send/?phone=5524992691139&text=Olá%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informações+sobre+fisioterapia&type=phone_number&app_absent=0" },
{ nome: 'Ana Claudia - Psicopedagoga', criterio: ['psicopedagogia'], contato: "https://wa.me/5524992543126?text=Ol%C3%A1%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+acompanhamento+psicol%C3%B3gico" },
{ nome: 'Fabiana da Fonseca - Psicóloga', criterio: ['psicologia-clinica', 'Depressao','autoconhecimento',  'grupos-terapeuticos', 'Ansiedade', 'Autoconhecimento', 'Conflitos Familiares', 'Emagrecimento/Obesidade', 'Estresse', 'Incertezas quanto ao Futuro', 'Maternidade', 'Orientação de Pais', 'Questões Raciais', 'Idoso/Terceira idade' ], contato: "https://wa.me/5524981226439?text=Ol%C3%A1%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+acompanhamento+psicol%C3%B3gico" },

];
  const ProfessionalPage = () => {
  const [tipoBusca, setTipoBusca] = useState('criterio');
  const [resposta, setResposta] = useState('');

  
  const profissionaisFiltrados = 
  resposta ===""?[]: 
    profissionais.filter((prof) => tipoBusca === 'criterio'
    ? prof.criterio.includes(resposta)
    : prof.criterio.some((item) => item.toLowerCase().includes(resposta.toLowerCase()))); 
  

 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="m-10 max-w-4xl w-full p-10 bg-white rounded-2xl shadow-lg flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-800">
            O que você procura?
          </h1>
          <p className="text-gray-600 mt-2">
            Selecione como deseja buscar para encontrarmos o profissional ideal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Como deseja buscar?
            </label>
            <select
              value={tipoBusca}
              onChange={(e) => {
                setTipoBusca(e.target.value);
                setResposta(""); // reseta ao trocar tipo
              }}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="criterio">Por área profissional</option>
              <option value="temas">Por temas ou necessidades</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Selecione uma opção
            </label>
            <select
              value={resposta}
              onChange={(e) => setResposta(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Selecione uma opção</option>

              {tipoBusca === "criterio" ? (
                <>
                  <option value="ABA">ABA</option>
                  <option value="psicologia-clinica">Psicologia Clínica</option>
                  <option value="psicopedagogia">Psicopedagogia</option>
                  <option value="pilates">Pilates</option>
                  <option value="massoterapia">Massoterapia</option>
                  <option value="avaliacao-psicologica">Avaliação Psicológica</option>
                  <option value="grupos-terapeuticos">Grupos Terapêuticos</option>
                  <option value="autoconhecimento">Autoconhecimento</option>
                  <option value="neuropsicologia">Neuropsicologia</option>
                  <option value="psicopedagogia">Psicopedagogia</option>
                  <option value ="psicomotricidade">Psicomotricidade</option>
                  <option value="Fonoaudiologia">Fonoaudiologia</option>
                </>
              ) : (
                <>
                <option value="avaliacao-psicologica">Avaliação Psicológica</option> 
                <option value="Bandagem elástica">Bandagem elástica</option>
                <option value="Criança e Adolescente">Criança e Adolescente</option> 
                <option value="Conflitos Familiares">Conflitos Familiares</option> 
                <option value="Depressao">Depressão</option> 
                <option value="Dores">Dores</option> 
                 <option value="Drenagem Linfática">Drenagem Linfática</option> 
                 <option value="Emagrecimento/Obesidade">Emagrecimento/Obesidade</option> 
                 <option value="Estresse">Estresse</option> 
                 <option value="Idoso/Terceira idade">Idoso / Terceira idade</option> 
                 <option value="Incertezas quanto ao futuro">Incertezas quanto ao futuro</option> 
                 <option value="Liberação Miofascial">Liberação Miofascial</option> 
                 <option value="Massagem Terapêutica">Massagem Terapêutica</option> 
                 <option value="Massoterapia">Massoterapia</option>
                  <option value="Maternidade">Maternidade</option> 
                  <option value="Morte e Luto">Morte e Luto</option> 
                  <option value="Orientação de Pais">Orientação de Pais</option>
                  <option value="Pedras quentes">Pedras quentes</option> 
                  <option value="pilates">Pilates</option> 
                  <option value="Recuperação Muscular">Recuperação Muscular</option> 
                  <option value="Sexualidade e Identidade de gênero">Sexualidade</option>
                  <option value="TDAH">TDAH</option> 
                  <option value="TEA">Transtorno do Espectro Autista</option> 
                  <option value="Transtorno Alimentares">Transtorno Alimentares</option>
                  <option value="Ventosaterapia">Ventosaterapia</option>
                  <option value="Violência Doméstica">Violência Doméstica</option>
                </>
              )}
            </select>
          </div>
        </div>

        {resposta === "" && (
          <p className="text-center text-red-500">
            Selecione uma opção para ver os profissionais disponíveis.
          </p>
        )}

        {resposta !== "" && profissionaisFiltrados.length === 0 && (
          <p className="text-center text-red-600">
            Não há profissionais disponíveis para a opção selecionada.
          </p>
        )}

        {profissionaisFiltrados.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Profissionais recomendados
            </h2>

            <div className="space-y-4">
              {profissionaisFiltrados.map((prof) => (
                <div
                  key={prof.nome}
                  className="p-4 bg-gray-50 rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <h3 className="text-lg font-bold text-red-600">
                    {prof.nome}
                  </h3>

                  <a
                    href={prof.contato}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    Contato
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default ProfessionalPage;