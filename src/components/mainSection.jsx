import React from 'react';
import { Link } from 'react-router-dom';
import Services from './serviceSection.jsx';
import { PartnersSection } from './carrousel.jsx';

const contactUrl = 'https://linktr.ee/consultarsaudebemestar';
const eyebrowClass = 'inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-sage';
const buttonClass = 'inline-flex items-center justify-center gap-[17px] rounded border border-transparent bg-wine px-5 py-[15px] text-[13px] font-bold text-white transition-all hover:-translate-y-px hover:bg-wine-dark';
const headingClass = 'mt-[13px] font-serif text-[clamp(36px,4vw,50px)] font-medium leading-[1.13] tracking-[-.025em]';

const Section = () => (
  <main>
    <section className="overflow-hidden bg-cream px-7 pt-[65px] max-[700px]:px-[21px] max-[700px]:pt-[46px]">
      <div className="mx-auto grid min-h-[490px] max-w-[1160px] grid-cols-[1.02fr_.98fr] items-center gap-[76px] max-[900px]:gap-[35px] max-[700px]:flex max-[700px]:min-h-0 max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-[21px]">
        <div className="pb-7 max-[700px]:p-0">
          <span className={eyebrowClass}><span className="h-[7px] w-[7px] rounded-full bg-[#c18c92]" /> Cuidado que começa com escuta</span>
          <h1 className="my-[22px] mb-[19px] max-w-[590px] font-serif text-[clamp(48px,5.1vw,70px)] font-medium leading-[1.08] tracking-[-.035em] max-[900px]:text-[55px] max-[700px]:my-[18px] max-[700px]:mb-[15px] max-[700px]:text-[clamp(44px,12vw,62px)]">Um espaço para cuidar de <em className="font-medium text-wine">você</em>, no seu tempo.</h1>
          <p className="mb-[26px] max-w-[475px] text-base leading-[1.8] text-muted max-[700px]:text-sm">Psicologia e cuidado integrado com acolhimento, respeito e profissionais preparados para caminhar ao seu lado.</p>
          <div className="flex flex-wrap items-center gap-3 max-[700px]:gap-[9px]">
            <Link to="/professional" className={`${buttonClass} max-[700px]:px-[15px] max-[700px]:py-[14px] max-[700px]:text-[11px]`}>Encontre um profissional <span aria-hidden="true">→</span></Link>
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-[17px] rounded border border-[#d9d1c7] bg-transparent px-5 py-[15px] text-[13px] font-bold text-ink transition-colors hover:border-wine hover:text-wine max-[700px]:px-[15px] max-[700px]:py-[14px] max-[700px]:text-[11px]">Quero conversar primeiro</a>
          </div>
          <div className="mt-9 flex items-center gap-[11px] text-xs text-[#807871] max-[700px]:mt-[23px] max-[700px]:text-[10px]"><span className="text-xl text-[#ad7c80]">✳</span><span>Você não precisa ter todas as respostas para dar o primeiro passo.</span></div>
        </div>
        <div className="hero-visual relative mb-[27px] pl-7 max-[700px]:mx-3 max-[700px]:mb-5 max-[700px]:pl-[15px]">
          <img className="relative h-[445px] w-full rounded-[48%_48%_4px_4px] object-cover object-center max-[900px]:h-[395px] max-[700px]:h-[340px]" src="/assets/consultorio/consultorio-1.jpg" alt="Ambiente acolhedor do consultório ConsultAR" />
          <div className="absolute bottom-0 left-[-15px] z-[1] flex max-w-[340px] items-center gap-[13px] border border-[#f0e4e2] bg-white px-5 py-4 shadow-[0_14px_40px_rgba(116,62,70,0.08)] max-[700px]:left-[-10px] max-[700px]:max-w-[290px] max-[700px]:px-[14px] max-[700px]:py-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f4e8e7] text-[22px] text-wine">⌂</span>
            <div><strong className="mb-1 block text-xs">Um lugar para se sentir à vontade</strong><span className="block text-[10px] text-muted">Atendimento em Vassouras e Barra do Piraí</span></div>
          </div>
          <div className="absolute right-[-29px] top-[38px] z-[2] flex h-[94px] w-[94px] rotate-[9deg] flex-col items-center justify-center rounded-full border border-[#fbf9f1] bg-sage font-serif text-xs text-white max-[700px]:right-[-15px] max-[700px]:top-5 max-[700px]:h-[77px] max-[700px]:w-[77px] max-[700px]:text-[10px]" aria-hidden="true"><span>cuidado</span><b className="text-[10px] font-normal">com</b><span>presença</span></div>
        </div>
      </div>
      <div className="mx-auto mt-[45px] flex max-w-[1160px] justify-between border-t border-line py-[17px] text-[9px] font-bold uppercase tracking-[.1em] text-[#837b73] max-[700px]:mt-5 max-[700px]:gap-[15px] max-[700px]:py-[14px] max-[700px]:text-[8px]"><span>Saúde e bem-estar, com um olhar humano</span><span>Vassouras · Barra do Piraí</span></div>
    </section>

    <section className="bg-[#f3e9e8]" aria-label="Nosso compromisso">
      <div className="mx-auto flex max-w-[1160px] items-center gap-[18px] px-7 py-[21px] max-[700px]:flex-wrap max-[700px]:gap-[11px] max-[700px]:px-[21px] max-[700px]:py-[17px]">
        <span className="text-2xl text-sage">✳</span><p className="mb-0 flex-1 text-sm text-[#5e5a53] max-[700px]:basis-[calc(100%-45px)] max-[700px]:text-xs">Buscar apoio pode ser mais simples quando você encontra <strong className="text-ink">orientação, escuta e um caminho claro.</strong></p><a className="text-xs font-bold text-wine max-[700px]:ml-[37px]" href={contactUrl} target="_blank" rel="noopener noreferrer">Fale com a equipe <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section className="mx-auto max-w-[1160px] px-7 py-[105px] pb-[110px] max-[700px]:px-[21px] max-[700px]:py-[72px]" id="cuidado">
      <div className="mb-[39px] flex items-end justify-between gap-[60px] max-[700px]:mb-[27px] max-[700px]:block">
        <div><span className={eyebrowClass}>Comece por onde fizer sentido</span><h2 className={`${headingClass} max-[700px]:text-[38px]`}>Que tipo de cuidado<br /><em className="font-medium text-wine">você procura?</em></h2></div>
        <p className="mb-1 max-w-[390px] text-sm leading-[1.8] text-muted max-[700px]:mt-[17px] max-[700px]:text-[13px]">Você pode conhecer as áreas de atendimento ou buscar profissionais a partir do que está vivendo. A gente ajuda você a encontrar por onde começar.</p>
      </div>
      <div className="grid grid-cols-3 gap-[17px] max-[700px]:grid-cols-1 max-[700px]:gap-[11px]">
        <article className="relative min-h-[310px] border border-line bg-[#f5eaea] p-[31px] transition-all hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(116,62,70,0.09)] max-[700px]:min-h-0 max-[700px]:p-6">
          <span className="absolute right-[27px] top-[26px] text-[11px] text-[#a9a197]">01</span><span className="grid h-[47px] w-[47px] place-items-center rounded-full bg-white text-[27px] text-wine">◌</span><h3 className="mt-[23px] mb-[11px] font-serif text-2xl font-medium max-[700px]:mt-[17px]">Psicologia</h3><p className="mb-5 min-h-[68px] text-[13px] leading-[1.75] text-muted max-[700px]:mb-[17px] max-[700px]:min-h-0">Um espaço de escuta para compreender sentimentos, relações e desafios em diferentes momentos da vida.</p><Link className="inline-flex gap-[13px] text-xs font-bold text-wine" to="/professional">Encontrar psicólogo(a) <span aria-hidden="true">→</span></Link>
        </article>
        <article className="relative min-h-[310px] border border-line bg-white p-[31px] transition-all hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(116,62,70,0.09)] max-[700px]:min-h-0 max-[700px]:p-6">
          <span className="absolute right-[27px] top-[26px] text-[11px] text-[#a9a197]">02</span><span className="grid h-[47px] w-[47px] place-items-center rounded-full bg-[#f3f1ed] text-[27px] text-wine">⌁</span><h3 className="mt-[23px] mb-[11px] font-serif text-2xl font-medium max-[700px]:mt-[17px]">Desenvolvimento e aprendizagem</h3><p className="mb-5 min-h-[68px] text-[13px] leading-[1.75] text-muted max-[700px]:mb-[17px] max-[700px]:min-h-0">Acompanhamento psicopedagógico e apoio ao desenvolvimento de crianças, adolescentes e famílias.</p><Link className="inline-flex gap-[13px] text-xs font-bold text-wine" to="/professional">Conhecer profissionais <span aria-hidden="true">→</span></Link>
        </article>
        <article className="relative min-h-[310px] border border-line bg-white p-[31px] transition-all hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(116,62,70,0.09)] max-[700px]:min-h-0 max-[700px]:p-6">
          <span className="absolute right-[27px] top-[26px] text-[11px] text-[#a9a197]">03</span><span className="grid h-[47px] w-[47px] place-items-center rounded-full bg-[#f3f1ed] text-[27px] text-wine">✳</span><h3 className="mt-[23px] mb-[11px] font-serif text-2xl font-medium max-[700px]:mt-[17px]">Cuidado integrado</h3><p className="mb-5 min-h-[68px] text-[13px] leading-[1.75] text-muted max-[700px]:mb-[17px] max-[700px]:min-h-0">Outras especialidades e práticas de bem-estar também fazem parte da rede ConsultAR.</p><Link className="inline-flex gap-[13px] text-xs font-bold text-wine" to="/professional">Ver opções de atendimento <span aria-hidden="true">→</span></Link>
        </article>
      </div>
    </section>

    <PartnersSection />

    <section className="grid min-h-[590px] grid-cols-2 bg-[#f3ebea] max-[700px]:grid-cols-1">
      <div className="path-image relative min-h-[590px] max-[700px]:min-h-[330px]"><img className="absolute inset-0 h-full w-full object-cover" src="/assets/consultorio/consultorio-3.jpg" alt="Detalhe de um dos espaços de atendimento da ConsultAR" loading="lazy" /><span className="absolute bottom-[34px] left-11 z-[1] font-serif text-2xl italic text-white max-[700px]:bottom-6 max-[700px]:left-6 max-[700px]:text-[21px]">Seu próximo passo, com calma.</span></div>
      <div className="py-[83px] pl-[max(35px,calc((100vw-1160px)/2))] pr-[7vw] max-[900px]:pl-[45px] max-[900px]:pr-[35px] max-[700px]:px-[23px] max-[700px]:py-[53px] max-[700px]:pb-[58px]">
        <span className={eyebrowClass}>Sem complicação</span><h2 className={`${headingClass} mb-[30px] mt-[14px] max-[700px]:text-[38px]`}>Começar pode ser<br /><em className="font-medium text-wine">mais leve do que parece.</em></h2>
        <div className="mb-[27px] grid gap-[21px]">
          <div className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f0e1e1] text-xs font-bold text-wine">1</span><div><strong className="text-[13px]">Conte o que você procura</strong><p className="mt-[5px] mb-0 text-xs leading-[1.6] text-muted">Escolha uma área ou um tema para iniciar sua busca.</p></div></div>
          <div className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f0e1e1] text-xs font-bold text-wine">2</span><div><strong className="text-[13px]">Conheça quem pode ajudar</strong><p className="mt-[5px] mb-0 text-xs leading-[1.6] text-muted">Veja profissionais relacionados à sua busca e conheça suas áreas de atuação.</p></div></div>
          <div className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f0e1e1] text-xs font-bold text-wine">3</span><div><strong className="text-[13px]">Converse com a equipe</strong><p className="mt-[5px] mb-0 text-xs leading-[1.6] text-muted">Tire dúvidas e descubra os próximos passos diretamente com o profissional.</p></div></div>
        </div>
        <Link to="/professional" className={buttonClass}>Dar o primeiro passo <span aria-hidden="true">→</span></Link><small className="mt-[14px] block text-[10px] text-[#827b72]">A busca é uma orientação inicial e não substitui avaliação profissional.</small>
      </div>
    </section>

    <section className="bg-[#fbfaf7] px-7 pb-[72px] pt-[98px] max-[700px]:px-[21px] max-[700px]:pb-[54px] max-[700px]:pt-[72px]" id="equipe"><Services /></section>

    <section className="mx-auto grid max-w-[1160px] grid-cols-[.9fr_1.1fr] items-center gap-[90px] px-7 py-[102px] pb-[110px] max-[900px]:gap-[45px] max-[700px]:grid-cols-1 max-[700px]:gap-[30px] max-[700px]:px-[22px] max-[700px]:py-[72px] max-[700px]:pb-[77px]" id="consultorio">
      <div><span className={eyebrowClass}>Sobre a ConsultAR</span><h2 className={`${headingClass} mb-[22px] mt-[14px] max-[700px]:text-[38px]`}>Cuidado com a pessoa<br /><em className="font-medium text-wine">no centro de tudo.</em></h2><p className="mb-[13px] text-[13px] leading-[1.9] text-muted">Fundada por Regiane Magalhães e Acácio Borges, a ConsultAR nasceu da parceria entre profissionais de diferentes áreas da saúde. O propósito é oferecer um olhar integrativo e um atendimento contínuo e humanizado, com respeito à história de cada pessoa.</p><p className="mb-[13px] text-[13px] leading-[1.9] text-muted">Hoje, o espaço reúne profissionais de psicologia, educação e outras especialidades, em uma rede dedicada à promoção da saúde e do bem-estar.</p><a className="mt-[10px] inline-flex gap-[13px] text-xs font-bold text-wine" href={contactUrl} target="_blank" rel="noopener noreferrer">Conheça as opções de atendimento <span aria-hidden="true">→</span></a></div>
      <div className="story-gallery relative h-[440px] py-0 pl-5 pr-[70px] max-[700px]:h-[350px] max-[700px]:pr-12"><img className="absolute left-[42px] top-0 h-[86%] w-[72%] object-cover max-[700px]:left-4 max-[700px]:w-[76%]" src="/assets/consultorio/consultorio-2.jpg" alt="Sala de atendimento da ConsultAR" loading="lazy" /><img className="absolute bottom-0 right-[7px] h-[47%] w-[47%] border-[9px] border-cream object-cover max-[700px]:right-0 max-[700px]:w-1/2 max-[700px]:h-[46%]" src="/assets/consultorio/consultorio-5.jpg" alt="Espaço de acolhimento da ConsultAR" loading="lazy" /><div className="absolute right-0 top-7 rotate-1 bg-wine px-[18px] py-[15px] font-serif text-[15px] italic leading-[1.25] text-white max-[700px]:right-[-7px]">Saúde<br />e bem-estar</div></div>
    </section>

    <section className="flex items-center justify-between gap-[50px] bg-[#f3ebea] px-[max(28px,calc((100vw-1104px)/2))] py-16 max-[900px]:items-start max-[900px]:flex-col max-[700px]:px-[21px] max-[700px]:py-[50px]">
      <div><span className={eyebrowClass}>Estamos por perto</span><h2 className="mt-[11px] font-serif text-[38px] font-medium leading-[1.13] tracking-[-.025em] max-[700px]:text-[34px]">Um espaço de cuidado<br /><em className="font-medium text-wine">na sua região.</em></h2></div>
      <div className="flex gap-[14px] max-[900px]:w-full max-[700px]:flex-col">
        <article className="flex min-w-[220px] items-start gap-[13px] border border-line bg-white px-[19px] py-5 max-[900px]:flex-1 max-[700px]:min-w-0"><span className="text-[21px] text-wine">⌖</span><div><h3 className="mb-[7px] font-serif text-xl font-medium">Vassouras</h3><p className="mb-[9px] max-w-[175px] text-[11px] leading-[1.6] text-muted">Avenida Prefeito Henrique Borges Filho, 174</p><a className="text-[10px] font-bold text-wine" href="https://www.google.com/maps/search/?api=1&query=ConsultAR+Sa%C3%BAde+e+Bem-Estar+Vassouras" target="_blank" rel="noopener noreferrer">Ver no mapa ↗</a></div></article>
        <article className="flex min-w-[220px] items-start gap-[13px] border border-line bg-white px-[19px] py-5 max-[900px]:flex-1 max-[700px]:min-w-0"><span className="text-[21px] text-wine">⌖</span><div><h3 className="mb-[7px] font-serif text-xl font-medium">Barra do Piraí</h3><p className="mb-[9px] max-w-[175px] text-[11px] leading-[1.6] text-muted">Rua Paulo de Frontin, 139, sala 707, Centro</p><a className="text-[10px] font-bold text-wine" href="https://www.google.com/maps/search/?api=1&query=Rua+Paulo+de+Frontin+139+Barra+do+Pira%C3%AD" target="_blank" rel="noopener noreferrer">Ver no mapa ↗</a></div></article>
      </div>
    </section>

    <section className="closing-cta relative overflow-hidden bg-wine-dark px-[25px] py-[83px] pb-[88px] text-center text-white max-[700px]:px-[22px] max-[700px]:py-[66px]">
      <span className="mb-[13px] block text-[27px] text-[#d9cbb5]">✳</span><span className="inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-[#e0b8bb]">Seu cuidado pode começar hoje</span>
      <h2 className="my-[14px] font-serif text-[clamp(37px,4.5vw,54px)] font-medium leading-[1.13] max-[700px]:text-[40px]">Vamos encontrar juntos<br />o <em className="font-medium text-[#d8c9bd]">próximo passo?</em></h2>
      <p className="mb-[25px] text-[13px] text-[#e2d8d2]">Escolha uma área de atendimento ou fale com a equipe para tirar suas dúvidas.</p>
      <div className="flex justify-center gap-3 max-[700px]:gap-[9px] max-[700px]:flex-wrap"><Link to="/professional" className="inline-flex items-center justify-center gap-[17px] rounded bg-[#f7f3eb] px-5 py-[15px] text-[13px] font-bold text-wine-dark transition-all hover:-translate-y-px hover:bg-white max-[700px]:px-[15px] max-[700px]:py-[14px] max-[700px]:text-[11px]">Encontrar um profissional <span aria-hidden="true">→</span></Link><a href={contactUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-[17px] rounded border border-white/45 px-5 py-[15px] text-[13px] font-bold text-white transition-colors hover:bg-white/10 max-[700px]:px-[15px] max-[700px]:py-[14px] max-[700px]:text-[11px]">Falar com a equipe</a></div>
    </section>
  </main>
);

export default Section;
