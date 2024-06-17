import Image_Slider_Data from './image_slider_data';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./_image_slider.scss";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const Image_Slider = () => {
	return (
		<Swiper 
			className="image_slider_container container-md mt-5 rounded-2 overflow-hidden p-0"
			modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
		>
			{
				Image_Slider_Data.map((image) => {
					return (
						<SwiperSlide key={image.id}><Image src={image.image} alt="image" className="w-100 h-100"/></SwiperSlide>
					)
				})
			}
		</Swiper>
	)
}

export default Image_Slider;