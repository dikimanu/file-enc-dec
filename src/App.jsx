import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Desktop from "./pages/desktop/Desktop";
import Web from "./pages/web/Web";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Desktop Application Page */}
        <Route path="/desktop" element={<Desktop />} />

        {/* Web Application Page */}
        <Route path="/web" element={<Web />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
