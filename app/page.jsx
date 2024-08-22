import Image from "next/image";
import ImageSlider from "./components/home/image_slider/image_slider";
import Designers_Slider from "./components/designers_slider/designers_slider";
import HeroSection from "./components/home/hero_section/hero_section";
import TopCategories from "./components/home/top_category/top_categories";

export const metadata = {
	title: "Online Shopping",
}

const Home = () => {
  return (
    <main className={`px-4 home_page`}>
      {/* hero section */}
			<HeroSection />

			{/* top categories */}
			<TopCategories />

			{/* best sellers */}
			<section className="w-100">
			<h2 className="w-100 text-center mt-5 mb-3">Best Sellers</h2>
			<ImageSlider />
			</section>

			{/* top brands */}
			<section className="container-fluid p-0 mt-5">
				<h2 className="mb-3 fs-1">Top Brands</h2>
				<div className="row row-cols-2 row-cols-lg-4 g-4">
					<div className="col">
						<Image src="/images/home/top_brands/image-1.webp" alt="image_1" width={888} height={1333} className="w-100 h-100" />
					</div>
					<div className="col">
						<Image src="/images/home/top_brands/image-2.webp" alt="image_2" width={888} height={1333} className="w-100 h-100" />
					</div>
					<div className="col">
						<Image src="/images/home/top_brands/image-3.webp" alt="image_3" width={888} height={1333} className="w-100 h-100" />
					</div>
					<div className="col">
						<Image src="/images/home/top_brands/image-4.webp" alt="image_4" width={888} height={1333} className="w-100 h-100" />
					</div>
				</div>
			</section>

			{/* designers slider */}
			<h2 className="mt-5 fs-1">Top Designers</h2>
			<Designers_Slider />
    </main>
  )
}

export default Home;