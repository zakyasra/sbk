"use client";
import iconWhatsapp from "@/assets/whatsappButton/whatsapp-over.svg";
import iconClose from "@/assets/whatsappButton/close.svg";

import { useEffect, useState } from "react";
import icon from "@/app/chevron-top.svg";
import Image from "next/image";
const ButtonToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisible2, setIsVisible2] = useState(true);

	useEffect(() => {}, []);
	const buttonClick = () => {
		setIsVisible2(false);
	};

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
			<div className="fixed right-0 bottom-20 flex flex-col gap-8 items-end">
				<div
					className={`flex gap-2 items-center ${
						isVisible ? "opacity-100" : "opacity-0"
					}`}
					style={{
						zIndex: "99999",
					}}
				>
					{/* container text */}
					<div
						className={`${
							isVisible2
								? "flex gap-2.5 items-center px-2 py-3 bg-white rounded-[8px]"
								: "hidden"
						}`}
					>
						<div className="flex flex-col gap-1 text-[#2565AA] font-semibold text-[14px]">
							<span>Having a problem? if you have any</span>
							<span>question please let us know!</span>
						</div>
						<Image
							src={iconClose}
							alt="Icon Close"
							onClick={buttonClick}
							className="cursor-pointer h-auto w-[20px]"
						/>
					</div>
					<Image
						src={iconWhatsapp}
						alt="Icon Whatsapp"
						className="w-auto h-[80px] cursor-pointer"
					/>
				</div>
				<button
					onClick={scrollToTop}
					className={`cursor-pointer text-2xl text-white rounded-full transition-opacity duration-300 mr-4 ${
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
			</div>
		</>
	);
};

export default ButtonToTop;
