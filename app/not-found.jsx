import Link from "next/link";

const NotFound = () => {
	return (
		<main className="not_found_page d-flex justify-content-center align-items-center">
			<section className="text-center">
				<h1 className="mb-4">Page Not Found :(</h1>
				<p className="text-secondary mb-4">Uh oh, we can't seem to find the page you're looking for. Try going back to Home page or see our <Link href={"/contact-us"}>Contact Us</Link> for more information </p>
				<button type="button" id="home_page_btn" className="px-3 py-2 rounded-1">Home Page</button>
			</section>
		</main>
	);
};

export default NotFound;