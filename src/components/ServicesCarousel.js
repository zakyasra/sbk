"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { SiLibreofficecalc } from "react-icons/si";
const cards = Array.from({ length: 8 }, (_, i) => ({
	id: i,
	title: "Data Specialist",
	description:
		"Etiam at iaculis massa. Etiam eu enim varius, congue ante id, venenatis velit. Aenean vel.",
}));

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
			className="w-full bg-[#EAF3FB] flex lg:flex-row flex-col gap-12 xl:px-16 lg:px-14 md:px-12 sm:px-9 px-[24px] xl:pt-20 lg:pt-16 pt-10 mt-12"
			style={{
				background: "url(/bg-services.jpg)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: " center",
				backgroundSize: " cover",
				// overflow: " hidden",
			}}
		>
			{/* Title & Controls */}
			<div className="lg:max-w-[444px] w-full">
				<h3 className="mb-4 ff-outfit text-[#C29D2B] text-2xl font-bold">
					OUR SERVICES
				</h3>
				<h2 className="mb-6 ff-poppins lg:text-5xl lg:text-[42px] sm:text-[38px] text-[48px] text-dark font-bold">
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
				<p className="ff-poppins mb-6 text-[20px] text-[#132e4c99]">
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
			<div className="xl:max-w-[620px] lg:max-w-[520px] w-full h-full xl:px-12 lg:ps-12  ">
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
								rows: 2,
								fill: "row",
							},
						},
						430: {
							slidesPerView: 2,
							grid: {
								rows: 2,
								fill: "row",
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
					className="max-w-7xl mx-auto relative"
				>
					{cards.map((card) => (
						<SwiperSlide
							key={card.id}
							className="bg-white rounded-xl shadow p-5 card-services text-left"
						>
							<div
								className="w-fit p-[9px] rounded-[8px] mb-2"
								style={{
									backgroundImage:
										"linear-gradient( to right, #2565AA, #0590E6)",
								}}
							>
								<SiLibreofficecalc className="text-white xl:w-[32px] lg:w-[28px] md:w-[24px]   h-[32px]" />
							</div>
							<h3 className="ff-outfit font-bold lg:text-[16px] md:text-[14px] sm:text-[16px] text-[#1D293F] mb-2 text-start">
								{card.title}
							</h3>
							<p className="ff-dm-sans lg:text-[14px] text-[12px] text-[#7C8087] text-justify">
								{card.description}
							</p>
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
	);
}
