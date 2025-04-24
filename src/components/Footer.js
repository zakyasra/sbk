"use client";
import Image from "next/image";
import logo from "../app/nav-logo.png";
import logoWa from "@/assets/footer/whatsapp.svg";
import logoIg from "@/assets/footer/instagram.svg";
import logoFb from "@/assets/footer/facebook.svg";
import logoLinkedin from "@/assets/footer/linkedin.svg";
import arrowWhite from "@/assets/footer/arrow-white.svg";
import arrowHover from "@/assets/footer/arrow-hover.svg";
import "../styles/footer.scss";
import { useState } from "react";
const Footer = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="bg-[#FAFAFA] md:px-[74px] md:pt-16 md:pb-6 flex md:flex-row md:items-start w-full ff-poppins">
			<div className="w-1/3">
				<Image
					src={logo}
					alt="Logo PT. Sumber Berkat Komputindo"
					className="mb-6"
				/>
				<p className="font-normal text-[14px] text-[#535353] mb-12">
					Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit
					turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus
					tempus mauris neque.
				</p>
				<div className="flex items-center gap-4">
					<Image src={logoWa} alt="Icon Whatsapp" />
					<Image src={logoIg} alt="Icon Instagram" />
					<Image src={logoFb} alt="Icon Facebook" />
					<Image src={logoLinkedin} alt="Icon LinkedIn" />
				</div>
			</div>
			<div className="mx-auto flex md:flex-row md:items-start gap-14">
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
			<button
				className="ml-auto flex cursor-pointer gap-2.5 px-9 py-6 rounded-[10px] ff-poppins text-[17px] font-bold text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white"
				style={{
					border: "1px solid #2565AA",
					transition: ".4s all",
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<span>BACK TO TOP</span>
				<Image src={isHovered ? arrowHover : arrowWhite} alt="icon to top" />
			</button>
		</div>
	);
};

export default Footer;
