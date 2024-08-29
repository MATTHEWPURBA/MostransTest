import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import CharacterByLocation from "./pages/CharacterByLocation";
import Navbar from "./components/Navbar";
import CharacterDetail from "./pages/CharacterDetail";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/location/:location" element={<CharacterByLocation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
