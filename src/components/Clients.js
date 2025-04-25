import Image from "next/image";
import React from "react";
import line from "@/assets/clients/line.svg";
import bni from "@/assets/clients/bni.png";
import bnsp from "@/assets/clients/bnsp.png";
import bpsdm from "@/assets/clients/bpsdm.png";
import indofarma from "@/assets/clients/indofarma.png";
import jamkrindo from "@/assets/clients/jamkrindo.png";
import kemenkes from "@/assets/clients/kemenkes.png";
import semen from "@/assets/clients/semen.png";
import surveyor from "@/assets/clients/surveyor.png";
import "../styles/clients.scss";
const Clients = () => {
	const listClient = [
		{ id: 1, name: "BNI", image: bni },
		{ id: 2, name: "BSNP", image: bnsp },
		{ id: 3, name: "BPSDM", image: bpsdm },
		{ id: 4, name: "Jamkrindo", image: jamkrindo },
		{ id: 5, name: "Surveyor", image: surveyor },
		{ id: 6, name: "Semen", image: semen },
		{ id: 7, name: "Kemenkes", image: kemenkes },
		{ id: 8, name: "Indofarma", image: indofarma },
		{ id: 9, name: "BNI", image: bni },
		{ id: 10, name: "BSNP", image: bnsp },
		{ id: 11, name: "BPSDM", image: bpsdm },
		{ id: 12, name: "Jamkrindo", image: jamkrindo },
		// { id: 13, name: "Surveyor", image: surveyor },
		// { id: 14, name: "Semen", image: semen },
		// { id: 15, name: "Kemenkes", image: kemenkes },
		// { id: 16, name: "Indofarma", image: indofarma },
	];
	return (
		<div className="mb-24">
			<div className="flex flex-col items-center md:mb-12">
				<h3 className="ff-outfit md:text-[24px] sm:text-[20px] text-[16px] text-[#C29D2B] font-bold mb-6">
					CLIENTS
				</h3>
				<h2 className="ff-poppins md:text-5xl sm:text-[40px] text-[32px] text-[#132E4C] font-semibold mb-12">
					Let&apos;s See Some of
					<span className="block">
						Our{" "}
						<span className="text-[#2565AA] relative">
							Client Project
							<Image
								src={line}
								alt="line"
								className=" absolute bottom-[-10px] w-[115%] left-0 object-cover"
							/>
						</span>
					</span>
				</h2>
			</div>
			<div className="lg:px-20 md:px-12 sm:px-9 px-6 ">
				<div className="card-container grid lg:grid-cols-4 grid-cols-2 grid-rows-3 gap-y-12 gap-x-6 w-full max-w-[calc(100%-48px)] mx-auto">
					{listClient?.slice(0, 12).map((data) => (
						<div
							key={data.id}
							className="card w-full h-full bg-white rounded-xl shadow flex items-center justify-center"
						>
							<Image
								src={data.image}
								alt={data.name}
								width={120}
								height={120}
								className="object-contain max-w-[80%] max-h-[80%]"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Clients;
