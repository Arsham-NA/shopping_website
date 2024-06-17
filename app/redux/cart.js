"use client";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const get_cart_ls = () => {
	const data = localStorage.getItem("cart")
	if(data) {
		return JSON.parse(data);
	}
	else {
		return [];
	}
}

const Cart_Items_Slice = createSlice({
	name: "cart",
	initialState: {cart_items: get_cart_ls()},
	reducers: {
		add_item: (state, action) => {
			const cart_items_filter = state.cart_items.filter((item) => item.id === action.payload.id)[0];

			if(cart_items_filter === undefined) {
				//state.cart_items.push({...action.payload, quantity: 1});
				state.cart_items = [...state.cart_items, {...action.payload, quantity: 1}];
			}

			else {
				state.cart_items.map((item) => {
					if(item.id === action.payload.id) {
						item.quantity += 1;
						return item;
					}
					else {
						return item;
					}
				})
			};

			localStorage.setItem("cart", JSON.stringify(state.cart_items));
		},

		delete_item: (state, action) => {
			state.cart_items.map((item) => {
				if(item.id === action.payload.id) {
					item.quantity -= 1;
					return item;
				}
				else {
					return item;
				}
			});

			const cart_items_filter = state.cart_items.filter((item) => item.id === action.payload.id)[0];
			if(cart_items_filter.quantity <= 0) {
				state.cart_items = state.cart_items.filter((item) => item.id !== action.payload.id);
			};
			localStorage.setItem("cart", JSON.stringify(state.cart_items));
		},

		delete_cart: (state) => {
			state.cart_items = [];
			localStorage.setItem("cart", JSON.stringify(state.cart_items));
		},

	}
});

export default Cart_Items_Slice.reducer;
export const {add_item, delete_item, delete_cart} = Cart_Items_Slice.actions;