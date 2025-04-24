import Image from "next/image";
import line from "@/assets/ourProduct/line.svg";
import card from "@/assets/ourProduct/card.jpg";
import "../styles/ourProduct.scss";

function OurProducts() {
	return (
		<div className="my-20 xl:px-16 lg:px-12 sm:px-9 px-[24px] xl:py-20 lg:py-16 md:py-10 py-[16px]">
			<div className="flex flex-col items-center md:mb-8 mb-4">
				<h3 className="ff-outfit xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] text-[#C29D2B] font-bold md:mb-4 mb-2">
					OUR PRODUCTS
				</h3>
				<h2 className="ff-poppins xl:text-5xl lg:text-4xl text-3xl text-[#132E4C] font-semibold text-center">
					Take a Look of Our
					<span className="block text-[#2565AA] relative">
						Greatest Product
						<Image
							src={line}
							alt="line"
							className="absolute bottom-[-10px] w-[115%] left-0 object-cover"
						/>
					</span>
				</h2>
				<p
					className="ff-poppins text-[#132e4c80] lg:text-[20px] md:text-[18px] text-[16px] font-normal md:t-6 mt-4 text-center"
					style={{
						maxWidth: "341px",
					}}
				>
					Etiam at iaculis massa. Etiam eu enim varius, congue ante id.
				</p>
			</div>
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-y-12 gap-x-6 w-full max-w-[calc(100%-40px)] xl:px-[100px] lg:px-[80px] md:px-[40px] mx-auto">
				{[1, 2, 3, 4, 5, 6].map((data) => (
					<div key={data}>
						<div
							className="card px-2 pt-2 pb-4 rounded-2xl sm:mx-0 mx-auto"
							style={{
								maxWidth: "350px",
								border: "1px solid #E7E7E7",
								boxShadow: "0 3px 8px -1px #3232470d",
							}}
						>
							<Image
								src={card}
								alt="Card Products"
								className="mb-6 rounded-2xl"
							/>
							<div className="flex flex-col gap-4">
								<p className="ff-outfit font-semibold sm:text-[20px] text-[18px] text-[#132E4C]">
									Mini Terminal Box 2
								</p>
								<p className="ff-poppins text-[16px] text-[#425466]">
									Write an amazing description in this dedicated card section.
									Each word counts.{" "}
								</p>
								<button
									className="flex w-fit cursor-pointer lg:px-5 lg:py-3 md:px-4 md:py-2 px-8 sm:py-3.5 py-3 rounded-[10px] font-semibold text-[12px] text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white"
									style={{
										transition: ".4s all",
										border: "1px solid #2565AA",
									}}
								>
									SEE MORE
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default OurProducts;
