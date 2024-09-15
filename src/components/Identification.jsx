import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Modal from "./Modal";
import CanvasTwo from "./canvas/Snake2";
import { slideIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { Oval } from "react-loader-spinner"; 

const Identification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState(null);
  const [danger, setIsDanger] = useState(false);
  const [prediction, setPrediction] = useState({ snake: null, accuracy: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMsg("Add image first");
      setIsDanger(true);
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token && { Authorization: `Bearer ${token}` })
        },
      });

      const { snake, accuracy } = response.data;
      setPrediction({ snake: snake || null, accuracy: accuracy || null });
      setIsOpen(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Error predicting snake:", error);
      setIsLoading(false);
    }
  };

  const isValidFileUploaded = (file) => {
    const validExtensions = ["png", "jpeg", "jpg"];
    const fileExtension = file.type.split("/")[1];
    return validExtensions.includes(fileExtension);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && isValidFileUploaded(file)) {
      setMsg("Valid file uploaded!");
      setIsDanger(false);
      setFile(file);
    } else {
      setIsDanger(true);
      setMsg("Please upload a valid image file (PNG, JPEG, JPG)!");
      setFile(null);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setFile(null);
    setMsg(null);
  };

  return (
    <>
      {isOpen && prediction.snake && (
        <Modal
          isOpen={isOpen}
          setIsOpen={handleCloseModal}
          snake={prediction.snake}
          accuracy={prediction.accuracy}
          image={file}
        />
      )}

      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <h3 className={styles.sectionHeadText}>Let's Identify It Here</h3>
          <form className="mt-12 flex flex-col gap-8" onSubmit={handleSubmit}>
            <label className="flex flex-col rounded-xl text-center px-10 py-3 cursor-pointer bg-[#915EFF] text-white font-medium shadow-md shadow-primary hover:bg-[#7d4c9b]">
              <span className="text-white font-medium">Upload File</span>
              <input
                name="imagefile"
                className="hidden"
                type="file"
                onChange={handleChange}
              />
            </label>
            {msg && <label className={danger ? "text-red-500" : "text-green-500"}>{msg}</label>}

            {/* Centering the button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:bg-[#7d4c9b]"
                disabled={!file || isLoading}
              >
                {isLoading ? "Predicting..." : "Click to Predict"}
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              {/* Spinner component from react-loader-spinner */}
              <Oval
                height={80}
                width={80}
                color="#915EFF"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#7d4c9b"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : (
            <CanvasTwo />
          )}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Identification, "identification");
