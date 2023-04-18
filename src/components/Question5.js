import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import Confetti from "react-dom-confetti";
import ReactModal from "react-modal";

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

function Question5() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 150,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#ff9dd1", "#f47ab5", "#f9c6de", "#ffffff"],
  };

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [confetti, setConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
    setConfetti(true);
  };

  return (
    <div css={containerStyle}>
      <h1>Here are your options.</h1>
      <p>
        I have no way of understanding what you have selected to ft pe bata dena
        pls 🙂
      </p>

      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
        >
          <option value="">Select a location</option>
          <option value="Koris">Koris</option>
          <option value="Sandoz">Sandoz</option>
          <option value="Tea Room">Tea Room</option>
          <option value="Imperfectooo">Imperfectooo</option>
        </select>
        <br />
        <br />
        <button css={buttonStyle} type="submit">
          Finish
        </button>
      </form>
      <Confetti active={modalIsOpen} config={confettiConfig} />

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            backgroundColor: "#f9c6de",
            borderRadius: "20px",
            border: "2px solid #f47ab5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          },
        }}
      >
        <h2>Nice yaar</h2>
        <p>
          Aapne <strong>{selectedOption}</strong> choose kiya for the date. V
          nice. Cute yaar.
        </p>

        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          Finish
        </button>
      </ReactModal>
    </div>
  );
}

export default Question5;
