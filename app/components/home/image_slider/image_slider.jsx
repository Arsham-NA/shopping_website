"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

const ImageSlider = () => {

	const data = [
		{
			id: 1,
			image: "/images/home/image_slider/image-1.avif",
			alt: "image-1"
		},
		{
			id: 2,
			image: "/images/home/image_slider/image-2.webp",
			alt: "image-2"
		},
		{
			id: 3,
			image: "/images/home/image_slider/image-3.avif",
			alt: "image-3"
		},
	];

	const router = useRouter()


	return (
		<Swiper 
			className="slider_container container-md rounded-2 overflow-hidden p-0 border border-2 shadow-sm"
			modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
			style={{maxHeight: "350px"}}
		>
			{
				data.map((item) => {
					return (
						<SwiperSlide key={item.id} style={{cursor: "pointer"}} onClick={() => router.push("/products")}><Image src={item.image} alt={item.alt} width={2880} height={968} className="w-100 h-100"/></SwiperSlide>
					)
				})
			}
		</Swiper>
	)
}

export default ImageSlider;

