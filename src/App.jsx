import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.jsx';
import MainSection from './components/mainSection.jsx';
import Footer from './components/footer.jsx';
import ScrollToTop from './components/scrollToTop.jsx';
import ProfessionalPage from './pages/buscaProfissional.jsx';

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
