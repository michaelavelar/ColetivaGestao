import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Mba from "./pages/Mba";
import SoftSkills from "./pages/SoftSkills";
import Login from "./pages/Login";
import { PageContainer, Navbar, MainContent, Footer } from "./styles";

function App() {
  return (
    <Router>
      <PageContainer>
        <Navbar>
          <div className="nav-links">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/mba">MBA</Link>
            <Link to="/softskills">Soft Skills</Link>
          </div>
          <div className="login-button">
            <Link to="/login">Login</Link>
          </div>
        </Navbar>

        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/mba" element={<Mba />} />
            <Route path="/softskills" element={<SoftSkills />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MainContent>

        <Footer>
          <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados por Instituto Coletiva</p>
          <p>Create by Michael Avelar</p>
        </Footer>
      </PageContainer>
    </Router>
  );
}

export default App;
