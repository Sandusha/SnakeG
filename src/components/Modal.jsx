import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #2b2d42;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 70%;
  object-fit: contain;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  background-color: #ef233c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

function Modal(props) {
  const { setIsOpen, snake, accuracy, image } = props;

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContainer>
      <ModalImage src={URL.createObjectURL(image)} alt="Uploaded snake" />
      <div>
        <h2>Predicted Snake Species Is</h2>
        <p>{snake}</p>
        <p>Accuracy: {accuracy}%</p>
      </div>
      <CloseButton onClick={handleCloseModal}>Close</CloseButton>
    </ModalContainer>
  );
}

export default Modal;
