import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-main"><div className="footer-brand"><img src="public/assets/logos/logo-removebg-preview.png" alt="ConsultAR" /><p>Saúde e bem-estar com um olhar integrativo e humanizado.</p><div className="footer-socials"><a href="https://www.instagram.com/consultarsaudebemestar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da ConsultAR"><FontAwesomeIcon icon={faInstagram} /></a><a href="https://m.facebook.com/consultarsaudebemestar/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da ConsultAR"><FontAwesomeIcon icon={faFacebook} /></a></div></div>
      <div className="footer-column"><h2>Explore</h2><a href="/#cuidado">Áreas de atendimento</a><a href="/#equipe">Profissionais</a><a href="/#convenios">Convênios</a><a href="/#consultorio">O consultório</a><Link to="/professional">Encontre um profissional</Link></div>
      <div className="footer-column"><h2>Onde estamos</h2><p><strong>Vassouras</strong><br />Av. Prefeito Henrique Borges Filho, 174, centro</p><p><strong>Barra do Piraí</strong><br />Rua Paulo de Frontin, 139, sala 707, Centro</p></div>
      <div className="footer-contact"><span className="eyebrow">Estamos aqui para ajudar</span><h2>Tem alguma dúvida?</h2><p>Converse com a equipe para saber mais sobre os atendimentos.</p><a href="https://linktr.ee/consultarsaudebemestar" target="_blank" rel="noopener noreferrer" className="footer-contact-link">Falar com a equipe ↗</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} ConsultAR Saúde e Bem-Estar</span><span>Um passo de cada vez. Com cuidado.</span></div>
  </footer>
);

export default Footer;
