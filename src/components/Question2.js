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

function Question2() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [confetti, setConfetti] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "5 months") {
      navigate("/question3");
    }
  };

  return (
    <div css={containerStyle}>
      <Confetti active={confetti} config={confettiConfig} />
      <h1>Liarrrr.... Also For how many days have we been dating? 🤨 </h1>
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) => {
            setSelectedOption(e.target.value);
            if (e.target.value == "5 months") {
              setConfetti(true);
            }
          }}
          value={selectedOption}
        >
          <option value="">Select duration</option>
          <option value="5 months">5 months</option>
          <option value="4 months">4 months</option>
          <option value="6 months">6 months</option>
          <option value="0 months">0 months</option>
        </select>
        <br />
        <br />
        <button css={buttonStyle} type="submit">
          Next
        </button>
      </form>
    </div>
  );
}

export default Question2;
