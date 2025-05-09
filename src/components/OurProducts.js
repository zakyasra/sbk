"use client";
import Image from "next/image";
import line from "@/assets/ourProduct/line.svg";
import card from "@/assets/ourProduct/card.jpg";
import "../styles/ourProduct.scss";
import Title from "./HeroTop/Title";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdDownload } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import iconSearch from "@/assets/search-icon.svg";
import com from "@/assets/products/6com.png";
import apc from "@/assets/products/apc.svg";
import aruba from "@/assets/products/aruba-networking.svg";
import atop from "@/assets/products/atop.png";
import cisco from "@/assets/products/cisco.jpg";
import eaton from "@/assets/products/eaton.png";
import gigalight from "@/assets/products/gigalight.png";
import opticlan from "@/assets/products/opticlan.jpg";
import phoenix from "@/assets/products/phoenix.ico";
import aerech from "@/assets/products/aerech.webp";
import tarluz from "@/assets/products/tarluz.png";
import noImage from "@/assets/products/no-image.png";
import linksys from "@/assets/products/linksys.svg";
import planet from "@/assets/products/planet.svg";
import sunde from "@/assets/products/sunde.png";
import techwise from "@/assets/products/techwise.jpg";
const dataProducts = [
	{
		image: cisco,
		title: "CISCO",
		desc: "Global leader in networking, cybersecurity, and IT infrastructure solutions.",
		link: "https://www.cisco.com",
	},
	{
		image: opticlan,
		title: "Opticlan",
		desc: " Indonesian provider of optical networking and IT hardware solutions.",
		link: "https://www.opticlan.id",
	},
	{
		image: aerech,
		title: "Aerech",
		desc: "Chinese manufacturer of optical transceivers and network connectivity products.",
		link: "https://www.aerech.com",
	},
	{
		image: tarluz,
		title: "Tarluz",
		desc: "Global supplier of fiber optic cables and telecom solutions based in Shanghai.",
		link: "https://www.tarluz.com",
	},
	{
		image: phoenix,
		title: "PHOENIX CONTACT",
		desc: "German company specializing in industrial automation and connection technology.",
		link: "http://www.phoenixcontact.com/en-sg/",
	},
	{
		image: apc,
		title: "APC",
		desc: "Power protection and UPS systems brand under Schneider Electric.",
		link: "https://www.apc.com",
	},
	{
		image: "",
		title: "AMP",
		desc: "Australian firm offering wealth management and financial services.",
		link: "https://www.commscope.com",
	},
	{
		image: com,
		title: "6COM",
		desc: "Provider of optical transceivers and fiber networking products.",
		link: "https://www.6comgiga.com",
	},
	{
		image: aruba,
		title: "HP PROCURVE (Aruba)",
		desc: "Enterprise networking solutions brand under HPE, now part of Aruba.",
		link: "https://www.arubanetworking.hpe.com",
	},

	{
		image: atop,
		title: "ATOP",
		desc: "Industrial networking solutions provider for harsh environments.",
		link: "https://www.atoptechnology.com",
	},
	{
		image: "",
		title: "ALLIED TELESYN",
		desc: "Japanese company offering network infrastructure and telecom products",
		link: "https://www.alliedtelesis.com",
	},
	{
		image: eaton,
		title: "EATON",
		desc: "Power management company delivering energy-efficient solutions.",
		link: "https://www.eaton.com",
	},
	{
		image: gigalight,
		title: "GIGALIGHT",
		desc: "Optical interconnect and transceiver solutions for data centers.",
		link: "https://www.gigalight.com",
	},
];
const useDebounce = (value, delay) => {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const handler = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(handler);
	}, [value, delay]);
	return debounced;
};

