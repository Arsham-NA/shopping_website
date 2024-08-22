"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./_designers_slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Designers_Slider = () => {

	const [designers, setDesigners] = useState([]);

	useEffect(() => {
		const fetch_data = async () => {
			await axios.get("https://reqres.in/api/users?page=1")
			.then(response => setDesigners(response.data.data))
			.catch(error => console.log(error));
		};

		fetch_data();
;
	}, []);

	return (
		
			<Swiper
				className="slider_container designers_container w-100 rounded-2 mt-4 w-100 pb-3"
				modules={[Navigation, Pagination]}
				spaceBetween={0}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				breakpoints={{
					768: {
						slidesPerView: 2
					},
					992: {
						slidesPerView: 3
					}
				}}
			>

			{
				designers.map((designer) => {
					return (
						<SwiperSlide key={designer.id} className=" p-4">
							<div className="designer rounded-1">
								<Image src={designer.avatar} alt="designer_avatar" width={100} height={100} className="rounded-circle"/>
								<h5 className="mt-3">{designer.first_name} {designer.last_name}</h5>
								<p>{designer.email}</p>
							</div>
						</SwiperSlide>
					)
				})
			}

			</Swiper>

	);
};

export default Designers_Slider;