import Link from "next/link";
import React from "react";

const Banner = ({ title, content, buttonText, image, link }) => {
	return (
		<div
			id="banner"
			className={`flex items-center justify-center flex-col xl:gap-16 md:gap-12 gap-10 xl:my-20 lg:my-16 md:my-10 sm:my-9 my-6 xl:px-16 lg:px-10 sm:px-9 px-[24px] py-12`}
			style={{
				// backgroundImage: `url(/${image})`,
				backgroundImage: `url(${image})`,
			}}
		>
			<div className="flex flex-col lg:items-start items-center text-center">
				<span
					className="mx-auto ff-outfit text-[#C29D2B] text-[24px] font-bold sm:mb-2 mb-0"
					style={{
						letterSpacing: "5px",
					}}
				>
					{title}
				</span>
				<span className="ff-poppins text-[#E0E0E0] md:text-[34px] text-[28px]  font-bold md:text-start text-center md:mb-8 sm:mb-4 mb-6">
					{content}
				</span>
				<Link href={link} className="mx-auto">
					<button
						className="ff-poppins cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 px-8 py-4 rounded-[10px] font-bold md:text-[18px] text-[14px] text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white "
						style={{
							transition: ".3s all",
							border: "1px solid #2565AA",
						}}
					>
						{buttonText}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Banner;
