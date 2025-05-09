/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdDownload } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import iconSearch from "@/assets/search-icon.svg";
import Title from "@/components/HeroTop/Title";
import Image from "next/image";

const listDownload = {
	"aerech": [
		{
			"id": 1,
			"title": "AE-SFP-10G-T.pdf",
			"size": "283.31 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=10YCs_gJCXR5XODo6AveaTHG5rNTZc_qJ",
		},
		{
			"id": 2,
			"title": "AE-SFP-LX.pdf",
			"size": "185.13 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1GKbfoNon04f1vqNyW6XHM3xKpsZKt_bX",
		},
		{
			"id": 3,
			"title": "AE-SFP-TA.pdf",
			"size": "607.01 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1IozX86DySn_3Dxayz1tzTS8BITWuJ1Z5",
		},
		{
			"id": 4,
			"title": "AE-SFP+-SR.pdf",
			"size": "1083.16 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1ND1tQvoHtF29DQLVbVfinB3PfDONqBea",
		},
		{
			"id": 5,
			"title": "AE-SFP-SX.pdf",
			"size": "179.79 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1X7rpqFfjm5sJNpecqMgGPDmzk2K1wJn-",
		},
		{
			"id": 6,
			"title": "AE-SFP28-ER.pdf",
			"size": "176.39 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1X9AHKUhU3soTrllYp_IVtC88JZCoMBWi",
		},
		{
			"id": 7,
			"title": "AE-SFP+-LR.pdf",
			"size": "1085.23 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1meSnvu5Nw-Uh1vi-rRoiPwsIokIlFqgm",
		},
		{
			"id": 8,
			"title": "AE-SFP28-ZR.pdf",
			"size": "475.78 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1oJc1DGI1EjM2k1dSLElfgw61A8wJJqyf",
		},
		{
			"id": 9,
			"title": "AE-QSFPDD-LR4.pdf",
			"size": "873.18 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1CdW_Cw1r742797J_IcopAUyv3CmueE4o",
		},
		{
			"id": 10,
			"title": "AE-QSFP28-ER4-OTU4.pdf",
			"size": "652.95 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1IRysbNL8r8hLSABAaffK_QOWGpIR3Z7-",
		},
		{
			"id": 11,
			"title": "AE-QSFP28-ZR4.pdf",
			"size": "699.84 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1JVmbQCguXrI0hoxnLyw5feu2LGv7hoZ7",
		},
		{
			"id": 12,
			"title": "AE-QSFP28-ZR4+.pdf",
			"size": "636.05 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1MuBOd4YlW6nWPhKJXP0V0ai9MdnQ_Lwk",
		},
		{
			"id": 13,
			"title": "AE-SFP+10G-T.pdf",
			"size": "283.31 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1P8FYRbyY-3WA90_R-8dz8jFMYPj0ZMw5",
		},
		{
			"id": 14,
			"title": "AE-SFP+-ER.pdf",
			"size": "257.57 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1Q_DU9LS0_iZo5Db_c41HDEitm7eZAt-u",
		},
		{
			"id": 15,
			"title": "AE-QSFP28-SR4.pdf",
			"size": "645.94 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1StciVTAZT8xGfzAEpHh3S9aKvepjS31x",
		},
		{
			"id": 16,
			"title": "AE-QSFP28-SR-BD.pdf",
			"size": "766.79 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1Tl7jxcg8j2mogJBEqEEtt_XKccngT87k",
		},
		{
			"id": 17,
			"title": "AE-QSFPDD-DR4.pdf",
			"size": "1348.36 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1WydQhfDKhWNGcAdbkwCp6TNymPw4ZH9I",
		},
		{
			"id": 18,
			"title": "AE-QSFPDD-SR8.pdf",
			"size": "905.01 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1gEdVmTQQ03xUZzYCY_UnsVtvi-BvWfhR",
		},
		{
			"id": 19,
			"title": "AE-QSFPDD-FR4.pdf",
			"size": "464.12 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1q-GKhqgeJW31XNQN_DiejCUiXs3AROcf",
		},
		{
			"id": 20,
			"title": "AE-QSFP28-LR4-OTU4.pdf",
			"size": "900.11 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1sD4WucjaLDxTsfbvVnSlkqUFQ71FFtqX",
		},
		{
			"id": 21,
			"title": "AE-QSFP28-LR4.pdf",
			"size": "852.94 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1yGYX3J0TU40wOlMG3IWsfv00uxlufh9C",
		},
		{
			"id": 22,
			"title": "AE-QSFP28-ER4.pdf",
			"size": "649.18 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1yzGhjl8sryHVpbHsBLfGbGq3YU7mKeRM",
		},
	],
	"opticlan": [
		{
			"id": 1,
			"title": "OPTICLAN SINGLEMODE OS2.jpg",
			"size": "2175.58 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1I-D9OdwKKqWyW9yJPVWK26FAD7rZGhoY",
		},
		{
			"id": 2,
			"title": "VISUAL FAULT LOCATOR.jpg",
			"size": "1416.73 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1Jwi1V9QzPj-cS8VkupUTDEbjootfRHzP",
		},
		{
			"id": 3,
			"title": "OPTICLAN PLC SPLITTER 2 OR 4 OR 8 OR 16 CORES.jpg",
			"size": "589.23 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1QztcX5dd46dF9jHrafRB7bANy7udjH-M",
		},
		{
			"id": 4,
			"title": "OPTICLAN MINI TERMINAL BOX 4 OR 8 PORTS.jpg",
			"size": "1904.49 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1-q3rT7QeHjqBrBonWTnglMO_jNJOD1fM",
		},
		{
			"id": 5,
			"title": "OPTICLAN MULTIMODE 0M3.jpg",
			"size": "2277.88 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=10VqyllC9l4oGHNHEeg-yxERVSfSBJ9yA",
		},
		{
			"id": 6,
			"title": "OPTICLAN OPTIC TERMINAL BOARD 24 OR 48 CORE 1U.jpg",
			"size": "2512.06 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=12vYvQ1CtH97SiQ_x0d9gbWXF67m6gfVn",
		},
		{
			"id": 7,
			"title": "OPTICLAN MULTIMODE OM4.jpg",
			"size": "1899.64 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=186ys7JU7-p68n2kMdRDURY7GIk_ErgIW",
		},
		{
			"id": 8,
			"title": "OPTICLAN JOINT CLOSURE 96 CORE.jpg",
			"size": "2143.29 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1hgHGfq2z5MAWQAarJMLgo4S-RJg_hddM",
		},
		{
			"id": 9,
			"title": "OPTICLAN MULTIMODE OM2.jpg",
			"size": "2183.66 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1lCqMBzgHvHDH7aIQviwZzAiBwRUvfOsI",
		},
		{
			"id": 10,
			"title": "OPTICLAN MINI TERMINAL BOX 2 OR 4 PORTS.jpg",
			"size": "2023.29 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1oAQcMZGWtRkZtXqBQnMLUCq6KMfZfypH",
		},
	],
	"tarluz": [
		{
			"id": 1,
			"title": "FIBER OPTIC TRANSCEIVERS DAC AOC_2024.pdf",
			"size": "5117.88 KB",

			"link":
				"https://drive.google.com/uc?export=download&id=1p9dpPZ7VzSQ5FPHK2uGooGGxpFIK0kM6",
		},
	],
};

