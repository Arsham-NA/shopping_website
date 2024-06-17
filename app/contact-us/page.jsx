import "./_contact_us.scss";
import { BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot, } from "react-icons/fa6";
const Contact_Us = () => {
	return (
		<div className="contact_us_container mx-auto row row-cols-1 row-cols-md-2 rounded-2 overflow-hidden mt-4">
			<form className="col contact_us_form col-md-7 p-3">
				<h5>Send a message</h5>
				<div className="row">

					<div className="col-12 col-sm-6">
						<div className="form-floating mt-3">
							<input type="text" className="form-control" id="floatingInput" placeholder="first name" />
							<label for="floatingInput">First Name</label>
						</div>
					</div>
					
					<div className="col-12 col-sm-6">
						<div className="form-floating mt-3">
							<input type="text" className="form-control" id="floatingInput" placeholder="last name" />
							<label for="floatingInput">Last Name</label>
						</div>
					</div>

					<div className="col-12">
						<div className="form-floating mt-3">
							<input type="email" className="form-control" id="floatingInput" placeholder="Address@Example.com" />
							<label for="floatingInput">Email</label>
						</div>
					</div>
					
					<div className="col-12">
						<div className="form-floating mt-3">
							<input type="number" className="form-control" id="floatingInput" placeholder="09123456789" />
							<label for="floatingInput">+98</label>
						</div>
					</div>
					

					<div className="col-12">
						<div className="form-floating mt-3">
							<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: "200px"}}></textarea>
							<label for="floatingTextarea">Write your message here...</label>
						</div>
					</div>

				</div>
				<button type="submit" className="btn btn_submit mt-3 rounded-1">Send</button>
			</form>

			{/* contact info */}
			<div className="col contact_info col-md-5 px-4 py-5 d-flex flex-column justify-content-center align-items-start row-gap-5">
				<h4>Contact Info</h4>
				<div className="d-flex align-items-center">
				<div className="icons_border"><FaLocationDot className="w-50 h-50"/></div>
					<h5 className="ms-3">Lorem ipsum dolor sit a</h5>
				</div>
				<div className="d-flex align-items-center">
					<div className="icons_border"><BsEnvelopeFill className="w-50 h-50"/></div>
					<h5 className="ms-3">arsham.naghash<br/>@yahoo.com</h5>
				</div>
				<div className="d-flex align-items-center">
				<div  className="icons_border"><BsTelephoneFill className="w-50 h-50"/></div>
					<h5 className="ms-3">+989335593213</h5>
				</div>
			</div>
		</div>
	)
}

export default Contact_Us;