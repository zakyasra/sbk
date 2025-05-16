"use client";
import Link from "next/link";
import "../styles/ourProduct.scss";
import { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "" }) => {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const counterRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // Hanya aktifkan sekali
				}
			},
			{
				threshold: 0.5, // Elemen terlihat 50% di viewport
			}
		);

		if (counterRef.current) {
			observer.observe(counterRef.current);
		}

		return () => {
			if (counterRef.current) {
				observer.unobserve(counterRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (!isVisible) return;

		let start = 0;
		const duration = 2000;
		const incrementTime = 30;
		const totalIncrements = duration / incrementTime;
		const incrementValue = end / totalIncrements;

		const counter = setInterval(() => {
			start += incrementValue;
			if (start >= end) {
				start = end;
				clearInterval(counter);
			}
			setCount(Math.floor(start));
		}, incrementTime);

		return () => clearInterval(counter);
	}, [end, isVisible]);

	return (
		<span ref={counterRef}>
			{count}
			{suffix}
		</span>
	);
};

function BannerOurProducts() {
	return (
		<div id="product">
			<div className="content-container my-20 sm:h-auto sm:min-h-[auto] min-h-[100vh] flex items-center justify-center lg:flex-row flex-col-reverse xl:gap-16 md:gap-12 gap-10 ff-outfit xl:px-16 lg:px-10 sm:px-9 px-[24px]  xl:py-20 lg:py-16 md:py-10 py-12">
				<div className="flex items-center sm:flex-row flex-col xl:gap-12 sm:gap-10 gap-14">
					<div className="flex flex-col md:gap-9 gap-0">
						<span className="xl:text-[64px] lg:text-[58px] md:text-[50px] text-[48px] text-white font-bold">
							<Counter end={300} suffix="+" />
						</span>
						<span className="xl:text-[36px] md:text-[32px] sm:text-[24px] text-[20px] text-[#C29D2B] font-bold">
							PRODUCTS
						</span>
					</div>
					<div className="flex flex-col md:gap-9 gap-0">
						<span className="xl:text-[64px] lg:text-[58px] md:text-[50px] text-[48px] text-white font-bold">
							<Counter end={10} suffix="+" />
						</span>
						<span className="xl:text-[36px] md:text-[32px] sm:text-[24px] text-[20px] text-[#C29D2B] font-bold">
							CLIENTS
						</span>
					</div>
					<div className="flex flex-col md:gap-9 gap-0">
						<span className="xl:text-[64px] lg:text-[58px] md:text-[50px] text-[48px] text-white font-bold">
							<Counter end={5} suffix="+" />
						</span>
						<span className="xl:text-[36px] md:text-[32px] sm:text-[24px] text-[20px] text-[#C29D2B] font-bold">
							PARTNERS
						</span>
					</div>
				</div>

				<div>
					<div className="flex flex-col lg:items-start items-center">
						<span className="ff-outfit text-[#C29D2B] xl:text-[48px] lg:text-[36px] sm:text-[28px] text-[24px] font-bold md:mb-0 mb-2">
							OUR PRODUCT
						</span>
						<span className="ff-poppins text-[#E0E0E0] md:text-[34px] sm:text-[28px] text-[24px] font-bold md:text-start text-center md:mb-7 mb-4">
							See our greatest product
						</span>
						<Link
							href={"/products"}
							className="ff-poppins cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 px-8 py-4 rounded-[10px] font-bold md:text-[18px] text-[14px] text-white hover:text-[#2565AA] active:text-[#2565AA] bg-[#2565AA] hover:bg-white active:bg-[white]"
							style={{
								transition: ".4s all",
								border: "2px solid #2565AA",
							}}
						>
							SEE MORE PRODUCTS
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BannerOurProducts;
