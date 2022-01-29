import React from "react";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import Alert from "./context/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NotesState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message= "This is alert"/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
