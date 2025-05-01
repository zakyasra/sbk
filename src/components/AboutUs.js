import aboutImage from "@/assets/aboutSection/about-image.svg";
import line from "@/assets/aboutSection/line.svg";
import Image from "next/image";
const AboutUs = () => {
	return (
		<div className="flex items-center md:flex-row flex-col justify-between md:gap-12 mt-24 ff-poppins md:mb-20 mb-14">
			{/* left section */}
			<div className="md:w-1/2">
				<Image src={aboutImage} alt="icon about" className="w-auto mx-auto" />
			</div>
			{/* rightsection */}
			<div className="max-w-[750px] md:text-left text-center md:w-1/2">
				<h3 className="ff-outfit font-bold text-2xl  text-[#C29D2B]">
					WHAT IS
				</h3>
				<h2 className="inline w-auto sumber ff-poppins font-semibold xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[32px] sm:text-[38px] text-[30px] text-[#2565AA] ">
					Sumber Berkat Komputindo
				</h2>
				<Image src={line} alt="line" className="w-auto" />
				<p className="mt-6 text-dark-fade lg:text-[20px] md:text-[18px] text-[16px] md:text-left text-justify">
					PT. Sumber Berkat Komputindo (SBK) is an end-to-end ICT solution
					provider established in the early 2000s. We specialize in network
					integration, data communication, and wiring systems for both public
					and private corporations.
					<br />
					<br />
					With over 5 years of experience in the IT industry, we understand the
					core of the technology environment, especially networking — a key
					factor in business success. We are committed to delivering
					high-quality solutions backed by consulting, support, and management
					services.
				</p>
				<button
					className="lg:mt-9 md:mt-7 mt-8 cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 sm:px-5 sm:py-3.5 px-3.5 py-4 rounded-[10px] font-bold sm:text-[18px] text-[16px] w-fit text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white"
					style={{
						transition: ".4s all",
						border: "1px solid #2565AA",
					}}
				>
					{/* className="" */}
					SEE OUR SERVICES
				</button>
			</div>
		</div>
	);
};

export default AboutUs;
