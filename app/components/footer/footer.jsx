"use client";
import "bootstrap/dist/js/bootstrap";
import "./_footer.scss";
import { BsInstagram, BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { useSelector } from "react-redux";
import Link from "next/link";

const Footer = () => {

  const dark_mode = useSelector((state) => state.Dark_Mode.dark_mode)

	return (
	  <footer className="w-100 footer mt-4"> 
			<div className="row row-cols-2 row-cols-md-4">
				<section>
					<ul className="w-100 h-100 p-0 m-0">
						<h2 className="fs-6"><Link href={"/"}>Customer Service</Link></h2>
						<li><Link href={"/"}>Contact Us</Link></li>
						<li><Link href={"/"}>Order Status</Link></li>
						<li><Link href={"/"}>Shopping</Link></li>
						<li><Link href={"/"}>Price Adjsutments</Link></li>
						<li><Link href={"/"}>Gift Cards</Link></li>
						<li><Link href={"/"}>FAQ</Link></li>
						<li><Link href={"/"}>Products Recalls</Link></li>
					</ul>
				</section>
				<section >
					<ul className="w-100 h-100 p-0 m-0">
						<h2 className="fs-6"><Link href={"/about-us"}>About Us</Link></h2>
						<li><Link href={"/"}>All Brands</Link></li>
						<li><Link href={"/"}>Careers</Link></li>
						<li><Link href={"/"}>Corporate Social Responsibility</Link></li>
						<li><Link href={"/"}>Get Email Updates</Link></li>
						<li><Link href={"/"}>Price Adjsutments</Link></li>
						<li><Link href={"/"}>Website Blog</Link></li>
						<li><Link href={"/"}>The Thread</Link></li>
						<li><Link href={"/"}>Nordy Podcast</Link></li>
					</ul>
				</section>
				<section>
					<ul className="w-100 h-100 p-0 m-0">
						<h2 className="fs-6"><Link href={"/"}>Store & Services</Link></h2>
						<li><Link href={"/"}>Find a Store</Link></li>
						<li><Link href={"/"}>Alteration & Tailoring</Link></li>
						<li><Link href={"/"}>Pop-In Shop</Link></li>
						<li><Link href={"/"}>Virtual Events</Link></li>
						<li><Link href={"/"}>SPA Website</Link></li>
						<li><Link href={"/"}>Website Restaurants</Link></li>
						<li><Link href={"/"}>Website Local</Link></li>
						<li><Link href={"/contact-us"} className="contact_us">Contact-us</Link></li>
					</ul>
				</section>
				<section className="section_4">
					{/* subscribe_section */}
					<h5 className="m-0 p-0">Subscribe To Get Updates</h5>
					<div className="row row-gap-2 column-gap-2 w-100 p-0">
						<div className="col-12 col-xl-7 p-0 d-flex justify-content-center align-items-center">
							<input type="email" name="input_subscribe" className="form-control" placeholder="Email Address"/>
						</div>
						<div className="container_btn col-12 col-xl-auto p-0">
							<button className="btn_subscribe">Subscribe</button>
						</div>
					</div>

					{/* follow us */}
					<div className="w-100">
					<h3 className="mb-4">Follow us</h3>
						<div className="social_media">
							<Link href={"/"}><BsInstagram /></Link>
							<Link href={"/"}><BsFacebook /></Link>
							<Link href={"/"}><BsGithub /></Link>
							<Link href={"/"}><BsTwitter /></Link>
						</div>
					</div>
				</section>
			</div>
    </footer>
	)
}

export default Footer;