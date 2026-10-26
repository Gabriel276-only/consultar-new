import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setIsOpen(false);
  const homeHref = (id) => location.pathname === '/' ? `#${id}` : `/#${id}`;

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="ConsultAR, início">
          <img src="public/assets/logos/logo-removebg-preview.png" alt="ConsultAR Saúde e Bem-Estar" />
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}>
          <span /><span /><span />
        </button>
        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Início</Link>
          <a href={homeHref('cuidado')} onClick={closeMenu}>Como podemos ajudar</a>
          <a href={homeHref('convenios')} onClick={closeMenu}>Convênios</a>
          <a href={homeHref('equipe')} onClick={closeMenu}>Profissionais</a>
          <a href={homeHref('consultorio')} onClick={closeMenu}>O consultório</a>
          <Link className="nav-cta" to="/professional" onClick={closeMenu}>Encontrar atendimento <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
