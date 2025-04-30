/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import line from "@/assets/clients/line.svg";
import bni from "@/assets/clients/bni.png";
import bnsp from "@/assets/clients/bnsp.png";
import bpsdm from "@/assets/clients/bpsdm.png";
import indofarma from "@/assets/clients/indofarma.png";
import jamkrindo from "@/assets/clients/jamkrindo.png";
import kemenkes from "@/assets/clients/kemenkes.png";
import semen from "@/assets/clients/semen.png";
import surveyor from "@/assets/clients/surveyor.png";
import "../styles/clients.scss";
import Title from "./HeroTop/Title";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
const Clients = ({ customText, title, subTitle, titleBlue }) => {
	const listClient = [
		{ id: 1, name: "BNI", image: bni },
		{ id: 2, name: "BSNP", image: bnsp },
		{ id: 3, name: "BPSDM", image: bpsdm },
		{ id: 4, name: "Jamkrindo", image: jamkrindo },
		{ id: 5, name: "Surveyor", image: surveyor },
		{ id: 6, name: "Semen", image: semen },
		{ id: 7, name: "Kemenkes", image: kemenkes },
		{ id: 8, name: "Indofarma", image: indofarma },
		{ id: 9, name: "BNI", image: bni },
		{ id: 10, name: "BSNP", image: bnsp },
		{ id: 11, name: "BPSDM", image: bpsdm },
		{ id: 12, name: "Jamkrindo", image: jamkrindo },
		{ id: 13, name: "Surveyor", image: surveyor },
		{ id: 14, name: "Semen", image: semen },
		{ id: 15, name: "Kemenkes", image: kemenkes },
		{ id: 16, name: "Indofarma", image: indofarma },
		{ id: 17, name: "BNI", image: bni },
		{ id: 18, name: "BSNP", image: bnsp },
		{ id: 19, name: "BPSDM", image: bpsdm },
		{ id: 20, name: "Jamkrindo", image: jamkrindo },
	];
	const [swipeDirection, setSwipeDirection] = useState("right");

	// Hitung responsif jumlah card per halaman
	const getItemsPerPage = useCallback(() => {
		if (typeof window === "undefined") return 4;
		const width = window.innerWidth;
		if (width >= 992) return 12;
		if (width >= 768) return 9;
		if (width >= 576) return 9;
		return 4;
	});

	const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

	const [page, setPage] = useState(0);

	const totalPages = Math.ceil(listClient.length / itemsPerPage);

	const paginatedLogos = useMemo(() => {
		const start = page * itemsPerPage;
		return listClient.slice(start, start + itemsPerPage);
	}, [itemsPerPage, page]);

	useEffect(() => {
		const totalPages = Math.ceil(listClient.length / itemsPerPage);
		if (page >= totalPages) setPage(0); // Reset ke awal jika page invalid
	}, [itemsPerPage]);

	const handleNext = () => {
		if (page < totalPages - 1) {
			setSwipeDirection("right");
			setPage(page + 1);
		}
	};

	const handlePrev = () => {
		if (page > 0) {
			setSwipeDirection("left");
			setPage(page - 1);
		}
	};
	useEffect(() => {
		const handleResize = () => setItemsPerPage(getItemsPerPage());
		handleResize(); // panggil saat mount pertama kali juga
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [getItemsPerPage]);

	return (
		<>
			<div className="flex flex-col items-center mt-20">
				{customText ? (
					<Title title={title} subTitle={subTitle} titleBlue={titleBlue} />
				) : (
					<>
						<h3
							className="ff-outfit text-[24px] text-[#C29D2B] font-bold mb-6"
							style={{
								letterSpacing: "5px",
							}}
						>
							CLIENTS
						</h3>
						<h2 className="ff-poppins md:text-5xl sm:text-[40px] text-[32px] text-dark font-semibold mb-12">
							Let&apos;s See Some of
							<span className="block">
								Our{" "}
								<span className="text-[#2565AA] relative">
									Client Project
									<Image
										src={line}
										alt="line"
										className=" absolute bottom-[-10px] w-[115%] left-0 object-cover"
									/>
								</span>
							</span>
						</h2>
					</>
				)}
			</div>
			<div className="relative  max-w-7xl mx-auto lg:px-20 sm:px-18 px-18 overflow-hidden">
				{page > 0 && (
					<button
						onClick={handlePrev}
						className="cursor-pointer absolute xl:left-0 left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#2565AA] active:bg-[#2565AA] text-[#2565AA] hover:text-white active:text-white duration-300 transition-all rounded-[50%]"
						style={{
							border: "3px solid #2565AA",
						}}
					>
						<MdChevronLeft className="xl:w-[48px] w-[36px] h-auto text-inherit" />
					</button>
				)}
				{page < totalPages - 1 && (
					<button
						onClick={handleNext}
						className="cursor-pointer absolute xl:right-0 right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#2565AA] active:bg-[#2565AA] text-[#2565AA] hover:text-white active:text-white duration-300 transition-all rounded-[50%]"
						style={{
							border: "3px solid #2565AA",
						}}
					>
						<MdChevronRight className="xl:w-[48px] w-[36px] h-auto text-inherit" />
					</button>
				)}
				{/* Card */}
				<div className="relative mb-12 pt-10 -z-10">
					<AnimatePresence mode="wait">
						<motion.div
							key={page}
							initial={{
								x: swipeDirection === "right" ? -100 : 100,
								opacity: 0,
							}}
							animate={{ x: 0, opacity: 1 }}
							exit={{
								x: swipeDirection === "right" ? 100 : -100,
								opacity: 0,
							}}
							transition={{ duration: 0.4 }}
							className={
								"card-container grid " +
								"grid-cols-1 sm:grid-cols-3 lg:grid-cols-4"
							}
						>
							{paginatedLogos.map((data, i) => (
								<div
									key={i}
									className="card w-full h-full bg-white rounded-xl shadow flex items-center justify-center"
								>
									<Image
										src={data.image}
										alt={data.name}
										className="client-image object-contain max-w-[80%] max-h-[80%]"
									/>
								</div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
			{/* Pagination Bullets */}
			<div className="flex justify-center gap-2 sm:mt-6 mt-2 mb-20">
				{Array.from({ length: totalPages }).map((_, i) => (
					<button
						key={i}
						onClick={() => setPage(i)}
						className={`cursor-pointer hover:bg-[#2565AA] active:bg-[#2565AA] rounded-full transition-all duration-300 ease-in-out
        ${page === i ? " bg-[#2565AA] px-3 h-3" : "bg-[#8CA5BF] w-3 h-3"}`}
					/>
				))}
			</div>
		</>
	);
};

export default Clients;
