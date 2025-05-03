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
				linkId="see-products"
				search={search}
				setSearch={setSearch}
				title={"Explore Our"}
				title2={"Greatest Product"}
				position={"center"}
				image={"/hero-product.jpg"}
				content={
					"Browse our portfolio of industry‑leading network and wiring products, including high‑performance fiber patch cords, media converters, structured cabling kits, and branded solutions from Cisco, APC, and Techwise."
				}
			/>
			<OurProducts search={search} pagination={true} />
		</div>
	);
}

export default page;
