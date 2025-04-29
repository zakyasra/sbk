"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
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
		{ id: 5, name: "Surveyor", image: surveyor },
		{ id: 6, name: "Semen", image: semen },
		{ id: 7, name: "Kemenkes", image: kemenkes },
		{ id: 8, name: "Indofarma", image: indofarma },
		{ id: 9, name: "BNI", image: bni },
		{ id: 10, name: "BSNP", image: bnsp },
		{ id: 11, name: "BPSDM", image: bpsdm },
		{ id: 12, name: "Jamkrindo", image: jamkrindo },
	];
	const [swipeDirection, setSwipeDirection] = useState("right");

	const [page, setPage] = useState(0);
	const logosPerPage = 12;

	const totalPages = Math.ceil(listClient.length / logosPerPage);

	const paginatedLogos = useMemo(() => {
		const start = page * logosPerPage;
		return listClient.slice(start, start + logosPerPage);
	}, [page]);

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
	const gridClasses =
		"grid gap-4 " +
		"grid-cols-1 sm:grid-cols-2 md:grid-cols-4 " +
		"grid-rows-6 md:grid-rows-3";

	return (
		<div className="mb-24">
			<div className="flex flex-col items-center md:mb-12">
				{customText ? (
					<Title title={title} subTitle={subTitle} titleBlue={titleBlue} />
				) : (
					<>
						<h3
							className="ff-outfit md:text-[24px] sm:text-[20px] text-[16px] text-[#C29D2B] font-bold mb-6"
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
			<div className="relative  max-w-7xl mx-auto lg:px-20 md:px-12 sm:px-9 px-6 overflow-hidden">
				{page > 0 && (
					<button
						onClick={handlePrev}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
					>
						<MdChevronLeft className="w-5 h-5" />
					</button>
				)}
				{page < totalPages - 1 && (
					<button
						onClick={handleNext}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
					>
						<MdChevronRight className="w-5 h-5" />
					</button>
				)}
				{/* Card */}
				<div className="relative min-h-[400px]">
					<AnimatePresence mode="popLayout">
						<motion.div
							key={page}
							initial={{
								x: swipeDirection === "right" ? -100 : 100,
								opacity: 0,
							}}
							animate={{ x: 0, opacity: 1 }}
							exit={{
								x: swipeDirection === "right" ? -100 : 100,
								opacity: 0,
							}}
							transition={{ duration: 0.4 }}
							className={gridClasses}
						>
							{paginatedLogos.map((data, i) => (
								<div
									key={data.id}
									className="card w-full h-full bg-white rounded-xl shadow flex items-center justify-center"
								>
									<Image
										src={data.image}
										alt={data.name}
										width={120}
										height={120}
										className="object-contain max-w-[80%] max-h-[80%]"
									/>
								</div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>
				{/* Pagination Bullets */}
				<div className="flex justify-center gap-2 mt-6">
					{Array.from({ length: totalPages }).map((_, i) => (
						<button
							key={i}
							onClick={() => setPage(i)}
							className={`rounded-full transition-all duration-300 ease-in-out
        ${page === i ? "bg-red-600 px-3 py-1" : "bg-gray-300 w-3 h-3"}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Clients;
