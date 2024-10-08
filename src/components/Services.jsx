import React, { createRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon, details }) => {
  const tiltRef = createRef(); // Create ref for the Tilt component

  React.useEffect(() => {
    // Access the Tilt component's DOM node in componentDidMount using ref
    const tiltNode = tiltRef.current;
    console.log("Tilt DOM Node:", tiltNode);
    // You can perform actions with tiltNode here
  }, []); // Empty dependency array to run effect only once

  return (
    <Tilt ref={tiltRef} className="xs:w-[300px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-secondary text-[14px] text-center mt-4">
            {details}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Services We Provide</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Want to safely identify snakes and keep everyone out of harm's way?

This app can help! With it, you can learn to recognize different snake species so you can avoid danger and protect the snakes themselves.

Here's what the app offers:
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
