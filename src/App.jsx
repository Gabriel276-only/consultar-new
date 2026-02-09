import "./index.css";
import NavBar from "./components/navbar";
import MainSection from "./components/mainSection";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

import ProfessionalPage from "./pages/buscaProfissional";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
        <ScrollToTop />
      <Routes>              
        <Route path="/" element={<MainSection />} />
        <Route path="/professional" element={<ProfessionalPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
