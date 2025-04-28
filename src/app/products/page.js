import HeroBanner from "@/components/HeroBanner";
import Title from "@/components/HeroTop/Title";
import OurProducts from "@/components/OurProducts";
import React from "react";

function page() {
	return (
		<div>
			<HeroBanner
				search
				title={"Explore Our"}
				title2={"Greatest Product"}
				position={"center"}
				image={"/hero-product.jpg"}
				content={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. "
				}
			/>
			<OurProducts />
		</div>
	);
}

export default page;
