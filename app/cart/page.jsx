"use client";
import "./_cart.scss";
import { useContext } from "react";
import { FaAngleRight, FaPlus, FaMinus } from "react-icons/fa6";
import Cart_Context from "../contexts/cart_context";
import { useSelector } from "react-redux";


const Cart = () => {
	
	const dark_mode = useSelector((state) => state.Dark_Mode.dark_mode);
	const {items, add_item, delete_item, delete_cart, total_price} = useContext(Cart_Context);

	return (
		<>
			{
				//cart vahghti khali hast
				items.length === 0 ? <h1 className="vw-100 vh-100 d-flex justify-content-center align-items-center">Your Cart Is Empty</h1>
				: 
				//cart vahghti khali nist
				<div className={`cart_page vw-100 vh-100 ${dark_mode ? "dark_mode" : undefined}`}>
					<div className="cart_container col-11 col-md-10 mx-auto p-0 mt-3 d-flex flex-column justify-content-center align-items-center row-gap-2 rounded-3">
						{	
							items.map((product) => {
								return (
									<div className="col-10 d-flex flex-row justify-content-between align-items-center py-3 border-bottom gap-3" key={product.id}>
										<div className="col-2 d-flex justify-content-center align-items-center">
											<img src={product.image} alt="product_image" className="object-fit-contain" style={{width:"100px", height:"90px"}}/>
										</div>
										<div className="w-100">
											<h6>{product.title}</h6>
										</div>
										<div className="col-2 d-flex justify-content-center align-items-center">
										<button type="button" className="btn_minus" onClick={() => delete_item(product)}><FaMinus className="w-50 h-50"/></button>
											<h5 className="m-2">{product.quantity}</h5>
											<button type="button" className="btn_plus" onClick={() => add_item(product)}><FaPlus className="w-50 h-50"/></button>
										</div>
											<h6 className="m-0">{product.price * product.quantity}$</h6>
									</div>
								)
							})
						}
						<div className="col-10 d-flex justify-content-between align-items-center py-3">
							<h5>Total Price: {total_price(items)}$</h5>
							<button type="button" id="btn-purchase" className="btn">Purchase
								<FaAngleRight style={{width: "1rem", height: "1rem"}} />
							</button>
						</div>
						<div className="col-10 d-flex justify-content-center align-items-center py-3 border-top">
							<button type="button" className="btn btn-danger px-5" onClick={() => delete_cart()}>Delete Cart</button>
						</div>
					</div>
				</div>
			}
		</>
	)
}
export default Cart;
