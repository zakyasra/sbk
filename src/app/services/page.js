"use client";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import iconServices from "@/assets/services/icon-list.svg";
import iconData from "@/assets/services/icon-data.svg";
import iconComputer from "@/assets/services/icon-computer.svg";
import iconDatabaseClose from "@/assets/services/icon-database-close.svg";
import iconDatabase from "@/assets/services/icon-database.svg";
import iconNetworking from "@/assets/services/icon-networking.svg";
import iconWire from "@/assets/services/icon-wire.svg";
import { FaNetworkWired } from "react-icons/fa";
import { MdInstallDesktop, MdSupportAgent } from "react-icons/md";
import { BsDatabaseFillGear } from "react-icons/bs";
import { LuCable } from "react-icons/lu";
import { RiChatPrivateFill } from "react-icons/ri";
import Link from "next/link";
const page = () => {
	const listServicesLeft = [
		{
			title: "Proven Track Record:",
			teks: "As one of the pioneers in the IT service sector, SBK has consistently delivered projects with precision, professionalism, and dedication.",
		},
		{
			title: " Trusted by Industry Leaders:",
			teks: "We are proud to be trusted by major companies across industries such as automotive, banking, education, telecommunications, and manufacturing.",
		},
		{
			title: " Innovative Solutions:",
			teks: "We provide cutting-edge and tailor-made IT solutions to modernize and streamline your business operations.",
		},
	];
	const listServices = [
		{
			icon: <MdInstallDesktop className="sm:w-[56px] w-[48px] h-auto" />,
			name: "End-to-End IT Solutions",
			teks: "We deliver complete system integration services from initial planning, hardware/software provisioning, installation, configuration, to long-term maintenance.",
		},
		{
			icon: <FaNetworkWired className="sm:w-[56px] w-[48px] h-auto" />,
			name: "Specialization in Networking and Data Communication:",
			teks: "We build robust and secure network infrastructures that enable seamless data transfer and real-time communication across your entire organization.",
		},
		{
			icon: <LuCable className="sm:w-[56px] w-[48px] h-auto" />,
			name: " Structured Cabling and Wiring Systems:",
			teks: "Our experienced technicians design and implement structured cabling systems that support present and future networking requirements with optimal reliability and scalability.",
		},
		{
			icon: <MdSupportAgent className="sm:w-[56px] w-[48px] h-auto" />,
			name: "Expert Team Support:",
			teks: "Our team is composed of highly skilled professionals with deep expertise in the latest technologies from leading IT vendors. We provide ongoing support to ensure your system runs smoothly and securely.",
		},
		{
			icon: <BsDatabaseFillGear className="sm:w-[56px] w-[48px] h-auto" />,
			name: "Innovative Solutions",
			teks: "We provide cutting-edge and tailor-made IT solutions to modernize and streamline your business operations.",
		},
		{
			icon: <RiChatPrivateFill className="sm:w-[56px] w-[48px] h-auto" />,
			name: "Public & Private Sector Experience:",
			teks: "Our portfolio includes projects from government institutions and non-profit organizations, reflecting our versatility and commitment to excellence.",
		},
	];
	return (
		<div>
			<HeroBanner
				linkId="get-to-know"
				title={"Introduction"}
				title2={"to Our Services"}
				position={"center"}
				image={"/hero-services.jpg"}
				content={
					"Explore our professional services—from strategic network planning and hardware provisioning to structured cabling installation and 24/7 system support—designed to optimize performance and drive growth. "
				}
			/>
			<div className="flex sm:flex-row flex-col-reverse " id="get-to-know">
				<div className="sm:w-1/3 bg-[#BEC6CF] xl:px-11 lg:px-9 md:px-7 px-6 xl:py-20 lg:py-16 md:py-12 py-6 flex flex-col gap-8">
					{listServicesLeft.map((data) => (
						<div className="flex items-start gap-4" key={data.title}>
							<Image
								src={iconServices}
								alt="Icon List"
								className="h-auto xl:w-[44px] lg:w-[36px] md:w-[28px] w-[24px]"
							/>
							<div>
								<h4 className="ff-outfit font-medium xl:text-[20px] text-[18px] text-dark mb-4">
									{data.title}
								</h4>
								<p className="ff-poppins font-normal xl:text-[17px] text-[14px] text-dark-fade">
									{data.teks}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className="sm:w-2/3 flex flex-col items-center justify-between md:mt-16 pt-10">
					<div className="max-w-[80%] xl:pt-24 lg:pt-16 md:pt-12 sm:pt-9 pt-6 xl:pb-32 lg:pb-24 md:pb-20 sm:pb-16 pb-12">
						<div className=" mb-12 ff-poppins font-bold text-[#2A2A2A] mx-auto bg-white xxl:text-[40px] xl:text-[36px] lg:text-[32px] text-[28px]">
							Get To Know Our{" "}
							<span
								className="text-regular"
								style={{
									borderBottom: "10px solid #2565AA",
								}}
							>
								Workflow
							</span>
						</div>
						<div className="mt-6 mx-auto grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-1 grid-rows-2 xl:gap-14 lg:gap-12 md:gap-8 gap-6 lg:text-[20px] md:text-[18px] text-[16px] text-justify">
							<p className="ff-poppins text-dark-fade">
								If you are looking for a reliable and solid system integrator,
								we are the answer. PT. Sumber Berkat Komputindo (SBK) offers a
								comprehensive range of IT solutions designed to meet your
								infrastructure needs. Our services are tailored to ensure
								optimal performance, efficiency, and growth for your
								organization.{" "}
							</p>
							<p className="ff-poppins text-dark-fade">
								Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
								Proin cursus, dolor a mollis consectetur, risus dolor fermentum
								massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
								tortor ultrices bibendum. Nulla fermentum, metus quis sodales
								tristique, augue mauris molestie augue, non feugiat ligula neque
								nec felis{" "}
							</p>
						</div>
					</div>
					<div className="bg-[#2565AA] w-full py-9 ps-9 pr-14 sm:flex flex-row hidden md:items-center md:justify-between md:gap-2 sm:gap-6 gap-4 text-white">
						<h4 className="ff-outfit font-bold xl:text-[30px] lg:text-[26px] md:text-[22px] sm:text-[18px] text-[20px]">
							Get Free Consultation
						</h4>
						<Link href={"/contact"}>
							<div
								className="lg:px-[22px] md:px-[18px] sm:px-[14px] md:py-[17px] sm:py-[15px] py-[18px] ff-poppins md:text-[14px] sm:text-[12px] text-[16px] text-center font-semibold cursor-pointer transition-all duration-300 text-white hover:text-[#132e4c] active:text-[#132e4c] bg-transparent hover:bg-white active:bg-white"
								style={{
									border: "5px solid white",
									letterSpacing: "2px",
								}}
							>
								ONLINE ESTIMATE FORM
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div
				className="py-12 text-white xl:px-28 lg:px-20 md:px-16 sm:px-14 px-8 grid lg:grid-cols-3 md:grid-cols-2 xl:gap-x-20 lg:gap-x-14 xl:gap-y-12 gap-y-10 "
				style={{
					backgroundImage: "linear-gradient( to right, #2565AA, #0590E6)",
				}}
			>
				{listServices?.map((data, id) => (
					<div
						className="flex items-center gap-3.5 sm:max-w-none max-w-[400px] sm:mx-0 mx-auto"
						key={id}
					>
						{/* <Image
							src={data.icon}
							alt="Icon Computer"
							className="sm:h-[64px] h-[48px]  w-auto"
						/> */}
						<div>{data.icon}</div>
						<div>
							<b className="ff-outfit text-[16px] mb-1">{data.name}</b>
							<p className="ff-poppins text-[15px]">{data.teks}</p>
						</div>
					</div>
				))}
			</div>
			<div className="bg-[#2565AA] w-full py-9 ps-9 pr-14 sm:hidden flex md:flex-row flex-col md:items-center md:justify-between md:gap-2 sm:gap-6 gap-4 text-white">
				<h4 className="ff-outfit font-bold xl:text-[30px] lg:text-[26px] md:text-[22px] sm:text-[18px] text-[20px]">
					Get Free Consultation
				</h4>
				<div
					className="lg:px-[22px] md:px-[18px] sm:px-[14px] md:py-[17px] sm:py-[15px] py-[18px] ff-poppins md:text-[14px] sm:text-[12px] text-[16px] text-center font-semibold cursor-pointer transition-all duration-300 text-white hover:text-[#132e4c] active:text-[#132e4c] bg-transparent hover:bg-white active:bg-white"
					style={{
						border: "5px solid white",
						letterSpacing: "2px",
					}}
				>
					ONLINE ESTIMATE FORM
				</div>
			</div>
		</div>
	);
};

export default page;
