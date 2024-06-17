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
	const [number_slider, setNumber_slider] = useState(3);


	

	useEffect(() => {
		const fetch_data = async () => {
			await axios.get("https://reqres.in/api/users?page=1")
			.then(response => setDesigners(response.data.data))
			.catch(error => console.log(error));
		};

		fetch_data();
		
		// slider number responsive
		window.innerWidth < 768 ? setNumber_slider(1) : setNumber_slider(3);
;
	}, []);

	return (
		
			<Swiper
				className="designers_container container-fluid rounded-2 mt-4"
				modules={[Navigation, Pagination]}
				spaceBetween={16}
				slidesPerView={number_slider}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>

			{
				designers.map((designer) => {
					return (
						<SwiperSlide key={designer.id}>
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