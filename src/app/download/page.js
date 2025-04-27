// import image from "@/assets/hero-download.jpg";
import { FaSearch } from "react-icons/fa";
import Title from "@/components/HeroTop/Title";
import iconSearch from "@/assets/search-icon.svg";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
function page() {
	return (
		<div>
			<div
				className={`ff-poppins xl:text-[64px] lg:text-[56px] md:text-[48px] sm:text-[36px] text-[32px] font-bold text-center hero-section w-full  text-white md:py-20 sm:py-16 py-14 xl:px-28 lg:px-24 md:px-20 sm:px-12 px-6`}
				style={{
					background: `url(/hero-download.jpg)`,
					// height: "90vh",
				}}
			>
				<p>Download</p>
				<p className="responsive-margin-hero">Center</p>
			</div>
			<div className="text-center lg:mt-20 md:mt-16 sm:mt-14 mt-12">
				<Title
					subTitle={"DOWNLOAD"}
					title={"Explore Our"}
					titleBlue={"Available Software"}
				/>
			</div>
			<div className="flex justify-center">
				<div className="relative overflow-hidden rounded-[10px]">
					<input
						type="text"
						className="input-width ps-5 py-4 pe-24 rounded-[10px] bg-white"
						style={{
							border: "1px solid #ECECEC",
						}}
						placeholder="Search software name ... "
					/>
					<div
						className="absolute top-1/2 -translate-y-1/2"
						style={{ right: 0 }}
					>
						{/* <FaSearch className="w-[24px] h-[24px] text-white" /> */}
						<Image
							src={iconSearch}
							alt="icon seearch"
							// className="w-[56px] h-auto"
						/>
					</div>
				</div>
			</div>
			<div className="mt-16 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 px-16">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((data) => (
					<div
						key={data}
						className="card-download ps-6 pr-4 py-4"
						style={{
							border: "1px solid #7A7A9D",
							borderRadius: "16px",
						}}
					>
						<div>
							<div className="flex items-start justify-between gap-2">
								<div className="ff-inter">
									<p className="text-[#7A7A9D] sm:text-[12px] text-[10px] font-semibold mb-1">
										Jenis Software
									</p>
									<p className="text-[#27272E] lg:text-[20px] md:text-[18px] sm:text-[16px] font-semibold mb-2.5">
										Visual Pen Fault
									</p>
								</div>
								<div className="rounded-[50%] bg-[#2565AA] p-2.5">
									<MdDownload
										style={{
											width: "26px",
											height: "26px",
											color: "white",
										}}
									/>
								</div>
							</div>
							<div className="flex sm:items-center items-start sm:flex-row flex-col gap-2.5">
								<div className="size bg-[#DEFFEE] text-[#66CB9F] font-bold text-[10px] rounded-[6px] px-2 py-1 ">
									10 MB
								</div>
								<p className="text-[#7A7A9D] font-medium text-[10px]">
									Downloaded by 100+
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="py-14">PAGINATION</div>
		</div>
	);
}

export default page;
