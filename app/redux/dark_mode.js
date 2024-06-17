"use client";
import { createSlice } from "@reduxjs/toolkit";

const get_theme_ls = () => {
	const data = localStorage.getItem("dark_mode");
	if(data) {
		return JSON.parse(data);
	}
	else {
		return false;
	}
}

const Dark_Mode = createSlice({
	name: "dark_mode",
	initialState: {dark_mode: get_theme_ls()},
	reducers: {
		change_theme: (state) => {
			if(state.dark_mode === false) {
				state.dark_mode = true;
				localStorage.setItem("dark_mode", JSON.stringify(state.dark_mode));
			}
			else if(state.dark_mode === true) {
				state.dark_mode = false;
				localStorage.setItem("dark_mode", JSON.stringify(state.dark_mode));
			}
		}
	},
});

export default Dark_Mode.reducer;
export const {change_theme} = Dark_Mode.actions;