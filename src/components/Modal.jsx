import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 400px;
  background: #2b2d42;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  color: #e0e0e0;
`;

const ModalImage = styled.img`
  width: 300px;  // Set fixed width
  height: 200px;  // Set fixed height
  object-fit: contain;  // Ensure the image scales correctly without cropping
  border-radius: 12px;
  border: 2px solid #915eff;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background-color: #915eff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #7d4c9b;
    transform: scale(1.05);
  }
`;

const Heading = styled.h2`
  font-size: 20px;
  margin: 0;
  text-align: center;
  color: #e0e0e0;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 5px 0;
  text-align: center;
`;

const Venomosity = styled.p`
  font-size: 16px;
  margin: 5px 0;
  text-align: center;
  font-weight: bold;
  color: #ffcc00;  // Adjust color as needed
`;

function Modal(props) {
  const { setIsOpen, snake, accuracy, image } = props;

  // Determine venomosity based on snake
  const venomosity = [
    "Cobra", "Common Krait", "Hump nosed pit viper", "Russell's viper", "Saw Scaled Viper"
  ].includes(snake) ? "Highly Venomous" : ["Python", "Rat snake"].includes(snake) ? "Non Venomous" : "Unknown";

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalImage src={URL.createObjectURL(image)} alt="Uploaded snake" />
        <div>
          <Heading>Predicted Snake Species</Heading>
          <Text>{snake}</Text>
          <Venomosity>Venomosity: {venomosity}</Venomosity>
          <Text>Accuracy: {accuracy}%</Text>
        </div>
        <CloseButton onClick={handleCloseModal}>Close</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default Modal;
