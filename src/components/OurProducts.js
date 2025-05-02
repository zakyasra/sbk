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
import linksys from "@/assets/products/linksys.svg";
import phoenix from "@/assets/products/phoenix.ico";
import planet from "@/assets/products/planet.svg";
import sunde from "@/assets/products/sunde.png";
import techwise from "@/assets/products/techwise.jpg";
import noImage from "@/assets/products/no-image.png";
import Link from "next/link";
// const dummyData = Array.from({ length: 100 }, (_, i) => ({
// 	id: i + 1,
// 	image: card,
// 	title: `Mini Bus Terminal Box ${i + 1}`,
// 	desc: "Write an amazing description in this dedicated card section. Each word counts.",
// 	link: "#",
// }));
const dataProducts = [
	{
		image: techwise,
		title: "TECHWISE",
		desc: "IT solutions provider offering consulting, system integration, and support services.",
		link: "https://www.https://www.techwisetech.com",
	},
	{
		image: cisco,
		title: "CISCO",
		desc: "Global leader in networking, cybersecurity, and IT infrastructure solutions.",
		link: "https://www.cisco.com",
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
		link: "https://www.amp.com",
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
		image: planet,
		title: "PLANET",
		desc: "Satellite imaging company delivering daily Earth observation data.",
		link: "https://www.planet.com",
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
		link: "https://www.alliedtelesyn.com",
	},
	{
		image: linksys,
		title: "LINKSYS",
		desc: "Consumer and small business networking devices, known for Wi-Fi routers.",
		link: "https://www.linksys.com",
	},
	{
		image: eaton,
		title: "EATON",
		desc: "Power management company delivering energy-efficient solutions.",
		link: "https://www.eaton.com",
	},
	{
		image: "",
		title: "DYNAMIC POWER",
		desc: "Chinese manufacturer of UPS and energy storage systems.",
		link: "https://www.dpc.com.cn",
	},
	{
		image: gigalight,
		title: "GIGALIGHT",
		desc: "Optical interconnect and transceiver solutions for data centers.",
		link: "https://www.gigalight.com",
	},
	{
		image: sunde,
		title: "SUNDE THIN CLIENT H4",
		desc: "Thin client computing solutions for cost-effective shared access.",
		link: "https://www.sundeindonesia.com",
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
	const startPage = paginationGroup * maxPaginationShown + 1;
	const endPage = Math.min(startPage + maxPaginationShown - 1, totalPages);
	const pageNumbers = Array.from(
		{ length: endPage - startPage + 1 },
		(_, i) => startPage + i
	);

	const handlePageChange = (page) => {
		setSwipeDirection(page > currentPage ? "right" : "left");
		setCurrentPage(page);
	};

	const handleNextGroup = () => {
		if ((paginationGroup + 1) * maxPaginationShown < totalPages) {
			setPaginationGroup(paginationGroup + 1);
		}
	};

	const handlePrevGroup = () => {
		if (paginationGroup > 0) {
			setPaginationGroup(paginationGroup - 1);
		}
	};

	return (
		<div
			className="xl:px-16 lg:px-12 sm:px-9 px-[24px] xl:py-20 lg:py-16 md:py-10 py-[16px]"
			id="see-products"
		>
			<Title
				subTitle={"	OUR PRODUCTS"}
				title={"See more about "}
				titleBlue={"Our Product"}
			/>
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
							className="card flex flex-col justify-between px-2 pt-2 pb-4 rounded-2xl sm:mx-0 mx-auto h-full"
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
										className="object-contain w-full h-full"
									/>
								</div>
							)}

							<div className="flex flex-col justify-between h-full gap-4 max-h-[200px]">
								<p className="ff-outfit font-semibold sm:text-[20px] text-[18px] text-dark">
									{item.title}
								</p>
								<p className="ff-poppins text-[16px] text-[#425466]">
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
					{paginationGroup > 0 && (
						<button
							onClick={handlePrevGroup}
							className="h-[64px] w-[64px] flex items-center justify-center p-[20px] bg-[#2565AA] text-white rounded-[6px] hover:bg-[#fff] hover:text-[#2565AA] hover:border transition-all duration-300 cursor-pointer"
						>
							<FaChevronLeft className="w-[24px] h-[24px] " />
						</button>
					)}

					{pageNumbers.map((num) => (
						<button
							key={num}
							onClick={() => handlePageChange(num)}
							className={`h-[64px] w-[64px] flex items-center justify-center cursor-pointer p-[20px] rounded border ff-inter font-extrabold text-[18px] hover:bg-[#2565AA] hover:text-[#FFF] transition-all duration-300 ${
								num === currentPage
									? "bg-[#2565AA] text-white"
									: "bg-white text-[#2565AA]"
							}`}
						>
							{num}
						</button>
					))}

					{(paginationGroup + 1) * maxPaginationShown < totalPages && (
						<button
							onClick={handleNextGroup}
							className="h-[64px] w-[64px] flex items-center justify-center p-[20px] bg-[#2565AA] text-white rounded-[6px] hover:bg-[#fff] hover:text-[#2565AA] hover:border transition-all duration-300 cursor-pointer"
						>
							<FaChevronRight className="w-[24px] h-[24px] " />
						</button>
					)}
				</div>
			)}
		</div>
	);
}

export default OurProducts;
