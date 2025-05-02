"use client";
import Image from "next/image";
import logo from "../app/logo.svg";
import logoWa from "@/assets/footer/whatsapp.svg";
import logoIg from "@/assets/footer/instagram.svg";
import logoFb from "@/assets/footer/facebook.svg";
import logoLinkedin from "@/assets/footer/linkedin.svg";
import arrowWhite from "@/assets/footer/arrow-white.svg";
import arrowHover from "@/assets/footer/arrow-hover.svg";
import "../styles/footer.scss";
import { useState } from "react";
import IconSocialMedia from "./IconSocialMedia";
const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // scroll halus
		});
	};
	const [isHovered, setIsHovered] = useState(false);
	return (
		<footer
			className="bg-white w-full"
			style={{
				position: "absolute",
				zIndex: 9999,
			}}
		>
			<div className="bg-[#FAFAFA] xl:px-[74px] lg:px-14 md:px-12 px-6 md:pt-16 pt-10 md:pb-6 flex lg:flex-row flex-col md:items-start ff-poppins lg:gap-0 gap-6">
				<div className="flex md:flex-row flex-col lg:justify-content-between lg:gap-0 gap-12 w-full ">
					{/* logo */}
					<div className="md:w-1/2">
						<Image
							src={logo}
							alt="Logo PT. Sumber Berkat Komputindo"
							className="mb-6 min-w-full"
						/>
						<p className="font-normal text-[14px] text-[#535353] mb-12 text-justify">
							We provide top-notch services from network installation and data
							communication to professional and tidy wiring setups.
						</p>
						<IconSocialMedia footer />
					</div>
					{/* Our Navbar */}
					<div className="lg:mx-auto flex md:flex-row md:items-start lg:gap-14 gap-10">
						<div>
							<h3 className="text-[#1E1E1E] text-[20px] font-semibold">
								Our Products
							</h3>
							<div className="flex flex-col gap-6 text-[#535353] text-[14px]">
								<p>Mini Terminal Box 2</p>
								<p>Opticlan Thin Client</p>
								<p>Mini Terminal Box 1</p>
								<p>Mini Terminal Box 1</p>
							</div>
						</div>
						<div>
							<h3 className="text-[#1E1E1E] text-[20px] font-semibold">
								Our Services
							</h3>
							<div className="flex flex-col gap-6 text-[#535353] text-[14px]">
								<p>Mini Terminal Box 2</p>
								<p>Opticlan Thin Client</p>
								<p>Mini Terminal Box 1</p>
							</div>
						</div>
					</div>
				</div>
				<button
					className="w-auto sm:mx-[0] mx-auto lg:ml-auto lg:mr-0 mr-auto flex items-center cursor-pointer gap-2.5 md:px-9 px-7 md:py-6 py-4 rounded-[10px] ff-poppins md:text-[17px] text-[14px] font-bold text-white hover:text-[#2565AA] active:text-[#2565AA] bg-[#2565AA] hover:bg-white active:bg-white "
					style={{
						border: "1px solid #2565AA",
						transition: ".4s all",
					}}
					onClick={scrollToTop}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<span>BACK TO TOP</span>
					<Image src={isHovered ? arrowHover : arrowWhite} alt="icon to top" />
				</button>
			</div>

			<p
				className="text-center ff-inter text-[14px] text-[#535353] py-7 mt-10"
				style={{
					borderTop: "1px solid #DFDFDF",
				}}
			>
				{" "}
				Copyright ©{new Date().getFullYear()} Sumber Berkat Komputindo
			</p>
		</footer>
	);
};

export default Footer;
