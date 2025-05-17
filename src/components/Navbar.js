/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../assets/navbar/logo-sbk-new.png";

import "../styles/navbar.scss";
import Link from "next/link";
import { forwardRef } from "react";
import hamburger from "@/assets/hamburger.svg";
import hamburgerActive from "@/assets/hamburger-active.svg";
// import { Menu, X } from "lucide-react";
import { MdClose } from "react-icons/md";
const Navbar = forwardRef(function Navbar(props, ref) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const navList = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Services", link: "/services" },
		{ name: "Products", link: "/products" },
		{ name: "Clients", link: "/clients" },
		{ name: "Download", link: "/download" },
		{ name: "Contact", link: "/contact" },
	];

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// const [navbarHeight, setNavbarHeight] = useState(0);
	// const navbarRef = useRef(null);

	// useEffect(() => {
	// 	const updateNavbarHeight = () => {
	// 		if (navbarRef.current) {
	// 			setNavbarHeight(navbarRef.current.offsetHeight);
	// 		}
	// 	};

	// 	// Update on resize and mount
	// 	window.addEventListener("resize", updateNavbarHeight);
	// 	updateNavbarHeight();

	// 	// Cleanup on unmount
	// 	return () => {
	// 		window.removeEventListener("resize", updateNavbarHeight);
	// 	};
	// });
	return (
		// <div className="mb-14" style={{ marginBottom: `${navbarHeight}px` }}>
		<nav
			id="navbar"
			ref={ref}
			className={`sticky w-full top-0 z-50 xl:px-[70px] sm:px-12 ps-6 pe-6 lg:py-[20px] py-[16px] flex lg:flex-row flex-row-reverse items-center justify-between  bg-white transition-all duration-300`}
			style={{
				boxShadow: "0px 2px 12px 0px rgba(112, 109, 109, 0.22)",
				zIndex: "99",
			}}
		>
			<Link href={"/"} className="lg:m-0 sm:mx-auto ms-6 mr-auto">
				<Image src={logo} alt="Logo SBK" className=" main-logo" />
			</Link>
			{/* <Link
				href={"/"}
				className="flex items-center gap-3 lg:m-0 sm:mx-auto md:ms-6 mr-auto"
			>
				<div className=" p-4">
					<Image
						src={logo}
						alt="Logo PT. Sumber Berkat Komputindo"
						className="object-contain	max-h-[100%]"
					/>
				</div>
				<div
					className="flex flex-col"
					// style={{
					// 	minWidth: "400px",
					// }}
				>
					<p className="ff-poppins lg:text-[30px] md:text-[24px] sm:text-[20px] ssm:text-[16px] text-[14px] font-bold text-radial">
						PT. Sumber Berkat Komputindo
					</p>
					<p className="ff-poppins lg:text-[18px] md:text-[16px] sm:text-[14px] ssm:text-[12px] text-[10px] font-normal text-[#C29D2B]">
						Networking, Data Communication & Wiring Specialist
					</p>
				</div>
			</Link> */}

			{/* Desktop Menu */}
			<div className="main-items hidden lg:block">
				<ul className="flex items-center xl:gap-4 gap-2.5 font-normal">
					{navList?.map((d, i) => (
						<li key={i}>
							<Link href={d.link}>
								<span
									className={`ff-outfit xl:text-[20px] lg:text-[14px] text-[16px] ${
										pathname === d.link
											? "font-semibold text-[#2565AA] border-b-[4px] border-[#2565AA]"
											: "text-[#3F3F3F] hover:text-[#2565AA] hover:border-b-[4px] hover:border-[#2565AA]"
									}`}
									style={{
										borderStyle: "solid",
									}}
								>
									{d.name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* Hamburger Icon */}
			<div className="lg:hidden">
				<button onClick={toggleMenu}>
					<div className="cursor-pointer w-full">
						{isHovered ? (
							<Image
								src={hamburgerActive}
								alt="Icon Hamburger"
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
								className="min-w-[24px] h-auto"
							/>
						) : (
							<Image
								src={hamburger}
								alt="Icon Hamburger"
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
								className="min-w-[24px] h-auto"
							/>
						)}
					</div>
				</button>
			</div>
			{/* Overlay */}
			{isOpen && (
				<div className="fixed inset-0 bg-black/30 z-30" onClick={toggleMenu} />
			)}

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 left-0 h-full sm:w-64 w-[50%] bg-white shadow-lg z-40 transform transition-transform duration-500 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
				onClick={(e) => e.stopPropagation()} // ✅ mencegah overlay menutup jika klik menu
			>
				<div className="flex justify-end p-4">
					<button onClick={toggleMenu}>
						<MdClose className="w-[24px] h-[24px] text-black hover:text-[#2565AA] active:text-[#2565AA] transition duration-300 cursor-pointer" />
					</button>
				</div>
				<ul className="flex flex-col gap-6 font-normal p-6">
					{navList.map((d, i) => (
						<li key={i}>
							<Link href={d.link} onClick={toggleMenu}>
								<span
									className={`ff-outfit sm:text-[20px] text-[18px] ${
										pathname === d.link
											? "font-semibold text-[#2565AA] border-b-[4px] border-[#2565AA]"
											: "text-[#3F3F3F] hover:text-[#2565AA] hover:border-b-[4px] hover:border-[#2565AA]"
									}`}
									style={{
										borderStyle: "solid",
									}}
								>
									{d.name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
		// </div>
	);
});

export default Navbar;
