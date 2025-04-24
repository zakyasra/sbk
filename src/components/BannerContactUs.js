import "../styles/contact.scss";
function BannerContactUs() {
	return (
		<div
			id="BannerContactUs"
			className="flex items-center justify-center flex-col xl:gap-16 md:gap-12 gap-10 xl:px-16 lg:px-10 sm:px-9 px-[24px] xl:py-12 py-8 "
		>
			<div className="flex flex-col lg:items-start items-center text-center">
				<span className="mx-auto ff-outfit text-[#C29D2B] md:text-[24px] text-[20px] font-bold mb-2">
					CONTACT US
				</span>
				<span className="ff-poppins text-[#E0E0E0] md:text-[34px] sm:text-[28px] text-[24px] font-bold md:text-start text-center md:mb-8 mb-4">
					Have something in mind?
				</span>
				<button
					className="ff-poppins mx-auto cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 px-8 py-4 rounded-[10px] font-bold md:text-[18px] text-[14px] text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white "
					style={{
						transition: ".4s all",
						border: "1px solid #2565AA",
					}}
				>
					CONTACT US
				</button>
			</div>
		</div>
	);
}

export default BannerContactUs;
