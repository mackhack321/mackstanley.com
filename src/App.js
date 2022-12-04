import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import PageNotFound from "./components/PageNotFound";
import Container from "./components/Container";

function App() {
  return (
    <div className="min-h-screen bg-mack-slate text-mack-white">
      <Router>
        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
