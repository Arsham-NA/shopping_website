"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const Image_Slider = () => {

	const data = [
		{
			id: 1,
			image: "/images/home/image_slider/image-1.webp",
			alt: "image-1"
		},
		{
			id: 2,
			image: "/images/home/image_slider/image-1.webp",
			alt: "image-1"
		},
		{
			id: 3,
			image: "/images/home/image_slider/image-1.webp",
			alt: "image-1"
		},
	];

	return (
		<Swiper 
			className="slider_container container-md mt-5 rounded-2 overflow-hidden p-0"
			modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
		>
			{
				data.map((item) => {
					return (
						<SwiperSlide key={item.id} style={{cursor: "pointer"}}><Image src={item.image} alt={item.alt} width={1608} height={400} className="w-100 h-100"/></SwiperSlide>
					)
				})
			}
		</Swiper>
	)
}

export default Image_Slider;

