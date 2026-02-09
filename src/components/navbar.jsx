import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/logo-consultar.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "backdrop-blur-xl bg-white/40 shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <img src={logo} className="w-[10em] h-[8em]"></img>
        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/" className="nav-link">Início</Link>
          <a href="#sobre-nos" className="nav-link">Sobre</a>
          <a href="#servicos" className="nav-link">Serviços</a>
        </div>

        <div className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/professional">
            <button className="nav-link-professional">
              Encontre um <span className="text-red-700">Profissional</span>
            </button>
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white/60 backdrop-blur-xl px-6 pb-4 flex flex-col gap-4 text-lg font-medium">
          <Link to="/" onClick={() => setOpen(false)}>Início</Link>
          <a href="#sobre-nos" onClick={() => setOpen(false)}>Sobre</a>
          <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
          <Link to="/professional" onClick={() => setOpen(false)}>
            Encontre um <span className="text-red-700">Profissional</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
