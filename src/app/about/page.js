"use client";
import "../../styles/about.scss";
import Image from "next/image";
import lineDown from "@/assets/aboutSection/line-down.svg";
import lineAbout from "@/assets/aboutSection/line-about.svg";
import checklist from "@/assets/aboutSection/blue-check.svg";
import advantage from "@/assets/aboutSection/icon-advantage.jpg";
import Banner from "@/components/Banner";
import ButtonToTop from "@/components/ButtonToTop";
import WhatsappOverlay from "@/components/WhatsappOverlay";
function page() {
	const listAdvantage = [
		"You will get interesting features",
		"You will get the best services from us",
		"We are very professional and we have nice time efficiency ",
		"We are trusted by 250+ company project",
	];
	return (
		<div id="about" className="mb-14">
			<ButtonToTop />
			<WhatsappOverlay />
			{/* hero sections */}
			<div
				className="hero-section w-full flex items-center text-white text-left md:py-28 sm:py-20 py-16  xl:px-28 lg:px-24 md:px-20 sm:px-12 px-6 mb-12"
				style={
					{
						// minHeight: "80vh",
					}
				}
			>
				<div className="flex flex-col xl:max-w-[44%] lg:max-w-[50%] md:max-w-[70%] sm:max-w-[75%] max-w-[90%]">
					<div className="flex gap-4 items-center ">
						{/* <Image
							src={lineDown}
							alt="Line Down"
							className="flex h-full w-auto object-contain"
						/> */}
						<h1
							className="flex flex-col ff-poppins font-bold xl:text-[64px] lg:text-[56px] md:text-[48px] sm:text-[40px] text-[34px] mb-6 text-left"
							style={{
								borderLeft: "10px solid #2565AA",
								paddingLeft: "16px",
							}}
						>
							<span>Get To Know</span>
							<span>About Our</span>
							<span>Company</span>
						</h1>
					</div>
					<p className="ff-outfit font-normal lg:text-[22px] md:text-[18px] text-[16px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
						egestas pellentesque libero dolor in diam consequat ut.{" "}
					</p>
					<button
						className="w-fit lg:mt-9 md:mt-7 mt-4 cursor-pointer lg:px-9 md:px-7 md:py-4 sm:px-5 sm:py-3.5 px-5 py-3 rounded-[10px] sm:font-bold font-semibold lg:text-[18px] md:text-[16px] sm:test-[14px] text-[12px] text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white "
						style={{
							transition: ".4s all",
							border: "1px solid #2565AA",
						}}
					>
						SEE MORE
					</button>
				</div>
			</div>
			{/* about us */}
			<div className="xl:px-16 lg:px-14 md:px-12 sm:px-9 px-[24px]">
				<div className="max-w-[750px] text-center w-fit mx-auto">
					<h3 className="ff-outfit font-bold lg:text-2xl sm:text-[20px] text-[16px] text-[#C29D2B] md:mb-4 mb-2">
						ABOUT US
					</h3>
					<h2 className="flex flex-col w-auto sumber ff-poppins font-semibold xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px] ">
						<span className="text-dark">Introduction</span>
						<span
							className="inline-block w-fit mx-auto border-b-violet-50  text-[#2565AA]"
							style={{
								borderBottom: "10px solid #2565AA",
							}}
						>
							Sumber Berkat Komputindo
						</span>
					</h2>
					{/* <Image src={lineAbout} alt="line" className="w-auto" /> */}
					{/* flex sm:flex-row flex-col */}
					<div className="max-w-[1120px] mt-6 mx-auto grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-1 grid-rows-2 xl:gap-14 lg:gap-12 md:gap-8 gap-6 lg:text-[20px] md:text-[18px] text-[16px] text-justify">
						<p className="ff-poppins text-[#132e4c80] ">
							Etiam at iaculis massa. Etiam eu enim varius, congue ante id,
							venenatis velit. Aenean vel ipsum posuere, malesuada mauris eget,
							condimentum neque. Vestibulum mattis rutrum ante vitae ornare. Nam
							id nulla nec dui eleifend ornare ut a augue. Interdum et malesuada
							fames
						</p>
						<p className="ff-poppins text-[#132e4c80]">
							Etiam at iaculis massa. Etiam eu enim varius, congue ante id,
							venenatis velit. Aenean vel ipsum posuere, malesuada mauris eget,
							condimentum neque. Vestibulum mattis rutrum ante vitae ornare. Nam
							id nulla nec dui eleifend ornare ut a augue. Interdum et malesuada
							fames
						</p>
					</div>
				</div>
			</div>
			{/* section services */}
			<Banner
				title={"SERVICES"}
				content={"Curious About Our Services?"}
				buttonText={"SEE MORE"}
				image={"section-services.png"}
				style="xl:my-20 lg:my-16 md:my-10 sm:my-9 my-6"
			/>
			{/* the advantages */}
			<div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-12 xl:px-28 lg:px-20 md:px-16 sm:px-12 px-[24px]">
				{/* left section */}
				<div className="py-5">
					<h3 className="ff-outfit lg:text-2xl sm:text-[20px] text-[16px] font-bold text-secondary md:mb-6 sm:mb-3 mb-2">
						THE ADVANTAGE
					</h3>
					<h2 className="ff-poppins xxl:text-[48px] xl:text-[40px] lg:text-[36px] md:text-[32px] text-[28px] font-semibold text-[#0C1920] md:mb-6 sm:mb-3 mb-2">
						Why Should We ?
					</h2>
					<Image
						src={advantage}
						alt="icon advantage"
						className="md:h-full w-full h-[300px] object-cover flex md:hidden"
					/>
					<p className="ff-poppins font-normal text-[#19182599] mb-9 lg:text-[24px] md:text-[18px] text-[16px] text-justify">
						{" "}
						We certainly have several advantages compared to other companies
					</p>
					<div className="flex flex-col gap lg:gap-9 md:gap-6 gap-4">
						{listAdvantage?.map((id) => (
							<div
								className="flex items-center lg:gap-6 md:gap-5 gap-4"
								key={id}
							>
								<Image src={checklist} alt="Icon checklist" />
								<p className="ff-inter lg:text-[24px] md:text-[18px] text-[16px] text-[#19182599]">
									You will get interesting features
								</p>
							</div>
						))}
					</div>
				</div>
				{/* right section */}
				<Image
					src={advantage}
					alt="icon advantage"
					className="h-full w-auto object-cover md:flex hidden"
				/>
			</div>
		</div>
	);
}

export default page;
