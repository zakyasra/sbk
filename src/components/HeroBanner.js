const HeroBanner = ({ position, title, title2 = "", content, image }) => {
	return (
		<div>
			<div
				className={`hero-section w-full  text-white text-left md:py-28 sm:py-20 py-16 xl:px-28 lg:px-24 md:px-20 sm:px-12 px-6`}
				style={{
					background: `url(${image})`,
					// height: "90vh",
				}}
			>
				<div
					className={`${
						position == "center"
							? "mx-auto text-center xl:max-w-[50%] lg:max-w-[55%] md:max-w-[75%] sm:max-w-[80%] max-w-[90%] "
							: " xl:max-w-[40%] lg:max-w-[50%] md:max-w-[70%] sm:max-w-[75%] max-w-[90%] "
					} flex flex-col `}
				>
					<div
						className={`flex gap-4 items-center ${
							position == "center" && "justify-center"
						}`}
					>
						<h1
							className={`${
								position == "center" && "text-center"
							} flex flex-col ff-poppins font-bold xl:text-[64px] lg:text-[56px] md:text-[48px] sm:text-[40px] text-[34px] mb-6 `}
							style={{
								borderLeft:
									position === "left" ? "10px solid #2565AA" : undefined,
								paddingLeft: position === "left" ? "16px" : undefined,
							}}
						>
							<span>{title}</span>
							<span>{title2}</span>
							{/* {title.map((data) => (
									<span key={data}>{data}</span>
								))} */}
						</h1>
					</div>
					<p className="ff-outfit font-normal lg:text-[22px] md:text-[18px] text-[16px]">
						{content}
					</p>
					<button
						className={`${
							position == "center" && "mx-auto"
						} w-fit lg:mt-9 md:mt-7 mt-4 cursor-pointer lg:px-9 md:px-7 md:py-4 sm:px-5 sm:py-3.5 px-5 py-3 rounded-[10px] sm:font-bold font-semibold lg:text-[18px] md:text-[16px] sm:test-[14px] text-[12px] text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white`}
						style={{
							transition: ".4s all",
							border: "1px solid #2565AA",
						}}
					>
						SEE MORE
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
