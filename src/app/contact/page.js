"use client";
import IconSocialMedia from "@/components/IconSocialMedia";
import { useState } from "react";
import {
	FaArrowRight,
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function page() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isChecked, setIsChecked] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const company = form.company.value.trim();
		const name = form.name.value.trim();
		const number = form.number.value.trim();
		const email = form.email.value.trim();
		const project = form.project_detail.value.trim();

		if (!company || !name || !number || !email || !project) {
			toast.error("❌ Semua kolom wajib diisi.", {
				position: "top-right",
				autoClose: 3000,
			});
			return;
		}

		if (!isChecked) {
			toast.error("❌ Harap menyetujui Privacy Policy terlebih dahulu.", {
				position: "top-right",
				autoClose: 3000,
			});
			return;
		}

		const subject = encodeURIComponent("Pertanyaan Konsultasi");
		const body = encodeURIComponent(
			`Halo sales@sbk.co.id,\n\nSaya ingin bertanya mengenai proyek:\n\nCompany: ${company}\nName: ${name}\nPhone Number: ${number}\nEmail: ${email}\nProject Detail: ${project}`
		);

		window.location.href = `mailto:sankurniawana28@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<div>
			<div
				className={`ff-poppins xl:text-[64px] lg:text-[56px] md:text-[48px] sm:text-[36px] text-[32px] font-bold text-center hero-section w-full  text-white md:py-20 sm:py-16 py-14 xl:px-28 lg:px-24 md:px-20 sm:px-12 px-6`}
				style={{
					background: `url(/hero-download.jpg)`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: " center",
					backgroundSize: "cover",
				}}
			>
				<p>Contact Us</p>
			</div>
			<div className="content-container">
				<div className="flex md:flex-row flex-col md:gap-0 gap-12">
					<div className="md:w-1/2 lg:px-20 md:px-12 sm:px-9 px-6 xl:py-16 lg:py-12 py-6">
						<h3 className="text-secondary font-bold ff-outfit lg text-[24px] sm:mb-6 mb-2">
							CONTACT
						</h3>
						<div className="form">
							<h2 className="ff-poppins text-dark font-semibold lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] mb-12">
								Connect With Your Next Great Hire Today!
							</h2>
							<form onSubmit={handleSubmit}>
								<div className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 sm:gap-y-10 gap-y-6">
									<div>
										<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark mb-2">
											Company
										</p>
										<input
											name="company"
											type="text"
											placeholder="Company name..."
											className="input-contact rounded-[8px]"
										/>
									</div>
									<div>
										<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark sm:mb-2 mb-1">
											Name
										</p>
										<input
											name="name"
											type="text"
											placeholder="Your name..."
											className="input-contact rounded-[8px]"
										/>
									</div>
									<div>
										<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark mb-2">
											Phone Number
										</p>
										<input
											name="number"
											type="number"
											placeholder="+628..."
											className="input-pagination input-contact rounded-[8px]"
										/>
									</div>
									<div>
										<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark mb-2">
											Email
										</p>
										<input
											name="email"
											type="email"
											placeholder="yourmail@gmail.com"
											className="input-contact rounded-[8px]"
										/>
									</div>
								</div>
								<div className="my-12">
									<p className="ff-outfit font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-dark mb-2">
										Project Detail
									</p>
									<textarea
										name="project_detail"
										placeholder="Describe Your Project"
										className=" input-contact rounded-[8px]"
										style={{
											maxHeight: "77px",
											overflow: "auto",
										}}
									></textarea>
								</div>
								<div className="flex md:items-start items-center gap-4">
									<input
										onChange={() => setIsChecked(!isChecked)}
										type="checkbox"
										id="myCheckbox"
										className="w-min-[16px] h-min-[16px] md:h-[36px] h-[16px]  md:w-[36px] w-[16px]   accent-[#132e4c] outline-0 cursor-pointer"
									/>
									<label
										htmlFor="myCheckbox"
										className="cursor-pointer ff-poppins text-dark lg:text-[16px] md:text-[14px] text-[12px]"
									>
										By sending this form I confirm that I have read and accept
										the <span className="font-semibold">Privacy Policy</span>
									</label>
								</div>
								<button
									className="mt-5 ff-poppins flex items-center text-left w-fit gap-4 cursor-pointer  lg:ps-7 md:ps-5 ps-4 lg:pr-12 md:pr-9 pr-6 lg:py-4 md:py-2 sm:py-3.5 py-3 rounded-[10px] font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-white hover:text-[#2565AA] active:text-[#2565AA] bg-[#2565AA] hover:bg-white active:bg-white"
									style={{
										transition: ".4s all",
										border: "1px solid #2565AA",
									}}
									type="submit"
								>
									GET CONSULTATION
									<FaArrowRight className="text-[inherit] w-[24px] h-[24px]" />
								</button>
							</form>
							<ToastContainer />
						</div>
					</div>
					<div
						className="md:w-1/2 object-cover flex items-center justify-center py-12"
						style={{
							backgroundImage: "url(/bg-contact.jpg)",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					>
						<div className="flex flex-col xxl:w-[30%] xl:w-[35%] lg:w-[40%] md:w-[55%] sm:w-[60%] w-[80%]">
							<h3 className="ff-poppins xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px] font-bold text-dark mb-5">
								Contact Info
							</h3>
							<h4 className="ff-outift lg:text-[18px] md:text-[16px] text-[14px] font-bold text-dark mb-1">
								Our Office
							</h4>
							<p className="ff-poppins lg:text-[16px] md:text-[14px] text-[12px] font-normal -text-dark mb-12 text-justify">
								Apt. Istana Harmoni Lantai 1 #2Q Jl. Suropranoto No 2 Jakarta
								10130
							</p>
							<h4 className="ff-outift lg:text-[18px] md:text-[16px] text-[14px] font-bold text-dark mb-1">
								Open Office Hours
							</h4>
							<div className="ff-poppins lg:text-[16px] md:text-[14px] text-[12px] font-normal -text-dark mb-12">
								<p>M-F : 9am – 6pm </p>
								<p>S-S : 10am – 4pm</p>
							</div>
							<h4 className="ff-outift lg:text-[18px] md:text-[16px] text-[14px] font-bold text-dark mb-1">
								Get in Touch
							</h4>
							<div className="ff-poppins lg:text-[16px] md:text-[14px] text-[12px] font-normal -text-dark mb-12">
								<a href="mailto:sales@sbk.co.id?subject=pertanyaan&body=Halo%20sales@sbk.co.id%20saya%20ingin%20bertanya...">
									<p>sales@sbk.co.id</p>
								</a>
								<a
									href="https://wa.me/6281513008267?text=Halo%20*PT%20SUMBER%20BERKAT%20KOMPUTINDO*%20saya%20ingin%20bertanya "
									target="_blank"
									rel="noopener noreferrer"
								>
									<p>(+62) 815 - 130 - 08267</p>
								</a>
							</div>
							<IconSocialMedia />
						</div>
					</div>
				</div>
			</div>
			<div className="content-container mx-auto xl:px-[112px] xl:pt-[64px] lg:px-[86px]  lg:pt-[56px] md:px-[64px]  pt-[48px] sm:px-[48px]  px-[36px]">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.721743945769!2d106.8166768104835!3d-6.168003393793485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f523d9f98cdd%3A0xdc248eb960151db9!2sHarmoni%20Palace%20Apartment!5e0!3m2!1sen!2sid!4v1746772390065!5m2!1sen!2sid"
					className="mx-auto w-full md:h-[400px] sm:h-[300px] h-[250px]"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					style={{
						border: "0",
					}}
				></iframe>
			</div>
		</div>
	);
}

export default page;
