/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
// import line from "@/assets/clients/line.svg";
import lia from "@/assets/clientPerusahaan/YAYASAN-LIA.png";
import kodeco from "@/assets/clientPerusahaan/logo-kodeco.png";
import comtech from "@/assets/clientPerusahaan/COMTECH.jpg";
import jayaNetwork from "@/assets/clientPerusahaan/jaya-network.png";
import metalogix from "@/assets/clientPerusahaan/METALOGIX-INFOLINK-PERSANA.png";
import altros from "@/assets/clientPerusahaan/PT.-ALTROS-TEKNOLOGI.png";
import dimension from "@/assets/clientPerusahaan/PT.-DIMENSION-DATA-INDONESIA.png";
import multipolar from "@/assets/clientPerusahaan/PT.-MULTIPOLAR-TECHNOLOGY.webp";
import pertamina from "@/assets/clientPerusahaan/PT.-PERTAMINA-HULU-ENERGI-W.webp";
import primatech from "@/assets/clientPerusahaan/PT.-PRIMATECH.png";
import schenker from "@/assets/clientPerusahaan/PT.-SCHENKER-PETROLOG-UTAMA.jpeg";
import siwali from "@/assets/clientPerusahaan/PT.-SIWALI-SWANTIKA.png";
import surya from "@/assets/clientPerusahaan/surya-prima-sakti.svg";
import anekaBogor from "@/assets/clientPerusahaan/PT-ANEKA-TAMBANG-PONGKOR-BOGOR.png";
import anekaManado from "@/assets/clientPerusahaan/PT-ANEKA-TAMBANG-PONGKOR-MANADO.png";
import darya from "@/assets/clientPerusahaan/PT-DARYA-VARIA-LABORATORIA.svg";
import datanet from "@/assets/clientPerusahaan/PT-DATANET.jpg";
import kondur from "@/assets/clientPerusahaan/PT-KONDUR-PETROLEUM-S.jpg";
import mastersystem from "@/assets/clientPerusahaan/PT-MASTERSYSTEM.jpg";
import matahari from "@/assets/clientPerusahaan/PT-MATAHARI-PUTRA-PRIMA.png";
import metropolitan from "@/assets/clientPerusahaan/PT-METROPOLITAN-REATAILMART.png";
import microreksa from "@/assets/clientPerusahaan/PT-MICROREKSA.png";
import nec from "@/assets/clientPerusahaan/PT-NEC-NUSANTARA.svg";
import puninar from "@/assets/clientPerusahaan/PT-PUNINAR-JAYA.png";
import realta from "@/assets/clientPerusahaan/PT-REALTA.png";
import segara from "@/assets/clientPerusahaan/PT-SEGARA-PACIFIC-MAJU.jpg";
import sigma from "@/assets/clientPerusahaan/PT-SIGMA-CIPTA-UTAMA.jpg";
import suryaToto from "@/assets/clientPerusahaan/PT-SURYA-TOTO-INDONESIA.jpeg";
import tiara from "@/assets/clientPerusahaan/PT-TIARA-MARGA-TRAKINDO.svg";
import traktor from "@/assets/clientPerusahaan/PT-TRAKTOR-NUSANTARA.png";
import uninet from "@/assets/clientPerusahaan/PT-UNINET-MEDIA-SAKTI.svg";
import valbury from "@/assets/clientPerusahaan/valbury.webp";
import mercu from "@/assets/clientPerusahaan/UNIVERSITAS-MERCU-BUANA.png";
import pelita from "@/assets/clientPerusahaan/UNIVERSITAS-PELITA-HARAPAN.png";
import sumatera from "@/assets/clientPerusahaan/UNIVERSITAS-SUMATERA-UTARA.png";
import noImage from "@/assets/products/no-image.png";

