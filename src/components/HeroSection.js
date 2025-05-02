import Image from "next/image";
import React from "react";
import iconMedal from "@/assets/heroSection/medal.svg";
import heroImage from "@/assets/heroSection/hero-image.png";
import "../styles/heroSection.scss";

const HeroSection = () => {
	return (
		<div className="flex items-center md:flex-row flex-col-reverse md:gap-0 gap-[10px] md:justify-between md:text-start text-center">
			{/* left section | We Help You Connect */}
			<div className="ff-poppins ">
				<h1 className="font-bold xl:text-[64px] lg:text-[48px] sm:text-[40px] text-[32px] text-dark mb-1">
					We Help You Connect
				</h1>
				<p className="font-light xl:text-[28px] lg:text-[24px] sm:text-[20px] text-[16px] text-dark mb-3">
					Networking, Data Communication and Wiring Specialist
				</p>
				<p
					className="font-normal xl:text-[17px] lg:text-[16px] text-[14px]  mb-4 md:max-w-3/4 w-"
					style={{
						color: "rgba(19, 46, 76, 0.6)",
					}}
				>
					We provide top-notch services from network installation and data
					communication to professional and tidy wiring setups.
				</p>
				{/* text with badge */}
				<div className="flex mb-11 md:justify-start justify-center">
					<div
						className="relative md:ps-4 ps-2.5 md:py-2.5 py-2 md:pr-8 pr-4"
						style={{
							border: "1.5px solid rgba(194, 157, 43, 1)",
							backgroundImage:
								"linear-gradient(rgba(240, 218, 150, 0.5),rgba(251, 217, 113, 0.24),rgba(255, 255, 102, 0.2))",
							borderRadius: "10px",
						}}
					>
						<span
							className="font-[600] lg:text-2xl sm:text-[18px] text-[14px]"
							style={{
								color: "rgba(194, 157, 43)",
							}}
						>
							{" "}
							14 Years Experience with over 1000+ Clients
						</span>
						<Image
							src={iconMedal}
							alt="icon medal"
							className="absolute lg:top-[-18px] lg:right-[-25px] md:top-[-21px] sm:right-[-15px] sm:top-[-13px] right-[-12px] top-[-10px] lg:w-[48px] md:w-[42px] sm:w-[32px] w-[24px] h-auto"
						/>
					</div>
				</div>
				<div className="flex items-center md:justify-start justify-center lg:gap-11 md:gap-8 sm:gap-6 gap-3">
					<button
						className="cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 sm:px-5 sm:py-3.5 px-3.5 py-4 rounded-[10px] font-bold sm:text-[18px] text-[16px] flex w-fit text-white hover:text-[#2565AA] active:text-[#2565AA] bg-[#2565AA] hover:bg-white active:bg-white"
						style={{
							transition: ".3s all",
							border: "1px solid #2565AA",
						}}
						onClick={() => {
							const el = document.getElementById("about-us");
							if (el) {
								el.scrollIntoView({ behavior: "smooth" });
							}
						}}
					>
						EXPLORE MORE
					</button>
					{/* <button className="cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 sm:px-5 sm:py-3.5 px-3.5 py-4 font-bold sm:text-[18px] text-[16px] text-[#2565AA] border-linear hero-white">
						CONTACT US
					</button> */}
					<button
						className="cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 sm:px-5 sm:py-3.5 px-3.5 py-4 rounded-[10px] font-bold sm:text-[18px] text-[16px] bg-white hover:bg-[#2565AA] active:bg-[#2565AA] text-[#2565AA] hover:text-white  active:text-white"
						style={{
							transition: ".4s all",
							border: "1px solid #2565AA",
						}}
					>
						CONTACT US
					</button>
				</div>
			</div>
			{/* Right Section | Img */}
			<div>
				<Image
					src={heroImage}
					alt="hero image"
					className="xl:w-[500px] lg:w-[400px] md:w-[300px] w-[250px] max-w-[none]"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
