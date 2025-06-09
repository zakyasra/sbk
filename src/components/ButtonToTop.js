"use client";
import iconWhatsapp from "@/assets/whatsappButton/whatsapp-over.svg";
import whatsapp from "@/assets/whatsappButton/whatsapp.png";
import iconClose from "@/assets/whatsappButton/close.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useState } from "react";
import icon from "@/app/chevron-top.svg";
import Image from "next/image";
import { FaChevronUp, FaWhatsapp } from "react-icons/fa";
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
			<div
				className="fixed md:right-[24px] sm:right-[16px] right-[8px] bottom-20 flex flex-col gap-8 items-end"
				style={{
					zIndex: "999",
				}}
			>
				<div
					className={`flex sm:gap-4 gap-2 items-center ${
						isVisible ? "opacity-100" : "opacity-0"
					}`}
				>
					{/* container text */}
					<div
						className={`${
							isVisible2
								? "flex gap-2.5 items-center px-2 py-3 bg-white rounded-[8px]"
								: "hidden"
						}`}
					>
						<div className="uw-text-button flex flex-col gap-1 text-[#2565AA] font-semibold sm:text-[14px] text-[12px]">
							<span>Having a problem? if you have any</span>
							<span>question please let us know!</span>
						</div>
						<Image
							loading="eager"
							src={iconClose}
							alt="Icon Close"
							onClick={buttonClick}
							className="cursor-pointer h-auto w-[20px]"
						/>
					</div>
					<a
						href="https://wa.me/6281513008267?text=Halo%20*PT%20SUMBER%20BERKAT%20KOMPUTINDO*%20saya%20ingin%20bertanya "
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							loading="eager"
							alt="Icon Whatsapp"
							src={whatsapp}
							className="lg:w-[50px] md:w-[40px] w-[35px] h-auto cursor-pointer"
						/>
					</a>
				</div>
				<button
					onClick={scrollToTop}
					className={`icon-top cursor-pointer p-2  text-2xl rounded-full transition-opacity duration-300 z-[99px] text-white hover:text-[#2565AA] active:text-[#2565AA] bg-[#2565AA] hover:bg-white active:bg-white  ${
						isVisible ? "opacity-100" : "opacity-0"
					}`}
					style={{
						border: "1px solid #2565AA",
						boxSizing: "border-box",
					}}
				>
					<FaChevronUp
						src={icon}
						alt="icon to top"
						className="logo-top text-[inherit] transition-all duration-300 lg:w-[35px] md:w-[25px] w-[20px] h-auto cursor-pointer"
					/>
				</button>
			</div>
		</>
	);
};

export default ButtonToTop;
