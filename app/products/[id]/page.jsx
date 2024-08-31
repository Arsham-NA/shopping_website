import "./_product.scss";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";
import Image from "next/image";
import AddToCartBtn from "./add_to_cart_btn/add_to_cart_btn";



const Product = async({params}) => {

	const fetch_data = async() => {
		const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
		return response.data;
	};
	
	const product = await fetch_data();
	
	return (
		<>
			{/* Liste Kalaha */}
			<section className="col-8 container_product mx-auto p-0 my-4 overflow-hidden rounded-3">
				<div id="product" className="row row-cols-1 row-cols-md-2 py-3 bg-white">
					<div className="col d-flex justify-content-center align-items-center position-relative" style={{maxWidth: "400px"}}>
						<Image src={product.image} alt={product.title} width={1200} height={800} className="object-fit-contain w-100 h-100 p-5" />
					</div>
					<div className="col d-flex align-items-center justify-content-center border-start">
						<span className="w-100 h-100 p-4 d-flex flex-column justify-content-center align-items-start row-gap-3 row-gap-lg-5">
							<h5>{product.title}</h5>
							<ul className="p-0 m-0 d-flex flex-column justify-content-center align-items-start row-gap-3 row-gap-lg-5">
								<li><span className="text-secondary">Price:</span> {product.price} $</li>
								<li><span className="text-secondary">Category:</span> {product.category}</li>
								<li><span className="text-secondary">Rate: </span>{product.rating.rate} <BsStarFill className="mb-1"/></li>
								{product.rating.count > 0 ? <li className="text-success fw-bold fs-5">Available</li> : <li  className="text-danger">Unavailable</li> }
							</ul>
							<h6 className="text-justify"><span className="text-secondary d-block mb-1">Description: </span>{product.description}</h6>
							<AddToCartBtn product={product} count={product.rating.count}/>
						</span>
					</div>
				</div>
			</section>
		</>
	)
}

export default Product