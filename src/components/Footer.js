"use client";
import Image from "next/image";
import logo from "../assets/navbar/logo-sbk.png";
import logoWa from "@/assets/footer/whatsapp.svg";
import logoIg from "@/assets/footer/instagram.svg";
import logoFb from "@/assets/footer/facebook.svg";
import logoLinkedin from "@/assets/footer/linkedin.svg";
import arrowWhite from "@/assets/footer/arrow-white.svg";
import arrowHover from "@/assets/footer/arrow-hover.svg";
import "../styles/footer.scss";
import { useState } from "react";
import IconSocialMedia from "./IconSocialMedia";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
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
			className="bg-[#FAFAFA] w-full xl:mt-28 lg:mt-24 mt-16"
			style={{
				position: "absolute",
				zIndex: 9999,
			}}
		>
			<div className="bg-[#FAFAFA] xl:px-[74px] lg:px-14 md:px-12 px-6 pt-10 md:pb-6 flex lg:flex-row flex-col md:items-start ff-poppins lg:gap-0 gap-6">
				<div className="flex sm:flex-row flex-col lg:justify-content-between lg:gap-0 gap-12 w-auto ">
					{/* logo */}
					<div className="md:w-1/2">
						<Link href={"/"}>
							<Image
								loading="eager"
								src={logo}
								alt="Logo PT. Sumber Berkat Komputindo"
								className="mb-6 min-w-full"
							/>
						</Link>
						<p className="font-normal text-[14px] text-[#535353] mb-12 text-justify">
							We provide top-notch services from network installation and data
							communication to professional and tidy wiring setups.
						</p>
						<IconSocialMedia footer />
					</div>
					{/* Our Navbar */}
					<div className="lg:mx-auto md:items-start lg:gap-14 gap-10">
						<h3 className="ff-ff-poppins xxl:text-[32px] text-[24px] font-semibold text-[#1E1E1E] mb-6">
							Website Link
						</h3>
						<div className="flex gap-12 ff-outfit">
							<div className="flex flex-col gap-4">
								<Link
									href={"/"}
									className="text-[#535353] hover:text-[#132e4c] hover:font-semibold  active:font-bold active:text-[#132e4c] xxl:text-[20px] xl:text-[18px] text-[16px]"
								>
									<span>Home</span>
								</Link>
								<Link
									href={"/about"}
									className="text-[#535353] hover:text-[#132e4c] hover:font-semibold active:font-bold active:text-[#132e4c] xxl:text-[20px] xl:text-[18px] text-[16px]"
								>
									<span>About</span>
								</Link>
								<Link
									href={"/services"}
									className="text-[#535353] hover:text-[#132e4c] hover:font-semibold active:font-bold active:text-[#132e4c] xxl:text-[20px] xl:text-[18px] text-[16px]"
								>
									<span>Services</span>
								</Link>
								<Link
									href={"/products"}
									className="text-[#535353] hover:text-[#132e4c] hover:font-semibold active:font-bold active:text-[#091625] xxl:text-[20px] xl:text-[18px] text-[16px]"
								>
									<span>Products</span>
								</Link>
							</div>
							<div className="flex flex-col gap-4">
								<Link
									href={"/clients"}
									className="text-[#535353] hover:text-[#132e4c] hover:font-semibold active:font-bold active:text-[#132e4c] xxl:text-[20px] xl:text-[18px] text-[16px]"
								>
									<span>Clients</span>
								</Link>
								<Link
									href={"/contact"}
									className="text-[#535353] hover:text-[#132e4c] hover:font-semibold active:font-bold active:text-[#132e4c] xxl:text-[20px] xl:text-[18px] text-[16px]"
								>
									<span>Contact</span>
								</Link>
								<Link
									href={"/download"}
									className="text-[#535353] hover:text-[#132e4c] hover:font-semibold active:font-bold active:text-[#132e4c] xxl:text-[20px] xl:text-[18px] text-[16px]"
								>
									<span>Download</span>
								</Link>
							</div>
						</div>
						{/*<div>
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
						</div> */}
					</div>
				</div>
				<button
					className="w-fit md:min-w-[230px] min-w-auto max-w-[none] sm:mx-[0] mx-auto lg:ml-auto lg:mr-0 mr-auto flex items-center cursor-pointer  md:px-9 px-7 md:py-6 py-4 rounded-[10px] ff-poppins md:text-[17px] text-[14px] font-bold text-white hover:text-[#2565AA] active:text-[#2565AA] bg-[#2565AA] hover:bg-white active:bg-white "
					style={{
						border: "1px solid #2565AA",
						transition: ".4s all",
					}}
					onClick={scrollToTop}
				>
					<span>BACK TO TOP</span>
					<FaArrowUp className="w-[24px] h-auto text-inherit ms-2.5" />
				</button>
			</div>

			<p
				className="bg-[#FAFAFA] text-center ff-inter text-[14px] text-[#535353] py-7 mt-10"
				style={{
					borderTop: "1px solid #DFDFDF",
				}}
			>
				{" "}
				Copyright ©{new Date().getFullYear()} PT Sumber Berkat Komputindo
			</p>
		</footer>
	);
};

export default Footer;