function OurProducts({ search = "", limit, pagination }) {
	const debouncedSearch = useDebounce(search, 500);
	const [currentPage, setCurrentPage] = useState(1);
	const [paginationGroup, setPaginationGroup] = useState(0);
	const [swipeDirection, setSwipeDirection] = useState("right");

	// const dataLimit = dummyData.slice(0, 4);
	// Hitung responsif jumlah card per halaman
	const getItemsPerPage = () => {
		if (typeof window === "undefined") return 9;
		const width = window.innerWidth;
		// if (width >= 1200) return 9;
		if (limit) {
			if (width >= 992) return 6;
			if (width >= 576) return 4;
			return 3;
		} else {
			if (width >= 992) return 9;
			if (width >= 576) return 4;
			return 3;
		}
	};

	const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

	useEffect(() => {
		const handleResize = () => setItemsPerPage(getItemsPerPage());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const filteredData = useMemo(() => {
		const keyword = debouncedSearch && debouncedSearch.toLowerCase();
		setCurrentPage(1);
		return dataProducts.filter(
			(item) =>
				item.title.toLowerCase().includes(keyword) ||
				item.desc.toLowerCase().includes(keyword)
		);
	}, [debouncedSearch]);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	const displayedData = filteredData.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const maxPaginationShown = 5;
	let startPage = Math.max(1, currentPage - Math.floor(maxPaginationShown / 2));
	let endPage = startPage + maxPaginationShown - 1;

	if (endPage > totalPages) {
		endPage = totalPages;
		startPage = Math.max(1, endPage - maxPaginationShown + 1);
	}

	const handlePageChange = (page) => {
		setSwipeDirection(page > currentPage ? "right" : "left");
		setCurrentPage(page);
	};

	return (
		<div
			className="content-container xl:px-16 lg:px-12 sm:px-9 px-[24px] xl:pb-20 xl:pt-28 lg:pb-16 lg:pt-10 md:pt-12 pb-10 pt-20"
			id="see-products"
		>
			<Title
				subTitle={"	OUR PRODUCTS"}
				title={"See more about "}
				titleBlue={"Our Product"}
			/>
			<div data-aos="zoom-in-up">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentPage}
						initial={{ opacity: 0, x: swipeDirection === "right" ? 100 : -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: swipeDirection === "right" ? -100 : 100 }}
						transition={{ duration: 0.3 }}
						className="h-fit grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-y-12 md:gap-y-8 gap-y-6 xl:gap-x-10 md:gap-x-8 gap-x-6 w-fit max-w-[calc(100%-40px)] xxl:px-[100px]  xl:px-[80px] lg:px-[60px] md:px-[40px] mx-auto"
					>
						{displayedData.map((item, idx) => (
							<div
								key={idx}
								className="card flex flex-col sm:h-auto max-h-[400px] justify-between px-2 pt-2 pb-4 rounded-2xl sm:mx-0 mx-auto h-full"
								style={{
									maxWidth: "350px",
									height: "100%",
									border: "1px solid #E7E7E7",
									boxShadow: "0 3px 8px -1px #3232470d",
								}}
							>
								{item.image ? (
									<div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-6">
										<Image
											src={item.image}
											alt="Card Products"
											className="object-contain w-full h-full"
										/>
									</div>
								) : (
									<div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-6">
										<Image
											src={noImage}
											alt="Card Products"
											className="object-contain h-fit w-auto"
										/>
									</div>
								)}

								<div className="flex flex-col justify-between h-auto gap-4">
									<p className="ff-outfit font-semibold sm:text-[20px] text-[16px] text-dark">
										{item.title}
									</p>
									<p className="ff-poppins sm:text-[16px] text-[12px] text-[#425466]">
										{item.desc}
									</p>
									<a
										href={item.link}
										target="_blank"
										className="flex w-fit cursor-pointer lg:px-5 lg:py-3 md:px-4 md:py-2 px-8 sm:py-3.5 py-3 rounded-[10px] font-semibold text-[12px] text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white"
										rel={"noopener noreferrer"}
										style={{
											transition: ".4s all",
											border: "1px solid #2565AA",
										}}
									>
										SEE MORE
									</a>
								</div>
							</div>
						))}
					</motion.div>
				</AnimatePresence>
				{/* Pagination */}
				{pagination && (
					<div className="flex justify-center items-center xxl:mt-16 xl:mt-12 lg:mt-10 mt-8 gap-2">
						{/* Icon kiri */}
						{currentPage > 1 && (
							<button
								onClick={() => handlePageChange(currentPage - 1)}
								className="flex items-center justify-center lg:p-[12px] sm:p-[12px] p-[8px] bg-[#2565AA] text-white rounded-[6px] hover:bg-[#fff] hover:text-[#2565AA] hover:border transition-all duration-300 cursor-pointer"
							>
								<FaChevronLeft className="text-[inherit] lg:w-[18px] md:w-[16px] sm:w-[14px] w-[16px] h-auto" />
							</button>
						)}

						{/* Halaman 1 */}
						<button
							onClick={() => handlePageChange(1)}
							className={`flex items-center justify-center cursor-pointer lg:w-[68px] lg:h-[68px] md:w-[56px] md:h-[58px] sm:w-[48px] sm:h-[60px] w-[42px] h-[48px] rounded border ff-inter font-bold lg:text-[24px] md:text-[20px] text-[16px] ${
								currentPage === 1
									? "bg-[#2565AA] text-white"
									: "bg-white text-[#2565AA]"
							}`}
						>
							1
						</button>

						{/* Halaman 2 (jika ada) */}
						{totalPages > 1 && (
							<button
								onClick={() => handlePageChange(2)}
								className={`flex items-center justify-center cursor-pointer lg:w-[68px] lg:h-[68px] md:w-[56px] md:h-[58px] sm:w-[48px] sm:h-[60px] w-[42px] h-[48px] rounded border ff-inter font-bold lg:text-[24px] md:text-[20px] text-[16px] ${
									currentPage === 2
										? "bg-[#2565AA] text-white"
										: "bg-white text-[#2565AA]"
								}`}
							>
								2
							</button>
						)}

						{/* Input halaman manual */}
						{totalPages > 3 && (
							<input
								type="number"
								min={1}
								max={totalPages}
								placeholder="..."
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										const value = parseInt(e.target.value, 10);
										if (!isNaN(value) && value >= 1 && value <= totalPages) {
											handlePageChange(value);
										}
										e.target.value = ""; // reset input setelah enter
									}
								}}
								onBlur={(e) => {
									const value = parseInt(e.target.value, 10);
									if (!isNaN(value) && value >= 1 && value <= totalPages) {
										handlePageChange(value);
									}
									e.target.value = ""; //
								}}
								className="input-pagination flex text-center items-center justify-center cursor-pointer lg:w-[68px] lg:h-[68px] md:w-[56px] md:h-[58px] sm:w-[48px] sm:h-[60px] w-[42px] h-[48px] rounded border ff-inter font-bold lg:text-[24px] md:text-[20px] text-[16px] ff-inter  text-[#2565AA] placeholder-[#2565AA] focus:outline-[#2565AA]"
							/>
						)}

						{/* Halaman terakhir */}
						{totalPages > 3 && (
							<button
								onClick={() => handlePageChange(totalPages)}
								className={`flex items-center justify-center cursor-pointer lg:w-[68px] lg:h-[68px] md:w-[56px] md:h-[58px] sm:w-[48px] sm:h-[60px] w-[42px] h-[48px] rounded border ff-inter font-bold lg:text-[24px] md:text-[20px] text-[16px] ${
									currentPage === totalPages
										? "bg-[#2565AA] text-white"
										: "bg-white text-[#2565AA]"
								}`}
							>
								{totalPages}
							</button>
						)}

						{/* Icon kanan */}
						{currentPage < totalPages && (
							<button
								onClick={() => handlePageChange(currentPage + 1)}
								className="flex items-center justify-center lg:p-[12px] sm:p-[12px] p-[8px] bg-[#2565AA] text-white rounded-[6px] hover:bg-[#fff] hover:text-[#2565AA] hover:border transition-all duration-300 cursor-pointer"
							>
								<FaChevronRight className="text-[inherit] lg:w-[18px] md:w-[16px] sm:w-[14px] w-[16px] h-auto" />
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default OurProducts;
