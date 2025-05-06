const Title = ({ subTitle, titleBlue, title }) => {
	return (
		<div data-aos="zoom-in-up">
			<h3
				className="text-center ff-outfit font-bold text-2xl  text-[#C29D2B] md:mb-4 mb-2"
				style={{
					letterSpacing: "3px",
				}}
				data-aos="fade-down"
				data-aos-duration="500"
			>
				{subTitle}
			</h3>
			<h2 className="flex flex-col w-auto sumber ff-poppins font-semibold xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px] xl:mb-16 lg:mb-12 md:mb-9 mb-6">
				<span
					className="text-dark text-center"
					data-aos="fade-down"
					data-aos-duration="700"
				>
					{title}
				</span>
				<span
					className="responsive-margin-hero inline-block w-fit mx-auto border-b-violet-50  text-[#2565AA]"
					style={{
						borderBottom: "10px solid #2565AA",
					}}
					data-aos="fade-up"
					data-aos-duration="900"
				>
					{titleBlue}
				</span>
			</h2>
		</div>
	);
};

export default Title;
