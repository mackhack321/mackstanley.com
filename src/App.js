import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Container from "./components/Container";

function App() {
  return (
    <div className="bg-mack-slate min-h-screen">
      <Router>
        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
