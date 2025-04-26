/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import logo from "../app/logo.svg";
import underline from "@/assets/navbar/nav-underline.svg";
import "../styles/navbar.scss";
import Link from "next/link";
import { forwardRef } from "react";
const Navbar = forwardRef(function Navbar(props, ref) {
	const pathname = usePathname();
	const navList = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Services",
			link: "/services",
		},
		{
			name: "Products",
			link: "/products",
		},
		{
			name: "Clients",
			link: "/clients",
		},
		{
			name: "Download",
			link: "/download",
		},
		{
			name: "Contact",
			link: "/contact",
		},
	];
	return (
		<nav
			id="navbar"
			className="lg:px-[70] px-[48] lg:py-[20] py-[16] flex flex-row items-center overflow-hidden"
			style={{ boxShadow: "0px 2px 12px 0px rgba(112, 109, 109, 0.22)" }}
			ref={ref}
		>
			<Image src={logo} alt="Logo Inacomp" className="lg:mr-24 mr-16" />

			<div className="main-items">
				<ul className="flex items-center gap-4 font-normal">
					{navList?.map((d, i) => (
						<li key={i}>
							{pathname === d.link ? (
								<Link href={d.link}>
									<div className="relative">
										<span className="ff-outfit text-[16px] font-semibold text-[#2565AA]">
											{d.name}
										</span>
										<div className="absolute bottom-[-6] animate-draw-line ">
											<Image
												src={underline}
												alt="garis"
												width={100} // sesuaikan lebar akhir
												height={10} // sesuaikan tinggi garis
												className=""
											/>
										</div>
									</div>
								</Link>
							) : (
								<Link href={d.link}>
									<div>
										<span className="ff-outfit text-[16px] text-[#3F3F3F]">
											{d.name}
										</span>
									</div>
								</Link>
							)}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
});

export default Navbar;
