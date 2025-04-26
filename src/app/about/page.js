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
		"You will get interesting features",
		"You will get the best services from us",
		"We are very professional and we have nice time efficiency ",
		"We are trusted by 250+ company project",
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
			<div className="mb-14"></div>
			{/* about us */}
			<HeroTop
				title={"Introduction"}
				titleBlue={"Sumber Berkat Komputindo"}
				subTitle={"ABOUT US"}
				text1={`Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit.`}
				text2={`Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.`}
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
