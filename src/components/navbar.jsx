import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setIsOpen(false);
  const homeHref = (id) => location.pathname === '/' ? `#${id}` : `/#${id}`;

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-cream/95 backdrop-blur-[14px]">
      <nav className="mx-auto flex h-[82px] max-w-[1220px] items-center justify-between px-7 max-[700px]:h-[70px] max-[700px]:px-[18px]" aria-label="Navegação principal">
        <Link to="/" className="flex items-center" onClick={closeMenu} aria-label="ConsultAR, início">
          <img className="h-[68px] w-[108px] object-contain max-[700px]:h-[59px] max-[700px]:w-[94px]" src="public/assets/logos/logo-removebg-preview.png" alt="ConsultAR Saúde e Bem-Estar" />
        </Link>
        <button className="border-0 bg-transparent p-2 min-[701px]:hidden" type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}>
          <span className="my-[5px] block h-0.5 w-[23px] bg-ink" /><span className="my-[5px] block h-0.5 w-[23px] bg-ink" /><span className="my-[5px] block h-0.5 w-[23px] bg-ink" />
        </button>
        <div className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[69px] flex-col items-stretch gap-0 border-b border-line bg-cream px-[22px] pb-[22px] pt-4 text-[13px] font-semibold text-[#4e4945] shadow-[0_14px_20px_rgba(116,62,70,0.08)] min-[701px]:static min-[701px]:flex min-[701px]:flex-row min-[701px]:items-center min-[701px]:gap-[35px] min-[701px]:border-0 min-[701px]:bg-transparent min-[701px]:p-0 min-[701px]:text-[13px] min-[701px]:shadow-none max-[900px]:min-[701px]:gap-5 max-[850px]:min-[701px]:gap-[11px] max-[850px]:min-[701px]:text-[11px]`}>
          <Link className="border-b border-line py-[13px] transition-colors hover:text-wine min-[701px]:border-0 min-[701px]:py-0" to="/" onClick={closeMenu}>Início</Link>
          <a className="border-b border-line py-[13px] transition-colors hover:text-wine min-[701px]:border-0 min-[701px]:py-0" href={homeHref('cuidado')} onClick={closeMenu}>Como podemos ajudar</a>
          <a className="border-b border-line py-[13px] transition-colors hover:text-wine min-[701px]:border-0 min-[701px]:py-0" href={homeHref('convenios')} onClick={closeMenu}>Convênios</a>
          <a className="border-b border-line py-[13px] transition-colors hover:text-wine min-[701px]:border-0 min-[701px]:py-0" href={homeHref('equipe')} onClick={closeMenu}>Profissionais</a>
          <a className="border-b border-line py-[13px] transition-colors hover:text-wine min-[701px]:border-0 min-[701px]:py-0" href={homeHref('consultorio')} onClick={closeMenu}>O consultório</a>
          <Link className="mt-[14px] inline-flex items-center justify-center gap-[12px] rounded bg-wine px-[18px] py-[13px] text-white transition-[background,transform] hover:-translate-y-px hover:bg-wine-dark min-[701px]:mt-0 max-[850px]:min-[701px]:gap-[7px] max-[850px]:min-[701px]:px-[13px]" to="/professional" onClick={closeMenu}>Encontrar atendimento <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
