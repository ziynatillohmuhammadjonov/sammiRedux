import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Register, Login, Main } from "./components/";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
