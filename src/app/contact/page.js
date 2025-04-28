import IconSocialMedia from "@/components/IconSocialMedia";
import {
	FaArrowRight,
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";
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
				<p>Contact Us</p>
			</div>
			<div className="flex md:flex-row flex-col md:gap-0 gap-12">
				<div className="md:w-1/2 lg:px-20 md:px-12 sm:px-9 px-6 xl:py-16 lg:py-12 py-6">
					<h3 className="text-secondary font-bold ff-outfit lg:text-[24px] md:text-[20px] text-[16px] mb-6">
						CONTACT
					</h3>
					<div className="form">
						<h2 className="ff-poppins text-dark font-semibold lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] mb-12">
							Connect With Your Next Great Hire Today!
						</h2>
						<form>
							<div className="grid grid-cols-2 gap-x-6 gap-y-10">
								<div>
									<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark">
										Company
									</p>
									<input
										type="text"
										placeholder="Company name..."
										className="input-contact rounded-[8px]"
									/>
								</div>
								<div>
									<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark">
										Name
									</p>
									<input
										type="text"
										placeholder="Your name..."
										className="input-contact rounded-[8px]"
									/>
								</div>
								<div>
									<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark">
										Phone Number
									</p>
									<input
										type="number"
										placeholder="+628..."
										className="input-contact rounded-[8px]"
									/>
								</div>
								<div>
									<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark">
										Email
									</p>
									<input
										type="email"
										placeholder="yourmail@gmail.com"
										className="input-contact rounded-[8px]"
									/>
								</div>
							</div>
							<div className="my-12">
								<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark">
									Project Detail
								</p>
								<textarea
									placeholder="Describe Your Project"
									className=" input-contact rounded-[8px]"
									style={{
										maxHeight: "77px",
										overflow: "auto",
									}}
								></textarea>
							</div>
							<div className="flex items-start gap-4">
								<input
									type="checkbox"
									// name="myCheckbox"
									id="myCheckbox"
									className="w-[24px] h-[24px]  accent-[#132e4c] outline-0 cursor-pointer"
								/>
								<label
									htmlFor="myCheckbox"
									className="cursor-pointer ff-poppins text-dark lg:text-[16px] md:text-[14px] text-[12px]"
								>
									By sending this form I confirm that I have read and accept the{" "}
									<a href="#" className="font-semibold">
										Privacy Policy
									</a>
								</label>
							</div>
							<button
								className="mt-5 ff-poppins flex items-center text-left w-fit gap-4 cursor-pointer  lg:ps-7 md:ps-5 ps-4 lg:pr-12 md:pr-9 pr-6 lg:py-4 md:py-2 sm:py-3.5 py-3 rounded-[10px] font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-white hover:text-[#2565AA] bg-[#2565AA] hover:bg-white"
								style={{
									transition: ".4s all",
									border: "1px solid #2565AA",
								}}
							>
								GET CONSULTATION
								<FaArrowRight color="white" className="w-[24px] h-[24px]" />
							</button>
						</form>
					</div>
				</div>
				<div
					className="md:w-1/2 object-cover flex items-center justify-center py-12"
					style={{
						backgroundImage: "url(/bg-contact.jpg)",
					}}
				>
					<div className="flex flex-col xxl:w-[30%] xl:w-[35%] lg:w-[40%] md:w-[45%] sm:w-[50%] w-[60%]">
						<h3 className="ff-poppins xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px] font-bold text-dark mb-5">
							Contact Info
						</h3>
						<h4 className="ff-outift lg:text-[16px] md:text-[14px] text-[12px] font-bold text-dark mb-1">
							Our Office
						</h4>
						<p className="ff-poppins lg:text-[16px] md:text-[14px] text-[12px] font-normal -text-dark mb-12">
							Jl. Suryopranoto No.2 2, RT.2/RW.8, Petojo Utara, Kecamatan
							Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130
						</p>
						<h4 className="ff-outift lg:text-[16px] md:text-[14px] text-[12px] font-bold text-dark mb-1">
							Open Office Hours
						</h4>
						<div className="ff-poppins lg:text-[16px] md:text-[14px] text-[12px] font-normal -text-dark mb-12">
							<p>M-F: 9am – 6pm S-S:</p>
							<p>10am – 4pm</p>
						</div>
						<h4 className="ff-outift lg:text-[16px] md:text-[14px] text-[12px] font-bold text-dark mb-1">
							Get in Touch
						</h4>
						<div className="ff-poppins lg:text-[16px] md:text-[14px] text-[12px] font-normal -text-dark mb-12">
							<p>sbk@mail.com</p>
							<p>(+62) 882 - 1355 -0772</p>
						</div>
						<IconSocialMedia />
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
