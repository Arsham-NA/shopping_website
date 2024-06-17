"use client"
import { useState, useEffect } from "react";
import "./_back_to_top.scss";
import { FaAngleUp } from "react-icons/fa6";


const Back_To_Top = () => {

	const [back_to_top, setBack_to_top] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if(window.scrollY > 200) {
				setBack_to_top(true)
			}
			else {
				setBack_to_top(false)
			}
		})
	}, []);


	return (
		<div className={`back_to_top_border ${back_to_top ? "active" : undefined}`} onClick={() => window.scroll(0, 0)}>
			<FaAngleUp className="back_to_top_icon"/>
		</div>
	)
}

export default Back_To_Top;