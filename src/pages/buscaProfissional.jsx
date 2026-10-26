import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const teamContact = 'https://linktr.ee/consultarsaudebemestar';
const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const makeWhatsApp = (phone, service) => `https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Encontrei seu contato no site da ConsultAR e gostaria de saber mais sobre ${service}.`)}`;

const professionals = [
  { name: 'Bárbara Crivas', role: 'Psicóloga · CRP 05/55030', image: 'profissional3.png', phone: '5524992478872', service: 'acompanhamento psicológico', areas: ['psicologia-clinica', 'avaliacao-psicologica', 'grupos-terapeuticos'], topics: ['ansiedade', 'autoconhecimento', 'cirurgia bariátrica', 'conflitos familiares', 'crianças e adolescentes', 'emagrecimento/obesidade', 'estresse', 'maternidade', 'orientação de pais', 'saúde feminina', 'violência doméstica'] },
  { name: 'Regiane Magalhães', role: 'Psicóloga · CRP 05/31197', image: 'profissional2.png', phone: '5524981159042', service: 'acompanhamento psicológico', areas: ['psicologia-clinica', 'avaliacao-psicologica'], topics: ['adoção', 'ansiedade', 'compulsões', 'conflitos familiares', 'depressão', 'fobias', 'idoso/terceira idade', 'morte e luto', 'sexualidade e identidade de gênero', 'transtornos alimentares'] },
  { name: 'Raabe Santos', role: 'Psicóloga · CRP 05/57226', image: 'profissional4.png', phone: '5524992985705', service: 'acompanhamento psicológico', areas: ['psicologia-clinica', 'avaliacao-psicologica', 'neuropsicologia', 'psicopedagogia', 'grupos-terapeuticos', 'ABA'], topics: ['ansiedade', 'aprendizagem', 'autoconhecimento', 'crianças e adolescentes', 'depressão', 'fobias', 'maternidade', 'morte e luto', 'orientação de pais', 'orientação profissional', 'reabilitação neuropsicológica', 'saúde feminina', 'síndrome do pânico', 'TEA', 'TDAH', 'TOC', 'treinamento de memória'] },
  { name: 'Acácio Borges', role: 'Massoterapeuta', image: 'profissional1.png', phone: '5524981149085', service: 'massoterapia', areas: ['massoterapia', 'grupos-terapeuticos'], topics: ['ansiedade', 'bandagem elástica', 'cone hindu', 'drenagem linfática', 'dores', 'dry needling', 'estresse', 'idoso/terceira idade', 'liberação miofascial', 'massagem esportiva', 'massagem relaxante', 'massagem terapêutica', 'pedras quentes', 'recuperação muscular', 'ventosaterapia'] },
  { name: 'Fabiana da Fonseca', role: 'Psicóloga · CRP 05/71281', image: 'profissional7.png', phone: '5524981226439', service: 'acompanhamento psicológico', areas: ['psicologia-clinica', 'grupos-terapeuticos'], topics: ['ansiedade', 'autoconhecimento', 'conflitos familiares', 'depressão', 'emagrecimento/obesidade', 'estresse', 'idoso/terceira idade', 'maternidade', 'orientação de pais', 'questões raciais'] },
].map((professional) => ({ ...professional, contact: makeWhatsApp(professional.phone, professional.service), image: professional.image ? `/assets/professional/${professional.image}` : null }));

const areaLabels = [
  ['psicologia-clinica', 'Psicologia clínica'], ['avaliacao-psicologica', 'Avaliação psicológica'], ['neuropsicologia', 'Neuropsicologia'], ['psicopedagogia', 'Psicopedagogia'], ['ABA', 'ABA'], ['grupos-terapeuticos', 'Grupos terapêuticos'], ['massoterapia', 'Massoterapia'], ['fisioterapia', 'Fisioterapia'], ['pilates', 'Pilates'],
];
const topics = [...new Set(professionals.flatMap((professional) => professional.topics))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
const formatTopic = (topic) => ['TEA', 'TDAH', 'TOC', 'ABA'].includes(topic) ? topic : topic.charAt(0).toLocaleUpperCase('pt-BR') + topic.slice(1);

const ProfessionalPage = () => {
  const [searchType, setSearchType] = useState('area');
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const results = useMemo(() => {
    if (!submitted || !query) return [];
    return professionals.filter((professional) => (searchType === 'area' ? professional.areas : professional.topics).some((item) => normalize(item) === normalize(query)));
  }, [query, searchType, submitted]);
  const handleSearchTypeChange = (event) => { setSearchType(event.target.value); setQuery(''); setSubmitted(false); };

  return (
    <main className="finder-page">
      <div className="finder-back"><Link to="/">← Voltar para o início</Link></div>
      <section className="finder-intro"><span className="eyebrow">Um primeiro passo</span><h1>Vamos encontrar um cuidado<br /><em>que faça sentido para você.</em></h1><p>Conte o que você procura. Vamos mostrar profissionais relacionados para você conhecer e conversar sobre o atendimento.</p></section>
      <section className="finder-panel" aria-labelledby="finder-title">
        <div className="finder-panel-heading"><span className="finder-step">01</span><div><h2 id="finder-title">Por onde você quer começar?</h2><p>Escolha uma área ou um tema que esteja buscando.</p></div></div>
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          <div className="finder-fields">
            <label>Quero buscar por<select value={searchType} onChange={handleSearchTypeChange}><option value="area">Área de atendimento</option><option value="topic">Tema ou necessidade</option></select></label>
            <label>Selecione uma opção<select value={query} onChange={(event) => { setQuery(event.target.value); setSubmitted(false); }} required><option value="">Escolha uma opção</option>{(searchType === 'area' ? areaLabels : topics.map((topic) => [topic, formatTopic(topic)])).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
            <button type="submit" className="button button-primary">Ver profissionais <span aria-hidden="true">→</span></button>
          </div>
        </form>
        <p className="finder-privacy"><span aria-hidden="true">✳</span> Esta busca é apenas uma orientação inicial e não representa diagnóstico ou indicação clínica.</p>
      </section>
      {submitted && <section className="finder-results" aria-live="polite"><div className="results-heading"><span className="eyebrow">Sua busca</span><h2>{results.length ? 'Profissionais para você conhecer' : 'Vamos ajudar você a encontrar um caminho'}</h2></div>
        {results.length ? <div className="result-grid">{results.map((professional) => <article className="result-card" key={professional.name}>{professional.image ? <img src={professional.image} alt="" /> : <div className="result-avatar" aria-hidden="true">{professional.name.charAt(0)}</div>}<div className="result-content"><span>{professional.role}</span><h3>{professional.name}</h3><a href={professional.contact} target="_blank" rel="noopener noreferrer">Consultar contato e disponibilidade <span aria-hidden="true">↗</span></a></div></article>)}</div> : <div className="no-results"><p>Não encontramos um resultado para essa opção por aqui. A equipe pode orientar você sobre outras possibilidades de atendimento.</p><a href={teamContact} target="_blank" rel="noopener noreferrer" className="button button-primary">Conversar com a equipe <span aria-hidden="true">↗</span></a></div>}
      </section>}
      <aside className="finder-help"><span>Prefere conversar antes?</span><p>A equipe ConsultAR pode tirar suas dúvidas e ajudar a entender os próximos passos.</p><a href={teamContact} target="_blank" rel="noopener noreferrer">Fale com a equipe ↗</a></aside>
    </main>
  );
};

export default ProfessionalPage;
