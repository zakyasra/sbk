"use client";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Navigation, Pagination } from "swiper/modules";
import SwiperButton from "@/components/SwiperButton";

export default function App() {
	const swiper = useSwiper();
	return (
		<>
			<Swiper
				slidesPerView={2}
				grid={{
					rows: 2,
				}}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Grid, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
				<SwiperButton />
			</Swiper>
		</>
	);
}
