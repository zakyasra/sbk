"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import {
	MdChevronLeft,
	MdChevronRight,
	MdInstallDesktop,
	MdSupportAgent,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { FaLightbulb, FaNetworkWired } from "react-icons/fa";
import { LuCable } from "react-icons/lu";
import { BsDatabaseFillGear } from "react-icons/bs";
import { RiChatPrivateFill } from "react-icons/ri";
import { FaBuildingCircleCheck } from "react-icons/fa6";
// image

const listServices = [
	{
		icon: (
			<MdInstallDesktop className="sm:w-[56px] w-[48px] h-auto text-white" />
		),
		title: "End-to-End IT Solutions",
		description:
			"We deliver complete system integration services from initial planning, hardware/software provisioning, installation, configuration, to long-term maintenance.",
	},
	{
		icon: <FaNetworkWired className="sm:w-[56px] w-[48px] h-auto text-white" />,
		title: "Specialization in Networking and Data Communication:",
		description:
			"We build robust and secure network infrastructures that enable seamless data transfer and real-time communication across your entire organization.",
	},
	{
		icon: <LuCable className="sm:w-[56px] w-[48px] h-auto text-white" />,
		title: " Structured Cabling and Wiring Systems:",
		description:
			"Our experienced technicians design and implement structured cabling systems that support present and future networking requirements with optimal reliability and scalability.",
	},
	{
		icon: <MdSupportAgent className="sm:w-[56px] w-[48px] h-auto text-white" />,
		title: "Expert Team Support:",
		description:
			"Our team is composed of highly skilled professionals with deep expertise in the latest technologies from leading IT vendors. We provide ongoing support to ensure your system runs smoothly and securely.",
	},
	{
		icon: (
			<BsDatabaseFillGear className="sm:w-[56px] w-[48px] h-auto text-white" />
		),
		title: "Innovative Solutions",
		description:
			"We provide cutting-edge and tailor-made IT solutions to modernize and streamline your business operations.",
	},
	{
		icon: (
			<RiChatPrivateFill className="sm:w-[56px] w-[48px] h-auto text-white" />
		),
		title: "Public & Private Sector Experience:",
		description:
			"Our portfolio includes projects from government institutions and non-profit organizations, reflecting our versatility and commitment to excellence.",
	},
	{
		icon: (
			<FaBuildingCircleCheck className="sm:w-[56px] w-[48px] h-auto text-white" />
		),
		title: " Trusted by Industry Leaders:",
		description:
			"We are proud to be trusted by major companies across industries such as automotive, banking, education, telecommunications, and manufacturing.",
	},
	{
		icon: <FaLightbulb className="sm:w-[56px] w-[48px] h-auto text-white" />,
		title: " Innovative Solutions:",
		description:
			"We provide cutting-edge and tailor-made IT solutions to modernize and streamline your business operations.",
	},
];

export default function ResponsiveCarousel() {
	const [viewportWidth, setViewportWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 1024
	);

	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div
			className="bg-[#EAF3FB]"
			style={{
				background: "url(/bg-services.jpg)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: " center",
				backgroundSize: " cover",
				// overflow: " hidden",
			}}
		>
			<div
				className="w-full content-container flex lg:flex-row flex-col gap-12 xl:px-16 lg:px-14 md:px-12 sm:px-9 px-[24px] xl:pt-20 lg:pt-16 pt-10 mt-12"
				id="our-services"
			>
				{/* Title & Controls */}
				<div className="lg:max-w-[444px] w-full">
					<h3 className="mb-4 ff-outfit text-[#C29D2B] text-2xl font-bold">
						OUR SERVICES
					</h3>
					<h2 className="mb-6 ff-poppins lg:text-5xl lg:text-[42px] sm:text-[38px] text-[32px] text-dark font-bold">
						Our top{" "}
						<span
							className="relative inline-block text-[#2565AA]"
							style={{
								borderBottom: "10px solid #2565AA",
							}}
						>
							Services
						</span>{" "}
						for you
					</h2>
					<p className="ff-poppins mb-6 sm:text-[20px] text-[14px] text-[#132e4c99]">
						Etiam at iaculis massa. Etiam eu enim varius, congue ante id,
						venenatis velit. Aenean ve.
					</p>
					{/* Prev / Next Buttons */}
					<div className="flex md:justify-start gap-4 items-center">
						<div
							className="cursor-pointer swiper-button-prev-custom rounded-[50%] bg-white hover:bg-[#2565AA] active:bg-[#2565AA] text-[#2565AA] hover:text-white active:text-white duration-300 transition-all"
							style={{
								border: "2px solid #2565AA",
							}}
						>
							<MdChevronLeft className="xl:w-[48px] md:w-[40px] w-[32px] h-auto" />
						</div>
						<div
							className="cursor-pointer swiper-button-next-custom rounded-[50%] bg-white hover:bg-[#2565AA] active:bg-[#2565AA] text-[#2565AA] hover:text-white active:text-white duration-300 transition-all"
							style={{
								border: "2px solid #2565AA",
							}}
						>
							<MdChevronRight className="xl:w-[48px] md:w-[40px] w-[32px] h-auto" />
						</div>
					</div>
				</div>

				{/* Swiper */}
				<div className="xl:max-w-[620px] lg:max-w-[520px] mx-auto w-full h-full xl:px-12 lg:ps-12  ">
					<Swiper
						key={viewportWidth}
						modules={[Navigation, Pagination, Grid]}
						navigation={{
							nextEl: ".swiper-button-next-custom",
							prevEl: ".swiper-button-prev-custom",
						}}
						pagination={{ clickable: true }}
						spaceBetween={20}
						breakpoints={{
							0: {
								slidesPerView: 1.3,
								grid: {
									rows: 1,
								},
							},
							576: {
								slidesPerView: 2,
								grid: {
									rows: 2,
									fill: "row",
								},
							},
						}}
						className="max-w-7xl relative"
					>
						{listServices.map((data, idx) => (
							<SwiperSlide
								key={idx}
								className="bg-white rounded-xl shadow p-5 card-services text-left max-h-[500px]"
							>
								<div className="flex flex-col justify-between	">
									<div
										className="w-fit p-[9px] rounded-[8px] mb-2"
										style={{
											backgroundImage:
												"linear-gradient( to right, #2565AA, #0590E6)",
										}}
									>
										{data.icon}
									</div>
									<h3 className="ff-outfit font-bold lg:text-[16px] md:text-[14px] sm:text-[16px] text-[#1D293F] mb-2 text-start">
										{data.title}
									</h3>
									<p className="ff-dm-sans lg:text-[14px] text-[12px] text-[#7C8087] text-justify mt-auto">
										{data.description}
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Pagination Bullets */}
					{/* <div className="mt-20 text-7xl text-teal-300 bg-amber-500 w-full h-28">
					KEREN
				</div> */}
					<div className="swiper-pagination-container justify-center">
						<div
							id="swiper-pagination"
							className="swiper-pagination "
							style={{
								position: "relative !important",
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}
