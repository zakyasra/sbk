import "../styles/ourProduct.scss";
function BannerOurProducts() {
	return (
		<div
			id="product"
			className="flex items-center justify-center lg:flex-row flex-col xl:gap-16 md:gap-12 gap-10 ff-outfit xl:px-16 lg:px-10 sm:px-9 px-[24px]  xl:py-20 lg:py-16 md:py-10 py-12"
		>
			<div className="flex items-center md:flex-row flex-col xl:gap-12 gap-8">
				<div className="flex flex-col md:gap-9 gap-0">
					<span className="xl:text-[64px] lg:text-[58px] md:text-[50px] text-[48px]  text-white font-bold">
						300+
					</span>
					<span className="xl:text-[36px] md:text-[32px] text-[30px] text-[#C29D2B] font-bold">
						PRODUCTS
					</span>
				</div>
				<div className="flex flex-col md:gap-9 gap-0">
					<span className="xl:text-[64px] lg:text-[58px] md:text-[50px] text-[48px]  text-white font-bold">
						10K+
					</span>
					<span className="xl:text-[36px] md:text-[32px] text-[30px] text-[#C29D2B] font-bold">
						CLIENTS
					</span>
				</div>
				<div className="flex flex-col md:gap-9 gap-0">
					<span className="xl:text-[64px] lg:text-[58px] md:text-[50px] text-[48px]  text-white font-bold">
						5+
					</span>
					<span className="xl:text-[36px] md:text-[32px] text-[30px] text-[#C29D2B] font-bold">
						PARTNERS
					</span>
				</div>
			</div>
			<div className="flex flex-col lg:items-start items-center">
				<span className="ff-outfit text-[#C29D2B] md:text-[24px] text-[20px] font-bold md:mb-0 mb-2">
					OUR PRODUCT
				</span>
				<span className="ff-poppins text-[#E0E0E0] md:text-[34px] sm:text-[28px] text-[24px]  font-bold md:text-start text-center md:mb-7 mb-4">
					See our greatest product
				</span>
				<button
					className="ff-poppins cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 px-8 py-4 rounded-[10px]  font-bold md:text-[18px] text-[14px] text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white "
					style={{
						transition: ".4s all",
						border: "2px solid #2565AA",
					}}
				>
					SEE PRODUCTS
				</button>
			</div>
		</div>
	);
}

export default BannerOurProducts;
