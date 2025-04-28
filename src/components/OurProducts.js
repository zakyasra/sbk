import Image from "next/image";
import line from "@/assets/ourProduct/line.svg";
import card from "@/assets/ourProduct/card.jpg";
import "../styles/ourProduct.scss";
import Title from "./HeroTop/Title";

function OurProducts() {
	return (
		<div className="xl:px-16 lg:px-12 sm:px-9 px-[24px] xl:py-20 lg:py-16 md:py-10 py-[16px]">
			<Title
				subTitle={"	OUR PRODUCTS"}
				title={"See more about "}
				titleBlue={"Our Product"}
			/>

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
								<p className="ff-outfit font-semibold sm:text-[20px] text-[18px] text-dark">
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
