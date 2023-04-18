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

function Question1() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [confetti, setConfetti] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "Avi's") {
      navigate("/question2");
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
      <Confetti active={confetti} config={confettiConfig} />
      <h1>Hi, Wait Who's girlfriend are you? 🧐 </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="girlfriend"
            value="Avi's"
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setConfetti(true);
            }}
          />
          Avi's
        </label>
        <label>
          <input
            type="radio"
            name="girlfriend"
            value="Avi's"
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setConfetti(true);
            }}
          />
          Avi's
        </label>
        <label>
          <input
            type="radio"
            name="girlfriend"
            value="Avi's"
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setConfetti(true);
            }}
          />
          Avi's
        </label>
        <br />
        <br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Question1;
