import React from 'react';
import { Link } from 'react-router-dom';
import Services from './serviceSection.jsx';
import { PartnersSection } from './carrousel.jsx';

const contactUrl = 'https://linktr.ee/consultarsaudebemestar';

const Section = () => (
  <main>
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> Cuidado que começa com escuta</span>
          <h1>Um espaço para cuidar de <em>você</em>, no seu tempo.</h1>
          <p>Psicologia e cuidado integrado com acolhimento, respeito e profissionais preparados para caminhar ao seu lado.</p>
          <div className="hero-actions">
            <Link to="/professional" className="button button-primary">Encontre um profissional <span aria-hidden="true">→</span></Link>
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="button button-quiet">Quero conversar primeiro</a>
          </div>
          <div className="hero-note"><span className="note-mark">✳</span><span>Você não precisa ter todas as respostas para dar o primeiro passo.</span></div>
        </div>
        <div className="hero-visual">
          <img src="/assets/consultorio/consultorio-1.jpg" alt="Ambiente acolhedor do consultório ConsultAR" />
          <div className="visual-caption"><span className="caption-icon">⌂</span><div><strong>Um lugar para se sentir à vontade</strong><span>Atendimento em Vassouras e Barra do Piraí</span></div></div>
          <div className="hero-stamp" aria-hidden="true"><span>cuidado</span><b>com</b><span>presença</span></div>
        </div>
      </div>
      <div className="hero-bottomline"><span>Saúde e bem-estar, com um olhar humano</span><span>Vassouras · Barra do Piraí</span></div>
    </section>

    <section className="welcome-strip" aria-label="Nosso compromisso">
      <div className="welcome-inner"><span className="welcome-icon">✳</span><p>Buscar apoio pode ser mais simples quando você encontra <strong>orientação, escuta e um caminho claro.</strong></p><a href={contactUrl} target="_blank" rel="noopener noreferrer">Fale com a equipe <span aria-hidden="true">↗</span></a></div>
    </section>

    <section className="care-section" id="cuidado">
      <div className="section-heading">
        <div><span className="eyebrow">Comece por onde fizer sentido</span><h2>Que tipo de cuidado<br /><em>você procura?</em></h2></div>
        <p>Você pode conhecer as áreas de atendimento ou buscar profissionais a partir do que está vivendo. A gente ajuda você a encontrar por onde começar.</p>
      </div>
      <div className="care-grid">
        <article className="care-card care-card-featured"><span className="care-number">01</span><span className="care-symbol">◌</span><h3>Psicologia</h3><p>Um espaço de escuta para compreender sentimentos, relações e desafios em diferentes momentos da vida.</p><Link to="/professional">Encontrar psicólogo(a) <span aria-hidden="true">→</span></Link></article>
        <article className="care-card"><span className="care-number">02</span><span className="care-symbol">⌁</span><h3>Desenvolvimento e aprendizagem</h3><p>Acompanhamento psicopedagógico e apoio ao desenvolvimento de crianças, adolescentes e famílias.</p><Link to="/professional">Conhecer profissionais <span aria-hidden="true">→</span></Link></article>
        <article className="care-card"><span className="care-number">03</span><span className="care-symbol">✳</span><h3>Cuidado integrado</h3><p>Outras especialidades e práticas de bem-estar também fazem parte da rede ConsultAR.</p><Link to="/professional">Ver opções de atendimento <span aria-hidden="true">→</span></Link></article>
      </div>
    </section>

    <PartnersSection />

    <section className="path-section">
      <div className="path-image"><img src="/assets/consultorio/consultorio-3.jpg" alt="Detalhe de um dos espaços de atendimento da ConsultAR" loading="lazy" /><span className="path-image-label">Seu próximo passo, com calma.</span></div>
      <div className="path-copy"><span className="eyebrow">Sem complicação</span><h2>Começar pode ser<br /><em>mais leve do que parece.</em></h2><div className="path-steps"><div className="path-step"><span>1</span><div><strong>Conte o que você procura</strong><p>Escolha uma área ou um tema para iniciar sua busca.</p></div></div><div className="path-step"><span>2</span><div><strong>Conheça quem pode ajudar</strong><p>Veja profissionais relacionados à sua busca e conheça suas áreas de atuação.</p></div></div><div className="path-step"><span>3</span><div><strong>Converse com a equipe</strong><p>Tire dúvidas e descubra os próximos passos diretamente com o profissional.</p></div></div></div><Link to="/professional" className="button button-primary">Dar o primeiro passo <span aria-hidden="true">→</span></Link><small>A busca é uma orientação inicial e não substitui avaliação profissional.</small></div>
    </section>

    <section className="team-section" id="equipe"><Services /></section>

    <section className="story-section" id="consultorio">
      <div className="story-copy"><span className="eyebrow">Sobre a ConsultAR</span><h2>Cuidado com a pessoa<br /><em>no centro de tudo.</em></h2><p>Fundada por Regiane Magalhães e Acácio Borges, a ConsultAR nasceu da parceria entre profissionais de diferentes áreas da saúde. O propósito é oferecer um olhar integrativo e um atendimento contínuo e humanizado, com respeito à história de cada pessoa.</p><p>Hoje, o espaço reúne profissionais de psicologia, educação e outras especialidades, em uma rede dedicada à promoção da saúde e do bem-estar.</p><a href={contactUrl} target="_blank" rel="noopener noreferrer" className="text-link">Conheça as opções de atendimento <span aria-hidden="true">→</span></a></div>
      <div className="story-gallery"><img className="story-main" src="/assets/consultorio/consultorio-2.jpg" alt="Sala de atendimento da ConsultAR" loading="lazy" /><img className="story-small" src="/assets/consultorio/consultorio-5.jpg" alt="Espaço de acolhimento da ConsultAR" loading="lazy" /><div className="story-tag">Saúde<br />e bem-estar</div></div>
    </section>

    <section className="locations-section"><div><span className="eyebrow">Estamos por perto</span><h2>Um espaço de cuidado<br /><em>na sua região.</em></h2></div><div className="location-cards"><article><span className="location-pin">⌖</span><div><h3>Vassouras</h3><p>Avenida Prefeito Henrique Borges Filho, 174</p><a href="https://www.google.com/maps/search/?api=1&query=ConsultAR+Sa%C3%BAde+e+Bem-Estar+Vassouras" target="_blank" rel="noopener noreferrer">Ver no mapa ↗</a></div></article><article><span className="location-pin">⌖</span><div><h3>Barra do Piraí</h3><p>Rua Paulo de Frontin, 139, sala 707, Centro</p><a href="https://www.google.com/maps/search/?api=1&query=Rua+Paulo+de+Frontin+139+Barra+do+Pira%C3%AD" target="_blank" rel="noopener noreferrer">Ver no mapa ↗</a></div></article></div></section>

    <section className="closing-cta"><span className="closing-spark">✳</span><span className="eyebrow">Seu cuidado pode começar hoje</span><h2>Vamos encontrar juntos<br />o <em>próximo passo?</em></h2><p>Escolha uma área de atendimento ou fale com a equipe para tirar suas dúvidas.</p><div className="hero-actions"><Link to="/professional" className="button button-light">Encontrar um profissional <span aria-hidden="true">→</span></Link><a href={contactUrl} target="_blank" rel="noopener noreferrer" className="button button-outline-light">Falar com a equipe</a></div></section>
  </main>
);

export default Section;