import "../styles/clients.scss";
import Title from "./HeroTop/Title";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
const Clients = ({ customText, title, subTitle, titleBlue }) => {
	const listClient = [
		{
			id: 1,
			name: "PT Best Indo",
			image: noImage,
			status: "noImage",
			link: "https://www.instagram.com/bnbzipper_id/?hl=en",
		},
		{
			id: 2,
			name: "PT Tiara Marga Trakindo",
			image: tiara,
			status: "",
			link: "https://www.tiaramarga.co.id/",
		},
		{
			id: 3,
			name: "PT Motorolla Indonesia",
			image: noImage,
			status: "noImage",
			link: "https://www.instagram.com/motorolaid/?hl=en",
		},
		{
			id: 4,
			name: "PT KODECO",
			image: kodeco,
			status: "",
			link: "https://www.kodeco.com/",
		},
		{
			id: 5,
			name: "PT Timor Distributor Nasional",
			image: noImage,
			status: "noImage",
			link: "",
		},
		{ id: 6, name: "PT Kondur Petroleum S.A", image: kondur, link: "" },
		{
			id: 7,
			name: "PT Aneka Tambang Pongkor Bogor",
			image: anekaBogor,
			status: "",
			link: "https://antam.com/id/products/emas",
		},
		{
			id: 8,
			name: "PT Aneka Tambang Pongkor Manado",
			image: anekaManado,
			status: "",
			link: "https://antam.com/id/products/emas",
		},
		{
			id: 9,
			name: "PT Trigaris Sportindo (Adidas)",
			image: noImage,
			status: "noImage",
			link: "https://companieshouse.id/trigaris-sportindo",
		},
		{
			id: 10,
			name: "PT Coats Rejo Indonesia",
			image: noImage,
			status: "noImage",
			link: "https://id.linkedin.com/company/coats-rejo-indonesia-pt",
		},
		{
			id: 11,
			name: "PT Alan Dick Indonesia",
			image: noImage,
			status: "noImage",
			link: "https://id.linkedin.com/company/alandick-indonesia-pt",
		},
		{
			id: 12,
			name: "PT Metropolitan Reatailmart",
			image: metropolitan,
			status: "",
			link: "https://metroindonesia.com/",
		},
		{
			id: 13,
			name: "PT Juloi Coal",
			image: noImage,
			status: "noImage",
			link: "https://id203659-pt-juloi-coal.contact.page/",
		},
		{
			id: 14,
			name: "PT Zeneca Agri",
			image: noImage,
			status: "noImage",
			link: "https://id781707-zeneca-agri-products-indonesia-pt.contact.page/",
		},
		{
			id: 15,
			name: "PT NEC Nusantara",
			image: nec,
			status: "",
			link: "https://id.nec.com/",
		},
		{
			id: 16,
			name: "PT Gitaswara Indonesia",
			image: noImage,
			status: "noImage",
			link: "https://www.dnb.com/business-directory/company-profiles.pt_gitaswara_indonesia.fd4b3b64aa38329b80cd845255f65003.html",
		},
		{
			id: 17,
			name: "PT Sigma Cipta Utama",
			image: sigma,
			status: "",
			link: "https://id.linkedin.com/company/pt-sigma-cipta-utama",
		},
		{
			id: 18,
			name: "PT Traktor Nusantara",
			image: traktor,
			status: "",
			link: "https://traknus.co.id/",
		},
		{
			id: 19,
			name: "PT Uninet Media Sakti",
			image: uninet,
			status: "",
			link: "https://uninet.net.id/",
		},
		{
			id: 20,
			name: "PT Tiara Permata Sari",
			image: noImage,
			status: "noImage",
			link: "https://id4868803-pt-tiara-permata-sari.contact.page/",
		},
		{
			id: 21,
			name: "PT Mastersystem",
			image: mastersystem,
			status: "",
			link: "https://www.mastersystem.co.id/",
		},
		{
			id: 22,
			name: "PT Matahari Putra Prima",
			image: matahari,
			status: "",
			link: "https://www.mppa.co.id/",
		},
		{
			id: 23,
			name: "Universitas Mercu Buana",
			image: mercu,
			status: "",
			link: "https://mercubuana.ac.id/",
		},
		{
			id: 24,
			name: "Yayasan Lia",
			image: lia,

			status: "",
			link: "https://lia.or.id/",
		},
		{
			id: 25,
			name: "Universitas Sumatera Utara",
			image: sumatera,
			status: "",
			link: "https://www.usu.ac.id/",
		},
		{
			id: 26,
			name: "PT ITCI Kartika Utama",
			image: noImage,
			status: "noImage",
			link: "https://www.instagram.com/explore/locations/292401390771310/pt-itci-kartika-utama/",
		},
		{
			id: 27,
			name: "PT Reuters Indonesia",
			image: noImage,
			status: "noImage",
			link: "https://reuters.co.id/",
		},
		{
			id: 28,
			name: "PT Tectura Indonesia",
			image: noImage,
			status: "noImage",
			link: "https://www.tectura.com/",
		},
		{
			id: 29,
			name: "PT Rhodia Indolatex",
			image: noImage,
			status: "noImage",
			link: "https://www.profilusaha.com/rhodia-indolatex-pt",
		},
		{
			id: 30,
			name: "PT Timera Mitra Selaras",
			image: noImage,
			status: "noImage",
			link: "https://www.profilusaha.com/timera-mitra-selaras-pt",
		},
		{
			id: 31,
			name: "PT Segara Pacific Maju",
			image: segara,
			status: "",
			link: "https://www.esegara.com/",
		},
		{
			id: 32,
			name: "PT Valbury Asia Futures",
			image: valbury,
			status: "",
			link: "https://valbury.co.id/",
		},
		{
			id: 33,
			name: "PT Puninar Jaya",
			image: puninar,
			customSize: "w-[190px] h-[190px]",
			status: "",
			link: "https://id.linkedin.com/company/pt.puninar-jaya",
		},
		{
			id: 34,
			name: "PT Realta",
			image: realta,
			status: "",
			link: "https://www.realta.co.id/",
		},
		{
			id: 35,
			name: "PT Datanet",
			image: datanet,
			status: "",
			link: "https://www.datanet.co.id/",
		},
		{
			id: 36,
			name: "PT Microreksa",
			image: microreksa,
			status: "",
			link: "http://www.microreksa.com/",
		},
		{
			id: 37,
			name: "Comtech",
			image: comtech,

			status: "",
			link: "https://comtech.com/",
		},
		{
			id: 38,
			name: "PT Dewataagung Wibawa",
			image: noImage,
			status: "noImage",
			link: "http://www.www.plazabali.co.id/",
		},
		{
			id: 39,
			name: "PT Tri Indonusa Surya",
			image: noImage,
			status: "noImage",
			link: "http://tri-indonusa.com/",
		},
		{
			id: 40,
			name: "PT Skill Jakarta",
			image: noImage,
			status: "noImage",
			link: "",
		},
		{
			id: 41,
			name: "PT Skill Bandung",
			image: noImage,
			status: "noImage",
			link: "",
		},
		{ id: 42, name: "PT Skill", image: noImage, status: "noImage", link: "" },
		{
			id: 43,
			name: "PT Skill Surabaya",
			image: noImage,
			status: "noImage",
			link: "",
		},
		{
			id: 44,
			name: "PT Metalogix Infolink Persana",
			image: metalogix,
			status: "",
			link: "https://www.xlinksoftware.com/about/",
		},
		{
			id: 45,
			name: "PT Rasio Chemicals",
			image: noImage,
			status: "noImage",
			link: "",
		},
		{
			id: 46,
			name: "PT Darya Varia Laboratoria",
			image: darya,
			status: "",
			link: "https://www.darya-varia.com/",
		},
		{
			id: 47,
			name: "PT Pusat Produksi Media",
			image: noImage,
			status: "noImage",
			link: "",
		},
		{
			id: 48,
			name: "PT Surya Toto Indonesia",
			image: suryaToto,
			status: "",
			link: "https://www.investor.toto.co.id/",
		},
		{
			id: 49,
			name: "PT Primatech",
			image: primatech,
			status: "",
			link: "https://primatech.id/",
		},
		{
			id: 50,
			name: "PT Dimension Data Indonesia",
			image: dimension,
			status: "",
			link: "https://triloker.com/id/company/detail/26579",
		},
		{
			id: 51,
			name: "PT Multipolar Technology",
			image: multipolar,
			status: "",
			link: "https://www.multipolar.com/",
		},
		{
			id: 52,
			name: "PT Siwali Swantika",
			image: siwali,
			status: "",
			link: "https://siwali.com/",
		},
		{
			id: 53,
			name: "PT Pertamina Hulu Energi W",
			image: pertamina,
			status: "",
			link: "https://phe.pertamina.com/",
		},
		{
			id: 54,
			name: "PT Altros Teknologi",
			image: altros,
			status: "",
			link: "https://altros-tech.com/",
		},
		{
			id: 55,
			name: "Universitas Pelita Harapan",
			image: pelita,
			status: "white",
			link: "https://www.uph.edu/id/study-at-uph/",
		},
		{
			id: 56,
			name: "PT Schenker Petrolog Utama",
			image: schenker,
			status: "",
			link: "https://www.dbschenker.com/id-en",
		},
		{
			id: 57,
			name: "PT Surya Prima Sakti",
			image: surya,
			customSize: "w-[120px] h-[120px]",
			status: "",
			link: "https://supras.co.id/",
		},
		{
			id: 58,
			name: "Indonet99",
			image: noImage,
			status: "noImage",
			link: "https://indonet99.com/",
		},
		{
			id: 59,
			name: "Gloria Computer",
			image: noImage,
			status: "noImage",
			link: "https://www.instagram.com/gloriacomputersintang/",
		},
		{
			id: 60,
			name: "Masternet",
			image: noImage,
			status: "noImage",
			link: "https://masternet.liqu.id/",
		},
		{
			id: 61,
			name: "Jaya Network",
			image: jayaNetwork,
			link: "https://www.jayanetwork.id/",
			status: "",
			customSize: "w-[90px] h-[90px]",
		},
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
	// 2) derive your “final” sorted list:
	const sortedListClient = [
		// first, real‑image entries:
		...listClient.filter((c) => c.image !== noImage),

		// next, noImage but has a link
		...listClient.filter((c) => c.image === noImage && c.link),

		// finally, noImage & no link
		...listClient.filter((c) => c.image === noImage && !c.link),
	];

	// now use sortedListClient in your rendering:

	const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

	const [page, setPage] = useState(0);

	const totalPages = Math.ceil(sortedListClient.length / itemsPerPage);

	const paginatedLogos = useMemo(() => {
		const start = page * itemsPerPage;
		return sortedListClient.slice(start, start + itemsPerPage);
	}, [itemsPerPage, page]);

	useEffect(() => {
		const totalPages = Math.ceil(sortedListClient.length / itemsPerPage);
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
			<div className="flex flex-col items-center mt-20" data-aos="zoom-in-up">
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
								<span
									className="text-[#2565AA] relative"
									style={{ borderBottom: "10px solid #2565AA" }}
								>
									Client Project
								</span>
							</span>
						</h2>
					</>
				)}
			</div>
			<div data-aos="zoom-in-up">
				<div className="relative max-w-7xl mx-auto lg:px-24 md:px-20 sm:px-18 px-18 overflow-hidden">
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
								<>
									{paginatedLogos.map((data, i) => (
										<div
											key={i}
											className={`card w-full h-full ${
												data.status == "white" ? "bg-[#2565AA]" : "bg-white"
											}  rounded-xl shadow flex items-center justify-center`}
										>
											{data.status == "noImage" ? (
												<p className="xl:text-[16px] font-semibold text-dark text-center ">
													{data.name}
												</p>
											) : (
												<Image
													alt={data.name}
													src={data.image}
													className={` ${
														data.customSize
															? data.customSize
															: "max-w-[80%] max-h-[80%]"
													} object-contain`}
												/>
											)}
										</div>
									))}
								</>
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
			</div>
		</>
	);
};

export default Clients;
