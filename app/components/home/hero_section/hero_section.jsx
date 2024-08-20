"use client";
import "./_hero_section.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {

	const router = useRouter();

	return (
		<section className="hero_section container mt-4">
			<div className="row row-cols-1 row-cols-lg-2 row-gap-3">
				<div className="col">
					<Image src="/images/home/hero_section/hero-section.jpg" alt="hero_section" width={635} height={480} className="w-100 h-100" onClick={() => router.push("/products")}/>
				</div>
				<div className="col d-flex justify-content-evenly align-items-start flex-column">
				<h1>Welcome To The Arsham Store</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aut, maiores vitae labore minus nesciunt.</p>
					<button type="button" id="btn_shop_now" className="px-4 py-2" onClick={() => router.push("/products")}>Shop Now</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;