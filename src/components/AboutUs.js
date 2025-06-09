"use client";

import aboutImage from "@/assets/aboutSection/about-image.svg";
import line from "@/assets/aboutSection/line.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
const AboutUs = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		// Trigger animasi 300ms setelah mount
		const timer = setTimeout(() => {
			setShow(true);
		}, 300);

		return () => clearTimeout(timer);
	}, []);

	const toLeft = show
		? "opacity-100 sm:translate-x-0 translate-y-0"
		: "opacity-0 sm:translate-x-10 translate-y-10";

	const toRight = show
		? "opacity-100 sm:translate-x-0 translate-y-0"
		: "opacity-0 sm:-translate-x-10 -translate-y-10";
	return (
		<div
			className="overflow-hidden flex items-center md:flex-row flex-col justify-between md:gap-12 lg:pt-24 pt-10 lg:mt-0 mt-10 ff-poppins md:mb-20 mb-14"
			id="about-us"
		>
			{/* left section */}
			<div
				className={` md:w-1/2`}
				data-aos="fade-right"
				data-aos-anchor-placement="top-center"
			>
				<Image
					loading="eager"
					src={aboutImage}
					alt="icon about"
					className=" md:w-[400px] sm:w-[350px] w-[250px] h-auto  mx-auto max-w-[none]"
				/>
			</div>
			{/* rightsection */}
			<div
				className={` max-w-[750px] md:text-left text-center md:w-1/2`}
				data-aos="fade-left"
				data-aos-anchor-placement="center-bottom"
			>
				<h3 className="ff-outfit font-bold text-2xl  text-[#C29D2B]">
					WHAT IS
				</h3>
				<h2 className="inline w-auto sumber ff-poppins font-semibold xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[32px] sm:text-[38px] text-[30px] text-[#2565AA] ">
					Sumber Berkat Komputindo
				</h2>
				<Image loading="eager" src={line} alt="line" className="w-[100%]" />
				<p className="mt-6 text-dark-fade lg:text-[20px] md:text-[18px] text-[14px] md:text-left text-justify">
					PT. Sumber Berkat Komputindo (SBK) is an end-to-end ICT solution
					provider established in the early 2000s. We specialize in network
					integration, data communication, and wiring systems for both public
					and private corporations.
					<br />
					<br />
					With over 20+ years of experience in the IT industry, we understand
					the core of the technology environment, especially networking — a key
					factor in business success. We are committed to delivering
					high-quality solutions backed by consulting, support, and management
					services.
				</p>
				<button
					className="lg:mt-9 md:mt-7 mt-8 cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 sm:px-5 sm:py-3.5 px-3.5 py-4 rounded-[10px] font-bold sm:text-[18px] text-[16px] w-fit text-white hover:text-[#2565AA] active:text-[#2565AA] bg-[#2565AA] hover:bg-white active:bg-white	"
					onClick={() => {
						const el = document.getElementById("our-services");
						if (el) {
							el.scrollIntoView({ behavior: "smooth" });
						}
					}}
					style={{
						transition: ".4s all",
						border: "1px solid #2565AA",
					}}
				>
					{/* className="" */}
					SEE OUR SERVICES
				</button>
			</div>
		</div>
	);
};

export default AboutUs;
