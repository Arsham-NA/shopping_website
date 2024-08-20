"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TopCategories = () => {

	const router = useRouter();

	return (
		<section className="container-fluid mt-5" id="top_categories_label">
			<h2 className="mb-3 fs-1">Top Categories</h2>
			<div className="row row-cols-1 row-cols-md-2 row-gap-3"> 
				<div className="col position-relative">
					<Image src="/images/home/top_categories/image-1.webp" alt="image_1" width={1675} height={1116} className="w-100 h-100 rounded-2" style={{cursor: "pointer"}} onClick={() => router.push("/products")} />
					<h3 className="position-absolute bottom-0 mb-3 ms-3 text-dark fs-4" >CASUAL CHIC</h3>
				</div>
				<div className="col position-relative">
					<Image src="/images/home/top_categories/image-2.webp" alt="image_2" width={1675} height={1116} className="w-100 h-100 rounded-2" style={{cursor: "pointer"}} onClick={() => router.push("/products")}/>
					<h3 className="position-absolute bottom-0 mb-3 ms-3 text-white fs-4">50 YEARS OF TIMBERLAND</h3>
				</div>
			</div>
		</section>
	);
};

export default TopCategories;