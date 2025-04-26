import Title from "./Title";

function HeroTop({ title, subTitle, titleBlue, text1, text2 }) {
	return (
		<div className="xl:px-16 lg:px-14 md:px-12 sm:px-9 px-[24px]">
			<div className="max-w-[1120px] text-center w-fit mx-auto">
				<Title title={title} subTitle={subTitle} titleBlue={titleBlue} />
				{/* <Image src={lineAbout} alt="line" className="w-auto" /> */}
				{/* flex sm:flex-row flex-col */}
				<div className="max-w-[1120px] mt-6 mx-auto grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-1 grid-rows-2 xl:gap-14 lg:gap-12 md:gap-8 gap-6 lg:text-[20px] md:text-[18px] text-[16px] text-justify">
					<p className="ff-poppins text-dark-fade ">{text1}</p>
					<p className="ff-poppins text-dark-fade">{text2}</p>
				</div>
			</div>
		</div>
	);
}

export default HeroTop;
