import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import Confetti from "react-dom-confetti";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const buttonStyle = css`
  background-color: #f9c6de;
  border: 2px solid #f47ab5;
  color: #f47ab5;
  font-weight: bold;
  font-size: 18px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 16px;
  &:hover {
    background-color: #f47ab5;
    color: #fff;
  }
`;

function Question3() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [confetti, setConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "Nk The Great") {
      navigate("/question4");
    }
  };

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 30,
    elementCount: 250,
    dragFriction: 0.12,
    duration: 4000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#ff9dd1", "#f47ab5", "#f9c6de", "#ffffff"],
  };

  return (
    <div css={containerStyle}>
      <h1>Tough Question... Who is Avi's REAL girlfriend? 🤤</h1>
      <Confetti active={confetti} config={confettiConfig} />
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="real-girlfriend"
            value="Nk The Great"
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setConfetti(true);
            }}
          />
          Nk The Great
        </label>
        <label>
          <input
            type="radio"
            name="real-girlfriend"
            value="Jayesh"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Jayesh
        </label>
        <label>
          <input
            type="radio"
            name="real-girlfriend"
            value="Aryan"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Aryan
        </label>
        <label>
          <input
            type="radio"
            name="real-girlfriend"
            value="Rinav"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Rinav
        </label>
        <br />
        <br />
        <button css={buttonStyle} type="submit">
          Next
        </button>
      </form>
    </div>
  );
}

export default Question3;
