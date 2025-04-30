/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../app/logo.svg";
import underline from "@/assets/navbar/nav-underline.svg";
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
			<Image
				src={logo}
				alt="Logo Inacomp"
				className="lg:m-0 sm:mx-auto ms-6 mr-auto main-logo"
			/>

			{/* Desktop Menu */}
			<div className="main-items hidden lg:block">
				<ul className="flex items-center xl:gap-4 gap-2.5 font-normal">
					{navList?.map((d, i) => (
						<li key={i}>
							<Link href={d.link}>
								<span
									className={`ff-outfit xl:text-[16px] lg:text-[14px] text-[16px] ${
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
