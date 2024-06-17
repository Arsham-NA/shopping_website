"use client";
import { createContext, useState, useEffect } from "react";

const Cart_Context = createContext();

const get_cart_ls = () => {
	const data = localStorage.getItem("cart"); 
	if(data) {
		return JSON.parse(data);
	}
	else {
		return [];
	}
}
export const Cart_Context_Provider = ({children}) => {

	const [items, setItems] = useState(get_cart_ls());

	//ba taghire har item ono dakhele local storage save mikonim
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(items));
	}, [items])
	

	const add_item = (product) => {

		// neshon dadane avalin araye az har item ke length 0 mishe va bishtarin quantity ro dare
		const items_filter = items.filter(item => item.id === product.id)[0];
		
		//age item too filter kardane ma vojod nadasth item misaze
		if(items_filter === undefined) {
			setItems([...items, {...product, quantity: 1}]);
		}
		//age item bood quantitiy ro yeki ezafe mikone
		else {
			setItems(
				items.map((item) => {
				if(item.id === product.id) {
					item.quantity += 1;
					return item;
				}

				else {
					return item;
				}
			}))
		}

		
	
		//raveshe dovom
		// const exist_item = items.find((item) => item.id === product.id)
		// if(exist_item) {
		// 	setItems (
		// 		items.map((item) => {
		// 			if(item.id === product.id) {
		// 			 return {...exist_item, quantity: exist_item.quantity + 1 }
		// 			}
		// 			else {
		// 				return item;
		// 			}
		// 		})
		// 	)
		// }
		// else {
		// 	setItems([...items, {...product, quantity: 1}]) ;
		// }
	
		
	}
	const delete_item = (product) => {
		setItems(
			items.map((item) => {
			if(item.id === product.id) {
				item.quantity -= 1;
				return item;
			}

			else {
				return item;
			}
		}))

		// age item ha 0 shod az list hazf mishe
		const items_filter = items.filter(item => item.id === product.id)[0];
		if (items_filter.quantity <= 0){
			setItems(items.filter(item => item.id !== product.id))
		}

	}
	const delete_cart = () => {
		setItems([]);
	}


	const total_price = (items) => {
		let sum = 0;
		items.forEach((item) => {
			sum += item.price * item.quantity;
		})
		return sum;
	}

	return <Cart_Context.Provider value={{items, add_item, delete_item, delete_cart, total_price}}>
		{children}
	</Cart_Context.Provider>
}

export default Cart_Context;