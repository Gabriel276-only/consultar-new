const Footer = () => {
  return (
    <footer id="contato" className="bg-red-950 text-white mt-16">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* COLUNA 1 — INSTITUCIONAL */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            ConsultAR Saúde e Bem-Estar
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">Vassouras</h3>
            <p className="text-sm font-light">
              Avenida Prefeito Henrique Borges Filho, 174, Centro
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Barra do Piraí</h3>
            <p className="text-sm font-light">
              Rua Paulo de Frontin, 139 – Sala 707, Centro
            </p>
          </div>
        </div>

        {/* COLUNA 2 — LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links Importantes</h3>

          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:underline">Início</a></li>
            <li><a href="#sobre-nos" className="hover:underline">Sobre</a></li>
            <li><a href="#servicos" className="hover:underline">Serviços</a></li>
            <li><a href="https://wa.me/5524981159042" className="hover:underline">Contato</a></li>
          </ul>
        </div>

        {/* COLUNA 3 — MAPA */}
        <div className="w-full h-64 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d100512.33844816248!2d-43.666827!3d-22.4092129!3m2!1i1024!2i768!4f13.1!2m1!1sconsultar%20saude%20e%20bem%20estar!5e1!3m2!1spt-BR!2sbr!4v1770507898389!5m2!1spt-BR!2sbr"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      {/* RODAPÉ FINAL */}
      <div className="border-t border-white/20 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} ConsultAR. Todos os direitos reservados.
        </p>
        <p className="mt-2">
          Desenvolvido por{" "}
          <a
            href="https://github.com/Gabriel276-only"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Gabriel Borges
          </a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
