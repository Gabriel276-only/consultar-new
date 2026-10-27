import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="bg-[#3e292e] px-7 pt-[55px] text-[#f5f1e9] max-[700px]:px-[22px] max-[700px]:pt-[39px]">
    <div className="mx-auto grid max-w-[1160px] grid-cols-[1.25fr_.72fr_1fr_1.15fr] gap-[45px] pb-[43px] max-[900px]:grid-cols-2 max-[900px]:gap-[33px] max-[700px]:gap-x-5 max-[700px]:gap-y-[26px] max-[700px]:pb-[30px]">
      <div className="max-[700px]:col-span-full">
        <img className="h-16 w-[115px] object-contain object-left brightness-0 invert opacity-[.92]" src="/assets/logos/logo-removebg-preview.png" alt="ConsultAR" />
        <p className="my-[10px] mb-[17px] max-w-[220px] text-[11px] leading-[1.7] text-[#c4c1b9]">Saúde e bem-estar com um olhar integrativo e humanizado.</p>
        <div className="flex gap-[13px] text-[17px] text-[#d4c8bc] [&_a:hover]:text-white">
          <a href="https://www.instagram.com/consultarsaudebemestar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da ConsultAR"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://m.facebook.com/consultarsaudebemestar/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da ConsultAR"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </div>
      <div>
        <h2 className="my-[5px] mb-[17px] font-serif text-[18px] font-medium">Explore</h2>
        <a className="my-[11px] block text-[11px] text-[#c4c1b9] hover:text-white" href="/#cuidado">Áreas de atendimento</a>
        <a className="my-[11px] block text-[11px] text-[#c4c1b9] hover:text-white" href="/#equipe">Profissionais</a>
        <a className="my-[11px] block text-[11px] text-[#c4c1b9] hover:text-white" href="/#convenios">Convênios</a>
        <a className="my-[11px] block text-[11px] text-[#c4c1b9] hover:text-white" href="/#consultorio">O consultório</a>
        <Link className="my-[11px] block text-[11px] text-[#c4c1b9] hover:text-white" to="/professional">Encontre um profissional</Link>
      </div>
      <div>
        <h2 className="my-[5px] mb-[17px] font-serif text-[18px] font-medium">Onde estamos</h2>
        <p className="mb-[11px] text-[10px] leading-[1.7] text-[#c4c1b9]"><strong className="text-white">Vassouras</strong><br />Av. Prefeito Henrique Borges Filho, 174, centro</p>
        <p className="mb-[11px] text-[10px] leading-[1.7] text-[#c4c1b9]"><strong className="text-white">Barra do Piraí</strong><br />Rua Paulo de Frontin, 139, sala 707, Centro</p>
      </div>
      <div className="max-[700px]:col-span-full">
        <span className="inline-flex items-center gap-[9px] text-[9px] font-bold uppercase tracking-[.15em] text-[#e0b8bb]">Estamos aqui para ajudar</span>
        <h2 className="my-[9px] text-[21px] font-medium font-serif max-[700px]:text-[17px]">Tem alguma dúvida?</h2>
        <p className="my-[10px] mb-[17px] max-w-[220px] text-[11px] leading-[1.7] text-[#c4c1b9]">Converse com a equipe para saber mais sobre os atendimentos.</p>
        <a className="text-[11px] font-bold text-[#e4d4c7]" href="https://linktr.ee/consultarsaudebemestar" target="_blank" rel="noopener noreferrer">Falar com a equipe ↗</a>
      </div>
    </div>
    <div className="mx-auto flex min-h-[49px] max-w-[1160px] items-center justify-between border-t border-white/10 text-[9px] text-[#aaa9a1] max-[700px]:min-h-[58px] max-[700px]:gap-[13px] max-[700px]:text-[8px]"><span>© {new Date().getFullYear()} ConsultAR Saúde e Bem-Estar</span><span>Um passo de cada vez. Com cuidado.</span></div>
  </footer>
);

export default Footer;
