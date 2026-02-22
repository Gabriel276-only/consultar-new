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
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
   


  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "backdrop-blur-xl bg-white/40 shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl md:max-w-5xl mx-auto p-3 md:py-2 flex justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="ConsultAR — Saúde e Bem-estar"
            className="w-[8em] h-[6em]"
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li><Link to="/" className="nav-link">Início</Link></li>
          <li>
            <button onClick={() => scrollTo("sobre-nos")} className="nav-link">
              Sobre
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo("servicos")} className="nav-link">
              Serviços
            </button>
          </li>
        </ul>

        <div className="hidden md:flex">
          <Link to="/professional" className="nav-link-professional font-semibold">
            Encontre um <span className="text-red-700">Profissional</span>
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
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
        <div className="bg-white/60 backdrop-blur-xl px-6 pb-4 flex flex-col gap-4 text-lg">
          <Link to="/" onClick={() => setOpen(false)}>Início</Link>
          <button className="flex" onClick={() => scrollTo("sobre-nos")}>Sobre</button>
          <button className="flex" onClick={() => scrollTo("servicos")}>Serviços</button>
          <Link to="/professional" onClick={() => setOpen(false)}>
            Encontre um <span className="text-red-700">Profissional</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
