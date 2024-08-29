import React from "react";
import { styles } from "../styles";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5"></div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
					Enter the fascinating{" "}
						<span className="text-[#915eff]">world of reptiles!</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
					Identify snakes, Explore and Learn about snake species in Sri Lanka.
					</p>
				</div>
			</div>

			
		</section>
	);
};

export default Hero;
