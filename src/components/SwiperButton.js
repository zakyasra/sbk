import React from "react";
import { useSwiper } from "swiper/react";
const SwiperButton = () => {
	const swiper = useSwiper();
	return (
		<div className="swiper-flex gap-5">
			<button
				onClick={() => swiper.slidePrev()}
				className="bg-amber-800 w-80 h-40"
			>
				PREV
			</button>
			<button
				onClick={() => swiper.slideNext()}
				className="bg-blue-700 w-80 h-40"
			>
				NEXT
			</button>
		</div>
	);
};

export default SwiperButton;
