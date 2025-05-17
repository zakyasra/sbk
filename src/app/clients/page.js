import HeroTop from "@/components/HeroTop/page";
import Banner from "@/components/Banner";
import ButtonToTop from "@/components/ButtonToTop";
import Clients from "@/components/Clients";
import HeroBanner from "@/components/HeroBanner";

export default function page() {
	return (
		<div className="mb-14 overflow-hidden">
			<HeroBanner
				linkId="clients-target"
				title={"Let's See All of Our Clients"}
				content={
					"Join leading clients in automotive, banking, education, telecommunications, manufacturing, government institutions, and non‑profits who trust our precision‑driven project delivery and proven expertise."
				}
				position={"left"}
				image={"/hero-clients.jpg"}
			/>
			<div className="mb-14"></div>
			<HeroTop
				id={"clients-target"}
				title={"Get To Know"}
				titleBlue={"About Our Clients"}
				subTitle={"ABOUT CLIENT"}
				text1={`Being the first in line of IT companies, SBK  has been entrusted by our precious clients to handle their project in IT sector. Our clients are composed by leading companies from various types of industries, such as automotive, banking, education, telecommunications, manufacturing, as well as government institution and non-profit oriented institution.`}
				text2={`SBK commitment is to develop IT solution that enable the customer to leverage and maximizing their existing technology investments through cost-effective alternatives in altering their IT so it can meet the company's business requirement. We believe that by delivering the best solution and high quality of services, it will enhance our customer's business competitiveness.`}
			/>
			<div className="xl:mb-32 md:mb-28 mb-20"></div>
			<Clients
				customText
				title={"See More"}
				titleBlue={"Our Clients"}
				subTitle={"OUR CLIENTS"}
			/>
			<Banner
				image={"/banner-contact.jpg"}
				title={"CONTACT US"}
				content={"Have Something In Mind?"}
				buttonText={"CONTACT US"}
				link={"/contact"}
			/>
		</div>
	);
}
