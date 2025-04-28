"use client";

import { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Services", "Products", "Contact"];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`w-full fixed top-0 bg-white z-50 transition-shadow duration-300 ${
				isScrolled ? "shadow-md" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto flex justify-between items-center p-4">
				<div className="text-2xl font-bold">Logo</div>

				{/* Desktop Nav */}
				<ul className="hidden md:flex gap-8 font-semibold">
					{navLinks.map((link, index) => (
						<li key={index} className="hover:text-blue-600 cursor-pointer">
							{link}
						</li>
					))}
				</ul>

				{/* Hamburger Icon */}
				<div className="md:hidden">
					<button onClick={toggleMenu}>{isOpen ? "X" : "---"}</button>
				</div>
			</div>

			{/* Mobile Nav */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
				style={{
					zIndex: "99999999",
				}}
			>
				<div className="flex justify-end p-4">
					<button onClick={toggleMenu}>X</button>
				</div>
				<ul className="flex flex-col gap-6 font-semibold p-6">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className="hover:text-blue-600 cursor-pointer"
							onClick={toggleMenu}
						>
							{link}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
