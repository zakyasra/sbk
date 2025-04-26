"use client";

import { useEffect, useState } from "react";
import icon from "@/app/chevron-top.svg";
import Image from "next/image";
const ButtonToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<button
				onClick={scrollToTop}
				className={`cursor-pointer fixed bottom-5 right-5 text-2xl text-white rounded-full transition-opacity duration-300 ${
					isVisible ? "opacity-100" : "opacity-0"
				}`}
				style={{
					width: "40px",
					height: "40px",
					background: "#2565AA",
					zIndex: "99",
				}}
			>
				<Image src={icon} alt="icon to top" className="text-white" />
			</button>
		</>
	);
};

export default ButtonToTop;
