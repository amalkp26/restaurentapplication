import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Restview from "./components/Restview";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="" element={<Home></Home>} />

        <Route path="viewrest/:id" element={<Restview></Restview>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
