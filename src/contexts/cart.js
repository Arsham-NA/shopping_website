import { createContext, useState, useContext } from "react";import Product from "../components/product/product";
;

const Context_Cart = createContext(null);

export const Context_Cart_Provider = ({children}) => {
	const [items, setItems] = useState([]);

	const add_item = (product) => {
		// neshon dadane avalin araye az har item ke length 0 mishe va bishtarin quantity ro dare
		const items_filter = items.filter(item => item.id === product.id)[0];
		
		//age item too filter kardane ma vojod nadasth item misaze
		if(items_filter === undefined) {
			setItems([...items, {id: product.id, title: product.title, image: product.image,price: product.price, quantity: 1}])
		}
		// age item bood quantitiy ro yeki ezafe mikone
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
		if (items_filter.quantity < 1){
			setItems(items.filter(item => item.id !== product.id))
		}
		
	}
	const delete_cart = () => {
		setItems([])
	}


	const total_price = (items) => {
		let sum = 0;
		items.forEach((item) => {
			sum += item.price * item.quantity;
		})
		return sum;
	}


	return <Context_Cart.Provider value={{items, add_item, delete_item, delete_cart, total_price}}>{children}</Context_Cart.Provider>
}

export default Context_Cart;
