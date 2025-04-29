/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import HeroBanner from "@/components/HeroBanner";
import Title from "@/components/HeroTop/Title";
import OurProducts from "@/components/OurProducts";
import React, { useState } from "react";

function page() {
	const [search, setSearch] = useState("");

	return (
		<div>
			<HeroBanner
				search={search}
				setSearch={setSearch}
				title={"Explore Our"}
				title2={"Greatest Product"}
				position={"center"}
				image={"/hero-product.jpg"}
				content={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. "
				}
			/>
			<OurProducts search={search} pagination={true} />
		</div>
	);
}

export default page;
