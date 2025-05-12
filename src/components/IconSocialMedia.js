import React from "react";
import {
	FaFacebook,
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import logoLinkedin from "@/assets/footer/linkedin.svg";
import Image from "next/image";
function IconSocialMedia({ footer }) {
	return (
		<div className="flex items-center gap-4">
			<a
				href="https://wa.me/6281513008267?text=Halo%20*PT%20SUMBER%20BERKAT%20KOMPUTINDO*%20saya%20ingin%20bertanya "
				target="_blank"
				rel="noopener noreferrer"
				className={`lg:w-[40px] ${
					footer
						? "text-[#2565AA] hover:text-[#283746] transition-all duration-300"
						: "bg-[#2565AA]  hover:bg-[#283746] transition-all duration-300text-[white]"
				} px-2.5 py-2 rounded-[8px]`}
			>
				{footer ? (
					<RiWhatsappFill className="w-[30px] bg-[#fafafa] h-auto text-[inherit]" />
				) : (
					<FaWhatsapp className="w-full h-auto 	hover:bg-[#283746] text-white" />
				)}
			</a>
			<div
				className={`lg:w-[40px]${
					footer ? "bg-white text-[#2565AA]" : " bg-[#2565AA] text-white"
				} px-2.5 py-2 rounded-[8px]`}
				style={{ boxSizing: "border-box" }}
			>
				{footer ? (
					<FaFacebook className="w-[30px] h-auto" />
				) : (
					<FaFacebookF className="w-full h-auto" />
				)}
			</div>
			<div
				className={`lg:w-[40px]${
					footer ? "bg-white text-[#2565AA]" : " bg-[#2565AA] text-white"
				} px-2.5 py-2 rounded-[8px]`}
				style={{ boxSizing: "border-box" }}
			>
				{footer ? (
					<PiInstagramLogoFill className="w-[30px] h-auto" />
				) : (
					<FaTwitter className="w-full h-auto" />
				)}
			</div>
			<div
				className={`lg:w-[40px]${
					footer ? "bg-white text-[#2565AA]" : " bg-[#2565AA] text-white"
				} px-2.5 py-2 rounded-[8px]`}
				style={{ boxSizing: "border-box" }}
			>
				{footer ? (
					<Image
						src={logoLinkedin}
						alt="icon linkedin"
						className="w-[30px] h-auto"
					/>
				) : (
					<FaLinkedinIn className="w-full h-auto" />
				)}
			</div>
		</div>
	);
}

export default IconSocialMedia;
