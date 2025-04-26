import HeroTop from "@/components/HeroTop/page";
import Banner from "@/components/Banner";
import ButtonToTop from "@/components/ButtonToTop";
import Clients from "@/components/Clients";
import HeroBanner from "@/components/HeroBanner";
import WhatsappOverlay from "@/components/WhatsappOverlay";

export default function page() {
	return (
		<div className="mb-14">
			<HeroBanner
				title={"Let's See All of Our Clients"}
				content={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. "
				}
				position={"left"}
				image={"/hero-clients.jpg"}
			/>
			<div className="mb-14"></div>
			<HeroTop
				title={"Get To Know"}
				titleBlue={"About Our Clients"}
				subTitle={"ABOUT CLIENT"}
				text1={`Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit.`}
				text2={`Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.`}
			/>

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
