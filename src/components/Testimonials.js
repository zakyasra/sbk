import Image from "next/image";
import fotoTestimonials from "@/assets/testimonials/testimonials.png";
import iconQuotation from "@/assets/testimonials/icon-quotation.svg";
import "../styles/testimonials.scss";
const Testimonials = () => {
	return (
		<article
			id="testimonials"
			className="md:mb-20 mb-12 xl:px-16 lg:px-14 md:px-12 sm:px-9 px-6"
		>
			<div className="testimonials-container ">
				<div className="left-section">
					<div className="title">TESTIMONIALS</div>
					<div className="sub-title">Hear what our clients say</div>
					<div className="desc">
						Here are some testimonials from our best clients
					</div>
					{/* <!-- card 1--> */}
					<div className="card">
						<div className="card-desc">
							<p>
								Working with Eventure Creations was a fantastic experience.
								Their attention to detail and professionalism made our event a
								success.
							</p>
							<Image
								src={iconQuotation}
								alt="icon-quotation"
								className="icon-quotation"
							/>
						</div>
						<div className="card-main">
							<Image
								src={fotoTestimonials}
								alt="person 1"
								className="profile-picture"
							/>
							<div className="card-details">
								<div className="card-name">Yakazumi Tachi</div>
								<div className="card-job">
									Product Manager at Eventure Creations
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="right-section">
					{/* <!-- card 2--> */}
					<div className="card">
						<div className="card-desc">
							<p>
								Their team went above and beyond to ensure everything ran
								smoothly. I would highly recommend them for any event.
							</p>
							<Image
								src={iconQuotation}
								alt="icon-quotation"
								className="icon-quotation"
							/>
						</div>
						<div className="card-main">
							<Image
								src={fotoTestimonials}
								alt="person 1"
								className="profile-picture"
							/>
							<div className="card-details">
								<div className="card-name">David Laker</div>
								<div className="card-job">Intern at Eventure Creations</div>
							</div>
						</div>
					</div>
					{/* <!-- card 3--> */}
					<div className="card">
						<div className="card-desc">
							<p>
								The event was flawless, and their team made everything
								effortless. We couldn&apos;t be happier with the results.
							</p>
							<Image
								src={iconQuotation}
								alt="icon-quotation"
								className="icon-quotation"
							/>
						</div>
						<div className="card-main">
							<Image
								src={fotoTestimonials}
								alt="person 1"
								className="profile-picture"
							/>
							<div className="card-details">
								<div className="card-name">Smash Josh</div>
								<div className="card-job">
									Lead Marketing at Eventure Creations
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Testimonials;
