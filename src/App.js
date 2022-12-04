import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import PageNotFound from "./components/PageNotFound";
import Container from "./components/Container";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className="min-h-screen bg-mack-slate text-mack-white">
      <Router>
        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experiences />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
