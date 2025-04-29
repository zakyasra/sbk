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

const dummyData = Array.from({ length: 100 }, (_, i) => ({
	id: i + 1,
	name: `Visual Pen Fault ${i + 1}`,
	size: "10 MB",
	downloads: "100+",
}));

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
		return dummyData.filter(
			(item) =>
				item.name.toLowerCase().includes(keyword) ||
				item.id.toString().includes(keyword)
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
					className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 px-16"
				>
					{displayedData.map((item) => (
						<div
							key={item.id}
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
											{item.name}
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
										{item.size}
									</div>
									<p className="text-[#7A7A9D] font-medium text-[10px]">
										Downloaded by {item.downloads}
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
