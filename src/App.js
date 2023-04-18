import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { css, Global } from "@emotion/react";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";

function App() {
  return (
    <Router>
      <Global
        styles={css`
          body {
            background-color: #f9c6de;
            height: 100vh;
            width: 100vw;
            font-family: "Comic Sans MS", cursive, sans-serif;
          }
        `}
      />
      <Routes>
        <Route path="/" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/question4" element={<Question4 />} />
        <Route path="/question5" element={<Question5 />} />
      </Routes>
    </Router>
  );
}

export default App;
