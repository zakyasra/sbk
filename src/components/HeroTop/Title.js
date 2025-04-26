const Title = ({ subTitle, titleBlue, title }) => {
	return (
		<>
			<h3
				className="ff-outfit font-bold lg:text-2xl sm:text-[20px] text-[16px] text-[#C29D2B] md:mb-4 mb-2"
				style={{
					letterSpacing: "3px",
				}}
			>
				{subTitle}
			</h3>
			<h2 className="flex flex-col w-auto sumber ff-poppins font-semibold xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px] xl:mb-16 lg:mb-12 md:mb-9 mb-6">
				<span className="text-dark text-center">{title}</span>
				<span
					className="inline-block w-fit mx-auto border-b-violet-50  text-[#2565AA]"
					style={{
						borderBottom: "10px solid #2565AA",
						marginTop: "-25px",
					}}
				>
					{titleBlue}
				</span>
			</h2>
		</>
	);
};

export default Title;
