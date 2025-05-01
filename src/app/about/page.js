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
import HeroBanner from "@/components/HeroBanner";
import HeroTop from "@/components/HeroTop/page";
function page() {
	const listAdvantage = [
		"Comprehensive & Integrated Solutions",
		"Backed by Experienced IT Experts",
		"Cost Efficiency Without Compromising Quality ",
		"Specialized in Networking & Data Communication",
	];
	return (
		<div className="mb-14">
			{/* hero sections */}

			<HeroBanner
				image={"/about-hero.jpg"}
				position={"left"}
				title={"Get To Know About Our Company"}
				content={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. "
				}
			/>
			{/* about us */}
			<HeroTop
				title={"Introduction"}
				titleBlue={"Sumber Berkat Komputindo"}
				subTitle={"ABOUT US"}
				text1={`PT. Sumber Berkat Komputindo (SBK) is an ICT (Information Communication Technology) company established in the early 2000s by experts with deep experience in the IT industry. Since the beginning, we’ve focused on providing total IT solutions, specializing in networking, data communication, and wiring systems.`}
				text2={`We deliver high-quality, end-to-end system integration services that help public and private corporations implement cost-effective IT solutions. We understand the nuts and bolts of IT environments, especially networking — a critical success factor in today’s business world.`}
			/>
			{/* section services */}
			<Banner
				title={"SERVICES"}
				content={"Curious About Our Services?"}
				buttonText={"SEE MORE"}
				image={"/section-services.jpg"}
				link={"/services"}
			/>
			{/* the advantages */}
			<div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-12 xl:ps-28 lg:ps-20 pr-12 md:ps-16 sm:ps-12 px-[24px]">
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
					<p className="ff-poppins font-normal text-[#19182599] max-w-[600px] mb-9 lg:text-[24px] md:text-[18px] text-[16px] text-justify">
						{" "}
						We certainly have several advantages compared to other companies
					</p>
					<div className="flex flex-col gap lg:gap-9 md:gap-6 gap-4">
						{listAdvantage?.map((data) => (
							<div
								className="flex items-center lg:gap-6 md:gap-5 gap-4"
								key={data}
							>
								<Image src={checklist} alt="Icon checklist" />
								<p className="ff-inter lg:text-[24px] md:text-[18px] text-[16px] text-[#19182599]">
									{data}
								</p>
							</div>
						))}
					</div>
				</div>
				{/* right section */}
				<Image
					src={advantage}
					alt="icon advantage"
					className="h-full w-auto object-cover md:flex hidden mx-auto"
				/>
			</div>
		</div>
	);
}

export default page;
