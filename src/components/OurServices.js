import Image from "next/image";
import line from "@/assets/services/line.svg";

const OurServices = () => {
	return (
		<div>
			{/* left section */}
			<div>
				<h3 className="mb-4 ff-outfit text-[#C29D2B] text-2xl font-bold">
					OUR SERVICES
				</h3>
				<h2 className="mb-6 ff-poppins text-5xl text-dark font-bold">
					Our top
					<span className="relative inline-block text-[#2565AA]">
						Services
						<Image
							src={line}
							alt="line"
							className=" absolute top-[45px] w-[115%] left-0 object-cover"
						/>
					</span>
					for you
				</h2>
				<p className="mb-6 text-[20px] text-[#132e4c99]">
					Etiam at iaculis massa. Etiam eu enim varius, congue ante id,
					venenatis velit. Aenean ve.
				</p>
			</div>
			{/* right section */}
			<div></div>
		</div>
	);
};

export default OurServices;
