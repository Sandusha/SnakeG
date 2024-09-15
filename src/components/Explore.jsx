import Tilt from "react-tilt";
import { motion } from "framer-motion";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { styles } from "../styles";
import wiki from "../assets/wiki.png";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const KnowledgeCard = ({ snake }) => {
	const { name, description, image, wikiLink } = snake;

	return (
		<motion.div
			className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full sm:h-[680px] h-[650px] shadow-lg`}
			variants={fadeIn("up", "spring")}
		>
			<div className="relative w-full h-[230px]">
				<img
					src={image}
					alt={name}
					className="w-full h-full object-cover rounded-2xl"
				/>

				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					<div
						onClick={() => window.open(wikiLink, "_blank")}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
					>
						<img
							src={wiki}
							alt="source code"
							className="w-1/2 h-1/2 object-contain"
						/>
					</div>
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px] text-center">{name}</h3>
				<p className="mt-2 text-secondary text-[14px] leading-relaxed text-justify">
					{description}
				</p>
			</div>
		</motion.div>
	);
};

const Explore = () => {
	const [snakes, setSnakes] = useState([]);

	useEffect(() => {
		const fetchSnakes = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:5000/snakes");
				setSnakes(response.data.snakes);
			} catch (error) {
				console.error("Error fetching snakes:", error);
			}
		};

		fetchSnakes();
	}, []);

	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={`${styles.sectionHeadText}`}>Common Snakes Around Sri Lanka</h2>
			</motion.div>

			<div className="mt-20 flex flex-wrap gap-7">
				{snakes.map((snake, index) => (
					<KnowledgeCard key={snake._id} snake={snake} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Explore, "explore");
