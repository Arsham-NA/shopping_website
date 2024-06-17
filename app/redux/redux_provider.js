"use client";
import store from "./store";
import { Provider } from "react-redux";


export const Redux_Provider = ({children}) => {
	return <Provider store={store}>{children}</Provider>
}
