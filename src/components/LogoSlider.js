"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const logos = [
	"/logo1.png",
	"/logo2.png",
	"/logo3.png",
	"/logo4.png",
	"/logo5.png",
	"/logo6.png",
	"/logo7.png",
	"/logo8.png",
	"/logo9.png",
	"/logo10.png",
	"/logo11.png",
	"/logo12.png",
	"/logo13.png",
	"/logo14.png",
	"/logo15.png",
	"/logo16.png",
	"/logo17.png",
	"/logo18.png",
	"/logo19.png",
];

const LogoSlider = () => {
	const [page, setPage] = useState(0);
	const logosPerPage = 12;

	const totalPages = Math.ceil(logos.length / logosPerPage);

	const paginatedLogos = useMemo(() => {
		const start = page * logosPerPage;
		return logos.slice(start, start + logosPerPage);
	}, [page]);

	const handleNext = () => {
		if (page < totalPages - 1) setPage(page + 1);
	};

	const handlePrev = () => {
		if (page > 0) setPage(page - 1);
	};

	const gridClasses =
		"grid gap-4 " +
		"grid-cols-1 sm:grid-cols-2 md:grid-cols-4 " +
		"grid-rows-6 md:grid-rows-3";

	return (
		<div className="relative px-4 max-w-7xl mx-auto py-10 overflow-hidden">
			{/* Navigation Buttons */}
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

			{/* Card Grid */}
			<div className="relative min-h-[400px]">
				<AnimatePresence mode="wait">
					<motion.div
						key={page}
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -100, opacity: 0 }}
						transition={{ duration: 0.4 }}
						className={gridClasses}
					>
						{paginatedLogos.map((logo, i) => (
							<div
								key={i}
								className="bg-white rounded-lg p-4 flex items-center justify-center shadow"
							>
								<Image
									loading="eager"
									src={logo}
									alt={`logo-${i}`}
									width={120}
									height={60}
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
	);
};

export default LogoSlider;
