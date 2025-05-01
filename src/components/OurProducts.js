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

const dummyData = Array.from({ length: 100 }, (_, i) => ({
	id: i + 1,
	image: card,
	title: `Mini Bus Terminal Box ${i + 1}`,
	desc: "Write an amazing description in this dedicated card section. Each word counts.",
	link: "#",
}));
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
		return dummyData.filter(
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
		<div className="xl:px-16 lg:px-12 sm:px-9 px-[24px] xl:py-20 lg:py-16 md:py-10 py-[16px]">
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
					className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-y-12 md:gap-y-8 gap-y-6 xl:gap-x-10 md:gap-x-8 gap-x-6 w-fit max-w-[calc(100%-40px)] xxl:px-[100px]  xl:px-[80px] lg:px-[60px] md:px-[40px] mx-auto"
				>
					{displayedData.map((item) => {
						console.log(item);
						return (
							<div key={item.id}>
								<div
									className="card px-2 pt-2 pb-4 rounded-2xl sm:mx-0 mx-auto"
									style={{
										maxWidth: "350px",
										border: "1px solid #E7E7E7",
										boxShadow: "0 3px 8px -1px #3232470d",
									}}
								>
									<Image
										src={item?.image}
										alt="Card Products"
										className="mb-6 rounded-2xl"
									/>
									<div className="flex flex-col gap-4">
										<p className="ff-outfit font-semibold sm:text-[20px] text-[18px] text-dark">
											{/* Mini Terminal Box 2 */}
											{item.title}
										</p>
										<p className="ff-poppins text-[16px] text-[#425466]">
											{/* Write an amazing description in this dedicated card section.
										Each word counts.{" "} */}
											{item.desc}
										</p>
										<button
											className="flex w-fit cursor-pointer lg:px-5 lg:py-3 md:px-4 md:py-2 px-8 sm:py-3.5 py-3 rounded-[10px] font-semibold text-[12px] text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white"
											style={{
												transition: ".4s all",
												border: "1px solid #2565AA",
											}}
										>
											SEE MORE
										</button>
									</div>
								</div>
							</div>
						);
					})}
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
