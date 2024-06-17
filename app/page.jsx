"use client";
import "./_home.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image_hero from "./images/home/Screenshot 2023-11-28 190527.jpg";
import image_1 from "./images/home/2311_ak_Paul-Green.webp";
import image_2 from "./images/home/2310_ak_50TBL.webp";
import image_3 from "./images/home/2310_BM_Paul-Green2.webp";
import image_4 from "./images/home/2310_BM_GEOX.webp";
import image_5 from "./images/home/Zeichenfläche 5.webp";
import image_6 from "./images/home/Clarks_BM_23.webp";
import Image_Slider from "./components/image_slider/image_slider";
import { useSelector } from "react-redux";
import Designers_Slider from "./components/designers_slider/designers_slider";

const Home = () => {

	const dark_mode = useSelector((state) => state.Dark_Mode.dark_mode);
  const router = useRouter();

  return (
    <main className={`px-3 home_page`}>
      {/* hero section */}
			<section className="container mt-4 hero_section">
				<div className="row row-cols-1 row-cols-lg-2 row-gap-3">
					<div className="col">
						<Image src={image_hero} alt="image_hero" width={635} height={480} className="w-100 h-100" onClick={() => router.push("/products")}/>
					</div>
					<div className="col d-flex justify-content-evenly align-items-start flex-column">
					<h2>Welcome To The Arsham Store</h2>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aut, maiores vitae labore minus nesciunt.</p>
						<button type="button" id="btn_shop_now" className="px-4 py-2" onClick={() => router.push("/products")}>Shop Now</button>
					</div>
				</div>
			</section>

			{/* top categories */}
			<section className="container-fluid mt-5" id="top_categories_label">
				<h1 className="mb-3">Top Categories</h1>
				<div className="row row-cols-1 row-cols-md-2 row-gap-3"> 
					<div className="col position-relative">
						<Image src={image_1} alt="image_1" width={1675} height={1116} className="w-100 h-100 rounded-2" onClick={() => router.push("/products")}/>
						<h4 className="position-absolute bottom-0 mb-3 ms-3 text-dark" style={{cursor: "pointer"}}>CASUAL CHIC</h4>
					</div>
					<div className="col position-relative">
						<Image src={image_2} alt="image_2" width={1675} height={1116} className="w-100 h-100 rounded-2"  onClick={() => router.push("/products")}/>
						<h4 className="position-absolute bottom-0 mb-3 ms-3 text-white" style={{cursor: "pointer"}}>50 YEARS OF TIMBERLAND</h4>
					</div>
				</div>
			</section>

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