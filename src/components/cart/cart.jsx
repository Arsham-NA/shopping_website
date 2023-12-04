import "./sass/cart.css"
import { useContext, useState } from "react";
import Context_Cart from "../../contexts/cart";
import { FaAngleRight } from "react-icons/fa6";

const Cart = () => {

	const {items, add_item, delete_item, delete_cart, product_quantity, total_price} = useContext(Context_Cart);

	
	return (
		<>
		{
			//cart vahghti khali hast
			items.length === 0 ? <h1 className="d-flex justify-content-center align-items-center" style={{width: "100vw", height:"100vh"}}>Your Cart Is Empty</h1> 
			: 
			//cart vahghti khali nist
			<div id="container_cart" className="col-11 col-md-10 mx-auto p-0 bg-white mt-3 d-flex flex-column justify-content-center align-items-center row-gap-2 rounded-3 ">
				{	
					items.map((product) => {
						return (
							<div className="col-10 d-flex flex-row justify-content-between align-items-center p-3 border-bottom gap-3">
								<div className="col-2 d-flex justify-content-center align-items-center">
									<img src={product.image} alt="product_image" className="object-fit-contain" style={{width:"100px", height:"90px"}}/>
								</div>
								<div className="w-100">
									<h6>{product.title}</h6>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center">
									<button type="button" className="btn btn-danger px-2 py-1 px-md-3 py-md-2" onClick={() => delete_item(product)}>-</button>
									<h5 className="m-2">{product.quantity}</h5>
									<button type="button" className="btn btn-success px-2 py-1 px-md-3 py-md-2" onClick={() => add_item(product)}>+</button>
								</div>
									<h6 className="m-0">{product.price * product.quantity}$</h6>
							</div>
						)
					})
				}
				<div className="w-100 d-flex justify-content-evenly align-items-center py-3">
					<button type="button" className="btn btn-danger" onClick={() => delete_cart()}>Delete Cart</button>
					<h5>Total Price: {total_price(items)}$</h5>
					<button type="button" id="btn-purchase" className="btn">Purchase
					<FaAngleRight style={{width: "1rem", height: "1rem"}} />
					</button>
				</div>
			</div>
		}
			
		</>
	)
}

export default Cart;