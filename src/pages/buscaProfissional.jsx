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
    <main className="mx-auto min-h-[75vh] max-w-[980px] px-7 pb-[84px] pt-[33px] max-[700px]:px-[18px] max-[700px]:pb-[60px] max-[700px]:pt-6">
      <div className="mb-11 max-[700px]:mb-[31px]"><Link className="text-xs text-muted" to="/">← Voltar para o início</Link></div>
      <section className="mx-auto mb-[34px] max-w-[660px] text-center">
        <span className="inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-sage">Um primeiro passo</span>
        <h1 className="mx-auto my-[15px] max-w-[590px] font-serif text-[clamp(39px,5vw,57px)] font-medium leading-[1.08] tracking-[-.035em]">Vamos encontrar um cuidado<br /><em className="font-medium text-wine">que faça sentido para você.</em></h1>
        <p className="text-sm leading-[1.8] text-muted max-[700px]:text-xs">Conte o que você procura. Vamos mostrar profissionais relacionados para você conhecer e conversar sobre o atendimento.</p>
      </section>
      <section className="border border-line bg-white px-[35px] py-8 shadow-[0_12px_40px_rgba(116,62,70,0.07)] max-[700px]:px-[18px] max-[700px]:py-[22px]" aria-labelledby="finder-title">
        <div className="mb-6 flex items-center gap-[14px]">
          <span className="grid h-[39px] w-[39px] place-items-center rounded-full bg-[#f3e6e5] text-[11px] font-bold text-wine">01</span>
          <div><h2 className="mb-1 font-serif text-[25px] font-medium max-[700px]:text-[21px]" id="finder-title">Por onde você quer começar?</h2><p className="mb-0 text-xs text-muted max-[700px]:text-[10px]">Escolha uma área ou um tema que esteja buscando.</p></div>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          <div className="grid grid-cols-[1fr_1.3fr_auto] items-end gap-[13px] max-[700px]:grid-cols-1">
            <label className="grid gap-2 text-[11px] font-bold text-[#5e5853]">Quero buscar por<select className="h-[47px] rounded-[3px] border border-[#ded8cf] bg-[#fcfbf8] px-[13px] text-xs font-normal text-ink focus:outline-2 focus:outline-[#b78387] focus:outline-offset-1" value={searchType} onChange={handleSearchTypeChange}><option value="area">Área de atendimento</option><option value="topic">Tema ou necessidade</option></select></label>
            <label className="grid gap-2 text-[11px] font-bold text-[#5e5853]">Selecione uma opção<select className="h-[47px] rounded-[3px] border border-[#ded8cf] bg-[#fcfbf8] px-[13px] text-xs font-normal text-ink focus:outline-2 focus:outline-[#b78387] focus:outline-offset-1" value={query} onChange={(event) => { setQuery(event.target.value); setSubmitted(false); }} required><option value="">Escolha uma opção</option>{(searchType === 'area' ? areaLabels : topics.map((topic) => [topic, formatTopic(topic)])).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
            <button type="submit" className="inline-flex h-[47px] items-center justify-center gap-[17px] whitespace-nowrap rounded border border-transparent bg-wine px-5 py-[15px] text-[13px] font-bold text-white transition-all hover:-translate-y-px hover:bg-wine-dark max-[700px]:w-full max-[700px]:text-[11px]">Ver profissionais <span aria-hidden="true">→</span></button>
          </div>
        </form>
        <p className="mt-[19px] flex items-center gap-2 text-[10px] text-muted max-[700px]:items-start max-[700px]:leading-[1.5]"><span className="text-[15px] text-wine" aria-hidden="true">✳</span> Esta busca é apenas uma orientação inicial e não representa diagnóstico ou indicação clínica.</p>
      </section>
      {submitted && <section className="mt-12" aria-live="polite"><div className="mb-[19px]"><span className="inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-sage">Sua busca</span><h2 className="mt-[7px] font-serif text-[25px] font-medium">{results.length ? 'Profissionais para você conhecer' : 'Vamos ajudar você a encontrar um caminho'}</h2></div>
        {results.length ? <div className="grid grid-cols-2 gap-3 max-[700px]:grid-cols-1">{results.map((professional) => <article className="flex items-center gap-[15px] border border-line bg-white p-3" key={professional.name}>{professional.image ? <img className="h-[68px] w-[68px] bg-[#efede7] object-cover max-[700px]:h-[58px] max-[700px]:w-[58px]" src={professional.image} alt="" /> : <div className="grid h-[68px] w-[68px] place-items-center bg-[#efede7] font-serif text-[30px] text-wine max-[700px]:h-[58px] max-[700px]:w-[58px]" aria-hidden="true">{professional.name.charAt(0)}</div>}<div><span className="text-[9px] font-bold uppercase tracking-[.08em] text-sage">{professional.role}</span><h3 className="my-[5px] font-serif text-xl font-medium max-[700px]:text-lg">{professional.name}</h3><a className="text-[10px] font-bold text-wine" href={professional.contact} target="_blank" rel="noopener noreferrer">Consultar contato e disponibilidade <span aria-hidden="true">↗</span></a></div></article>)}</div> : <div className="border border-line bg-white p-[23px]"><p className="text-[13px] leading-[1.7] text-muted">Não encontramos um resultado para essa opção por aqui. A equipe pode orientar você sobre outras possibilidades de atendimento.</p><a href={teamContact} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-[17px] rounded border border-transparent bg-wine px-4 py-3 text-[11px] font-bold text-white transition-all hover:-translate-y-px hover:bg-wine-dark">Conversar com a equipe <span aria-hidden="true">↗</span></a></div>}
      </section>}
      <aside className="mx-auto mt-9 bg-[#f3e9e8] p-[22px] text-center"><span className="font-serif text-xl font-medium">Prefere conversar antes?</span><p className="my-[7px] mb-[11px] text-[11px] text-muted">A equipe ConsultAR pode tirar suas dúvidas e ajudar a entender os próximos passos.</p><a className="text-[11px] font-bold text-wine" href={teamContact} target="_blank" rel="noopener noreferrer">Fale com a equipe ↗</a></aside>
    </main>
  );
};

export default ProfessionalPage;
