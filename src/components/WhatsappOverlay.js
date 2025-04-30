"use client";
import iconWhatsapp from "@/assets/whatsappButton/whatsapp-over.svg";
import iconClose from "@/assets/whatsappButton/close.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
function WhatsappOverlay() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {}, []);
	const buttonClick = () => {
		setIsVisible(false);
	};
	return (
		<div className="flex gap-2 items-center fixed	z-50 right-0 bottom-20 ">
			{/* container text */}
			<div
				className={`${
					isVisible
						? "flex gap-2.5 items-center px-2 py-3 bg-white rounded-[8px] shadow-2xs"
						: "hidden"
				}`}
			>
				<div className="flex flex-col gap-1 text-[#2565AA] font-semibold text-[14px]">
					<span>Having a problem? if you have any</span>
					<span>question please let us know!</span>
				</div>
				<Image
					src={iconClose}
					alt="Icon Close"
					onClick={buttonClick}
					className="cursor-pointer h-auto w-[20px]"
				/>
			</div>
			<Image
				src={iconWhatsapp}
				alt="Icon Whatsapp"
				className="w-auto h-[80px] cursor-pointer"
			/>
		</div>
	);
}

export default WhatsappOverlay;
