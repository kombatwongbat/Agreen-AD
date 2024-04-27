import "./App.css";
import "./Variables.css";
import NavBar from "./components/NavBar/NavBar.js";


import {
  HomePage,
  ClassPage,
  CollaboratePage,
  PrivacyPage,
  SchedulePage,
  DolbyPage,
} from "./components/index.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Class" element={<ClassPage />} />
            <Route exact path="/Collaborate" element={<CollaboratePage />} />
            <Route exact path="/Privacy" element={<PrivacyPage />} />
            <Route exact path="/Schedule" element={<SchedulePage />} />
            <Route exact path="/Dolby" element={<DolbyPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
