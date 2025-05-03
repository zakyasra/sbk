/* eslint-disable react-hooks/rules-of-hooks */
// import image from "@/assets/hero-download.jpg";
"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdDownload } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import iconSearch from "@/assets/search-icon.svg";
import Title from "@/components/HeroTop/Title";
import Image from "next/image";

// const dummyData = Array.from({ length: 100 }, (_, i) => ({
// 	id: i + 1,
// 	name: `Visual Pen Fault ${i + 1}`,
// 	size: "10 MB",
// 	downloads: "100+",
// }));
const listDownload = [
	{
		"id": 1,
		"title": "AE-SFP-10G-T.pdf",
		"size": "283.31 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=10YCs_gJCXR5XODo6AveaTHG5rNTZc_qJ",
	},
	{
		"id": 2,
		"title": "AE-SFP-LX.pdf",
		"size": "185.13 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1GKbfoNon04f1vqNyW6XHM3xKpsZKt_bX",
	},
	{
		"id": 3,
		"title": "AE-SFP-TA.pdf",
		"size": "607.01 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1IozX86DySn_3Dxayz1tzTS8BITWuJ1Z5",
	},
	{
		"id": 4,
		"title": "AE-SFP+-SR.pdf",
		"size": "1083.16 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1ND1tQvoHtF29DQLVbVfinB3PfDONqBea",
	},
	{
		"id": 5,
		"title": "AE-SFP-SX.pdf",
		"size": "179.79 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1X7rpqFfjm5sJNpecqMgGPDmzk2K1wJn-",
	},
	{
		"id": 6,
		"title": "AE-SFP28-ER.pdf",
		"size": "176.39 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1X9AHKUhU3soTrllYp_IVtC88JZCoMBWi",
	},
	{
		"id": 7,
		"title": "AE-SFP+-LR.pdf",
		"size": "1085.23 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1meSnvu5Nw-Uh1vi-rRoiPwsIokIlFqgm",
	},
	{
		"id": 8,
		"title": "AE-SFP28-ZR.pdf",
		"size": "475.78 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1oJc1DGI1EjM2k1dSLElfgw61A8wJJqyf",
	},
	{
		"id": 9,
		"title": "AE-QSFPDD-LR4.pdf",
		"size": "873.18 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1CdW_Cw1r742797J_IcopAUyv3CmueE4o",
	},
	{
		"id": 10,
		"title": "AE-QSFP28-ER4-OTU4.pdf",
		"size": "652.95 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1IRysbNL8r8hLSABAaffK_QOWGpIR3Z7-",
	},
	{
		"id": 11,
		"title": "AE-QSFP28-ZR4.pdf",
		"size": "699.84 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1JVmbQCguXrI0hoxnLyw5feu2LGv7hoZ7",
	},
	{
		"id": 12,
		"title": "AE-QSFP28-ZR4+.pdf",
		"size": "636.05 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1MuBOd4YlW6nWPhKJXP0V0ai9MdnQ_Lwk",
	},
	{
		"id": 13,
		"title": "AE-SFP+10G-T.pdf",
		"size": "283.31 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1P8FYRbyY-3WA90_R-8dz8jFMYPj0ZMw5",
	},
	{
		"id": 14,
		"title": "AE-SFP+-ER.pdf",
		"size": "257.57 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1Q_DU9LS0_iZo5Db_c41HDEitm7eZAt-u",
	},
	{
		"id": 15,
		"title": "AE-QSFP28-SR4.pdf",
		"size": "645.94 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1StciVTAZT8xGfzAEpHh3S9aKvepjS31x",
	},
	{
		"id": 16,
		"title": "AE-QSFP28-SR-BD.pdf",
		"size": "766.79 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1Tl7jxcg8j2mogJBEqEEtt_XKccngT87k",
	},
	{
		"id": 17,
		"title": "AE-QSFPDD-DR4.pdf",
		"size": "1348.36 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1WydQhfDKhWNGcAdbkwCp6TNymPw4ZH9I",
	},
	{
		"id": 18,
		"title": "AE-QSFPDD-SR8.pdf",
		"size": "905.01 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1gEdVmTQQ03xUZzYCY_UnsVtvi-BvWfhR",
	},
	{
		"id": 19,
		"title": "FIBER OPTIC TRANSCEIVERS DAC AOC_2024.pdf",
		"size": "5117.88 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1p9dpPZ7VzSQ5FPHK2uGooGGxpFIK0kM6",
	},
	{
		"id": 20,
		"title": "AE-QSFPDD-FR4.pdf",
		"size": "464.12 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1q-GKhqgeJW31XNQN_DiejCUiXs3AROcf",
	},
	{
		"id": 21,
		"title": "AE-QSFP28-LR4-OTU4.pdf",
		"size": "900.11 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1sD4WucjaLDxTsfbvVnSlkqUFQ71FFtqX",
	},
	{
		"id": 22,
		"title": "LOGO150.png",
		"size": "5.75 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1whXulWhEWNIIVn7O8A0QOWs0st3p2jQT",
	},
	{
		"id": 23,
		"title": "AE-QSFP28-LR4.pdf",
		"size": "852.94 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1yGYX3J0TU40wOlMG3IWsfv00uxlufh9C",
	},
	{
		"id": 24,
		"title": "AE-QSFP28-ER4.pdf",
		"size": "649.18 KB",
		"count": "0",
		"link":
			"https://drive.google.com/uc?export=download&id=1yzGhjl8sryHVpbHsBLfGbGq3YU7mKeRM",
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

function page() {
	const [search, setSearch] = useState("");
	const debouncedSearch = useDebounce(search, 500);
	const [currentPage, setCurrentPage] = useState(1);
	const [paginationGroup, setPaginationGroup] = useState(0);
	const [swipeDirection, setSwipeDirection] = useState("right");

	// Hitung responsif jumlah card per halaman
	const getItemsPerPage = () => {
		if (typeof window === "undefined") return 16;
		const width = window.innerWidth;
		if (width >= 1200) return 16;
		if (width >= 768) return 9;
		if (width >= 576) return 6;
		return 4;
	};

	const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

	useEffect(() => {
		const handleResize = () => setItemsPerPage(getItemsPerPage());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const filteredData = useMemo(() => {
		const keyword = debouncedSearch.toLowerCase();
		setCurrentPage(1);
		return listDownload.filter((item) =>
			item.title.toLowerCase().includes(keyword)
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
		<div>
			<div
				className={`ff-poppins xl:text-[64px] lg:text-[56px] md:text-[48px] sm:text-[36px] text-[32px] font-bold text-center hero-section w-full  text-white md:py-20 sm:py-16 py-14 xl:px-28 lg:px-24 md:px-20 sm:px-12 px-6`}
				style={{
					background: `url(/hero-download.jpg)`,
					// height: "90vh",
				}}
			>
				<p>Download</p>
				<p className="responsive-margin-hero">Center</p>
			</div>
			<div className="text-center lg:mt-20 md:mt-16 sm:mt-14 mt-12">
				<Title
					subTitle={"DOWNLOAD"}
					title={"Explore Our"}
					titleBlue={"Available Software"}
				/>
			</div>
			<div className="flex justify-center mb-14">
				<div className="relative overflow-hidden rounded-[10px]">
					<input
						type="text"
						className="input-width ps-5 py-4 pe-24 rounded-[10px] bg-white"
						style={{
							border: "1px solid #ECECEC",
						}}
						placeholder="Search software name ... "
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					{search && (
						<button
							onClick={() => setSearch("")}
							className="cursor-pointer absolute right-22 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
							aria-label="Clear search"
							style={{
								zIndex: "9",
							}}
						>
							<MdClose className="w-[24px] h-[24px]" />
						</button>
					)}
					<div
						className="absolute top-1/2 -translate-y-1/2"
						style={{ right: 0 }}
					>
						{/* <FaSearch className="w-[24px] h-[24px] text-white" /> */}
						<Image
							src={iconSearch}
							alt="icon seearch"
							// className="w-[56px] h-auto"
						/>
					</div>
				</div>
			</div>
			{/* Card grid */}
			<AnimatePresence mode="wait">
				<motion.div
					key={currentPage}
					initial={{ opacity: 0, x: swipeDirection === "right" ? 100 : -100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: swipeDirection === "right" ? -100 : 100 }}
					transition={{ duration: 0.3 }}
					className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 xl:px-16 lg:px-14 md:px-12 sm:px-10 px-9"
				>
					{displayedData.map((data) => (
						<div
							key={data.id}
							className="card-download ps-6 pr-4 py-4"
							style={{
								border: "1px solid #7A7A9D",
								borderRadius: "16px",
							}}
						>
							<div>
								<div className="flex items-start justify-between gap-2">
									<div className="ff-inter">
										<p className="text-[#7A7A9D] sm:text-[12px] text-[10px] font-semibold mb-1">
											Jenis Software
										</p>
										<p className="text-[#27272E] lg:text-[20px] md:text-[18px] sm:text-[16px] font-semibold mb-2.5">
											{data.title}
										</p>
									</div>
									<a h key={data.id} href={data.link} download>
										<div className="cursor-pointer duration-300 transition-all rounded-[50%] bg-[#2565AA] hover:bg-[#184b83] active:bg-[#184b83] text-white p-2.5">
											<MdDownload
												style={{
													width: "26px",
													height: "26px",
													color: "white",
												}}
											/>
										</div>
									</a>
								</div>
								<div className="flex sm:items-center items-start sm:flex-row flex-col gap-2.5">
									<div className="size bg-[#DEFFEE] text-[#66CB9F] font-bold text-[10px] rounded-[6px] px-2 py-1 ">
										{data.size}
									</div>
									<p className="text-[#7A7A9D] font-medium text-[10px]">
										Downloaded by {data.count}
									</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</AnimatePresence>

			{/* <div className="mt-16 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 px-16">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((data) => (
					<div
						key={data}
						className="card-download ps-6 pr-4 py-4"
						style={{
							border: "1px solid #7A7A9D",
							borderRadius: "16px",
						}}
					>
						<div>
							<div className="flex items-start justify-between gap-2">
								<div className="ff-inter">
									<p className="text-[#7A7A9D] sm:text-[12px] text-[10px] font-semibold mb-1">
										Jenis Software
									</p>
									<p className="text-[#27272E] lg:text-[20px] md:text-[18px] sm:text-[16px] font-semibold mb-2.5">
										Visual Pen Fault
									</p>
								</div>
								<div className="rounded-[50%] bg-[#2565AA] p-2.5">
									<MdDownload
										style={{
											width: "26px",
											height: "26px",
											color: "white",
										}}
									/>
								</div>
							</div>
							<div className="flex sm:items-center items-start sm:flex-row flex-col gap-2.5">
								<div className="size bg-[#DEFFEE] text-[#66CB9F] font-bold text-[10px] rounded-[6px] px-2 py-1 ">
									10 MB
								</div>
								<p className="text-[#7A7A9D] font-medium text-[10px]">
									Downloaded by 100+
								</p>
							</div>
						</div>
					</div>
				))}
			</div> */}
			{/* Pagination */}
			<div className="flex justify-center items-center mt-8 gap-2">
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
		</div>
	);
}

export default page;
