import React from "react";
import { motion } from "framer-motion";

const PredictionModal = ({ isOpen, prediction, setIsOpen }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
      style={{ backdropFilter: "blur(4px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
    >
      <div className="bg-white p-8 rounded-md shadow-lg max-w-sm">
        <h2 className="text-xl font-bold mb-4">Snake Prediction</h2>
        {prediction && (
          <div>
            <p className="mb-2">
              Snake: <strong>{prediction.snake}</strong>
            </p>
            <p>
              Accuracy: <strong>{prediction.accuracy}%</strong>
            </p>
          </div>
        )}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-tertiary text-white py-2 px-4 rounded-md hover:bg-tertiary-dark"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default PredictionModal;