const useDebounce = (value, delay) => {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const handler = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(handler);
	}, [value, delay]);
	return debounced;
};

export default function page() {
	// Params Settings
	const params = useParams();
	const brand = params.brand; // sekarang ini valid
	const rawData = listDownload[brand.toLowerCase()];

	if (!rawData) return notFound();

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
		return rawData.filter((item) => item.title.toLowerCase().includes(keyword));
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
		<>
			<div
				className="hero-section"
				style={{
					background: `url(/hero-download.jpg)`,
				}}
			>
				<div
					className={` ff-poppins xl:text-[64px] lg:text-[56px] md:text-[48px] sm:text-[36px] text-[32px] font-bold text-center hero-section w-full  text-white md:py-20 sm:py-16 py-14 xl:px-28 lg:px-24 md:px-20 sm:px-12 px-6`}
					data-aos="fade-down"
					data-aos-duration="400"
					data-aos-offset="50"
				>
					<p>Download</p>
					<p className="responsive-margin-hero">Center</p>
				</div>
			</div>
			<div className="content-container">
				<div className="text-center lg:mt-20 md:mt-16 sm:mt-14 mt-12">
					<Title
						subTitle={"DOWNLOAD"}
						title={"Explore Our"}
						titleBlue={"Available Software"}
					/>
				</div>
				<div className="flex justify-center mb-14">
					<div
						className="relative overflow-hidden rounded-[10px]"
						data-aos="zoom-in"
						data-aos-duration="700"
					>
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
				<div>
					<AnimatePresence mode="wait">
						<motion.div
							key={currentPage}
							initial={{
								opacity: 0,
								x: swipeDirection === "right" ? 100 : -100,
							}}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: swipeDirection === "right" ? -100 : 100 }}
							transition={{ duration: 0.3 }}
							className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 xl:px-16 lg:px-14 md:px-12 sm:px-10 px-9"
						>
							{displayedData.map((data) => {
								let timer = 100;
								timer = timer + 100;
								return (
									<div
										key={data.id}
										className="card-download ps-6 pr-4 py-4"
										style={{
											border: "1px solid #7A7A9D",
											borderRadius: "16px",
										}}
										data-aos="fade-down"
										data-aos-duration={timer}
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
												<a key={data.id} href={data.link} download>
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
											</div>
										</div>
									</div>
								);
							})}
						</motion.div>
					</AnimatePresence>

					{/* Pagination */}
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
				</div>
			</div>
		</>
	);
}
