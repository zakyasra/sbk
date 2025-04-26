import aboutImage from "@/assets/aboutSection/about-image.svg";
import line from "@/assets/aboutSection/line.svg";
import Image from "next/image";
const AboutUs = () => {
	return (
		<div className="flex items-center md:flex-row flex-col justify-between md:gap-12 mt-24 ff-poppins md:mb-20 mb-14">
			{/* left section */}
			<div className="md:w-1/2">
				<Image src={aboutImage} alt="icon about" className="w-auto" />
			</div>
			{/* rightsection */}
			<div className="max-w-[750px] md:text-left text-center md:w-1/2">
				<h3 className="ff-outfit font-bold lg:text-2xl text-[20px] text-[#C29D2B]">
					WHAT IS
				</h3>
				<h2 className="inline w-auto sumber ff-poppins font-semibold xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[32px] sm:text-[38px] text-[30px] text-[#2565AA] ">
					Sumber Berkat Komputindo
				</h2>
				<Image src={line} alt="line" className="w-auto" />
				<p className="mt-6 text-dark-fade lg:text-[20px] md:text-[18px] text-[16px] md:text-left text-justify">
					Etiam at iaculis massa. Etiam eu enim varius, congue ante id,
					venenatis velit. Aenean vel ipsum posuere, malesuada mauris eget,
					condimentum neque. Vestibulum mattis rutrum ante vitae ornare. Nam id
					nulla nec dui eleifend ornare ut a augue. Interdum et malesuada fames
				</p>
				<button className="lg:mt-9 md:mt-7 mt-4 cursor-pointer lg:px-9 lg:py-5 md:px-7 md:py-4 sm:px-5 sm:py-3.5 p-3 rounded-[10px] text-white font-bold lg:text-[18px] md:text-[16px] text-[14px] hero-blue bg-[#2565AA]">
					SEE OUR SERVICES
				</button>
			</div>
		</div>
	);
};

export default AboutUs;
