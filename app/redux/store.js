import { configureStore } from "@reduxjs/toolkit";
import Dark_Mode from "./dark_mode";
import Cart_Items_Slice from "./cart";



const store = configureStore({
	reducer: {
		Dark_Mode,
		Cart_Items_Slice,
	}
});

export default store;