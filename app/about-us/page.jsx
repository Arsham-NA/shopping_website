import Image from "next/image";

export const metadata = {
	title: "About Us",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum voluptatibus, natus deleniti nostrum in."
}

const About = () => {
	return (
		<main className="about_us_page container-fluid mt-2">

			<section className="section_1 row row-cols-1 row-cols-sm-2 px-2 py-5 px-lg-5">
				<div className="col p-3 p-lg-5 d-flex flex-column justify-content-center align-items-start">
					<h1 className="mb-3">About Us</h1>
					<p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum voluptatibus, natus deleniti nostrum in.</p>
				</div>
				<div className="col p-lg-5">
					<Image src="/images/about_us/image-1.webp" alt="image-1" width={800} height={534} className="w-100 h-100 object-fit-cover"/>
				</div>
			</section>

			<section className="row row-gap-3 pt-5 pb-sm-4 px-2 bg-white justify-content-center align-items-center">
				<div className="col-12 col-sm-5 p-0">
					<Image src="/images/about_us/image-2.webp" alt="image-2" width={600} height={400} className="w-100 h-100 object-fit-cover"/>
				</div>
				<div className="col-12 col-sm-5 px-4 d-flex flex-column justify-content-center align-items-start">
					<h2 className="fs-4 mb-3">Our Mission: Helping Millions of Organizations Grow Better</h2>
					<p className="text-secondary">We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!</p>
				</div>
			</section>

			<section className="row row-gap-3 py-5 px-2 bg-white justify-content-center align-items-center">
				<div className="col-12 col-sm-5 p-0 order-sm-2">
					<Image src="/images/about_us/image-3.webp" alt="our-story" width={500} height={333} className="w-100 h-100 object-fit-cover"/>
				</div>
				<div className="col-12 col-sm-5 px-4 d-flex flex-column justify-content-center align-items-start order-sm-1">
					<h2 className="fs-4 mb-3">Our story</h2>
					<p className="text-secondary">In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads, they wanted helpful information. In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.</p>
				</div>
			</section>
		</main>
	);
};

export default About;