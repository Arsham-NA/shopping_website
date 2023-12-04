import "./sass/home.css";
import Products from "../products/products";
import { Link } from "react-router-dom";
import image_hero from "../../images/Screenshot 2023-11-28 190527.jpg";
import image_1 from "../../images/2311_ak_Paul-Green.webp";
import image_2 from "../../images/2310_ak_50TBL.webp";
import image_3 from "../../images/2310_BM_Paul-Green2.webp";
import image_4 from "../../images/2310_BM_GEOX.webp";
import image_5 from "../../images/Zeichenfläche 5.webp";
import image_6 from "../../images/Clarks_BM_23.webp";
import image_7 from "../../images/210fe1ca-e113-4deb-965d-e5c4050604f8.webp";

const Home = () => {
	
	return (
		<>
			<main className="px-4">
				{/* hero section */}
				<section className="container mt-4" id="hero_section">
					<div className="row row-cols-1 row-cols-lg-2 row-gap-3">
						<div className="col">
							<img src={image_hero} alt="..." className="img-fluid" />
						</div>
						<div className="col d-flex justify-content-evenly align-items-start flex-column">
						<h2>Welcome To The Arsham Store</h2>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aut, maiores vitae labore minus nesciunt.</p>
							<button type="button" id="btn_shop_now" className="px-4 py-2"><Link to={"/products"}>Shop Now</Link></button>
						</div>
					</div>
				</section>

				{/* top categories */}
				<section className="container-fluid mt-5">
					<h1 className="mb-3">Top Categories</h1>
					<div className="row row-cols-md-2 row-gap-3"> 
						<div className="position-relative">
							<Link to={"products"}><img src={image_1} alt="image_1" className="w-100 rounded-2"/></Link>
							<h4 className="position-absolute bottom-0 mb-3 ms-3 text-dark" style={{cursor: "pointer"}}>CASUAL CHIC</h4>
						</div>
						<div className="position-relative">
							<Link to={"/products"}><img src={image_2} alt="image_2" className="w-100 rounded-2" /></Link>
							<h4 className="position-absolute bottom-0 mb-3 ms-3 text-white" style={{cursor: "pointer"}}>50 YEARS OF TIMBERLAND</h4>
						</div>
					</div>
				</section>

				<div className="container-fluid mt-5">
						<Link to={"/products"} ><img src={image_7} alt="image_7" className="object-fit-cover w-100 rounded-2"/></Link>
				</div>

				{/* top brands */}
				<section className="container-fluid mt-5">
				<h1 className="mb-3">Top Brands</h1>
				<div className="row row-cols-2 row-cols-lg-4 row-gap-3">
					<img src={image_3} alt="image_3" />
					<img src={image_4} alt="image_4" />
					<img src={image_5} alt="image_5" />
					<img src={image_6} alt="image_6" />
				</div>
				</section>
				<Products />
				</main>
		</>
	)
}

export default Home;