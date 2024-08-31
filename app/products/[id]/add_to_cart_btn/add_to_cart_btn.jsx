"use client";
import "./_add_to_cart_btn.scss";
import Cart_Context from "@/app/contexts/cart_context";
import { useContext } from "react";

const AddToCartBtn = ({product, count}) => {

	const {add_item} = useContext(Cart_Context);

const add_product_if_available = (product, count) => {
		if(count > 0) {
			add_item(product)
			alert("Added To Cart")
		}
		else {
			 alert("This Product Is Unavailable")
		}
	};

	return (
		<button id="add_to_cart_btn" className="btn text-white w-100" onClick={() => add_product_if_available(product, count)}>Add To Cart</button>
	);
};

export default AddToCartBtn;