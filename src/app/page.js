import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import BannerOurProducts from "@/components/BannerOurProducts";
import OurProducts from "@/components/OurProducts";
import BannerContactUs from "@/components/BannerContactUs";
import ButtonToTop from "@/components/ButtonToTop";
import WhatsappOverlay from "@/components/WhatsappOverlay";
import Banner from "@/components/Banner";
export default function Home() {
	return (
		<div>
			<div className="xl:px-16 lg:px-14 md:px-12 sm:px-9 px-[24px]  xl:py-20 lg:py-16 md:py-10 py-[16px]">
				<HeroSection />
				<AboutUs />
				{/* <OurServices /> */}
			</div>
			<Testimonials />
			<Clients />
			<BannerOurProducts />
			<OurProducts />
			<Banner
				title={"CONTACT US"}
				content={"Have Something in Mind?"}
				buttonText={"CONTACT US"}
				image={"/banner-contact.jpg"}
				link={"/contact"}
			/>
		</div>
	);
}
