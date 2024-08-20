"use client";
import "./_home.scss";
import Image from "next/image";
import image_3 from "./images/home/2310_BM_Paul-Green2.webp";
import image_4 from "./images/home/2310_BM_GEOX.webp";
import image_5 from "./images/home/Zeichenfläche 5.webp";
import image_6 from "./images/home/Clarks_BM_23.webp";
import Image_Slider from "./components/home/image_slider/image_slider";
import { useSelector } from "react-redux";
import Designers_Slider from "./components/designers_slider/designers_slider";
import HeroSection from "./components/home/hero_section/hero_section";
import TopCategories from "./components/home/top_category/top_categories";


const Home = () => {

	const dark_mode = useSelector((state) => state.Dark_Mode.dark_mode);

  return (
    <main className={`px-3 home_page`}>
      {/* hero section */}
			<HeroSection />

			{/* top categories */}
			<TopCategories />

			<Image_Slider />

			{/* top brands */}
			<section className="container-fluid mt-5">
				<h1 className="mb-3">Top Brands</h1>
				<div className="row row-cols-2 row-cols-lg-4 row-gap-3">
					<div className="col">
						<Image src={image_3} alt="image_3" width={888} height={1333} className="w-100 h-100" />
					</div>
					<div className="col">
						<Image src={image_4} alt="image_4" width={888} height={1333} className="w-100 h-100" />
					</div>
					<div className="col">
						<Image src={image_5} alt="image_5" width={888} height={1333} className="w-100 h-100" />
					</div>
					<div className="col">
						<Image src={image_6} alt="image_6" width={888} height={1333} className="w-100 h-100" />
					</div>
				</div>
			</section>

			{/* designers slider */}
			<h1 className="mt-5">Top Designers</h1>
			<Designers_Slider />
    </main>
  )
}

export default Home;