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

function Question4() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "yes" || selectedOption === "ofcourse yes") {
      navigate("/question5");
    }
  };

  const [confetti, setConfetti] = useState(false);
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
      <h1>
        Apparantly you're my girlfriend so Will you go out on a date with me?
        🥺👉👈
      </h1>
      <Confetti active={confetti} config={confettiConfig} />
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="date"
            value="yes"
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setConfetti(true);
            }}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="date"
            value="ofcourse yes"
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setConfetti(true);
            }}
          />
          Of course yes
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

export default Question4;
