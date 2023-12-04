import "./register.css"
const Register = () => {
	return ( 
	<>  
			<form className="mt-5" id="form_register">
					<fieldset className="container-fluid py-4 px-3">
							<h1 className="text-center p-3 m-0">Sign Up</h1>
							<div className="row">
									<div className="col-6">
											<div className="mb-3">
													<label htmlFor="name" className="form-label">Name</label>
													<input type="text" className="form-control" id="name" />
											</div>
									</div>
									<div className="col-6">
											<div className="mb-3">
													<label htmlFor="last_name" className="form-label">Last Name</label>
													<input type="text" className="form-control" id="last_name" />
											</div>
									</div>
									</div>   

									<div className="col-12">
											<div className="mb-3">
													<label htmlFor="phone_number" className="form-label">Phone Number</label>
													<input type="text" className="form-control" id="phone_number" placeholder="09123456789" maxLength={11}/>
											</div>
									</div>

									 <div className="col-12">
											<div className="mb-3">
													<label htmlFor="email" className="form-label">Email</label>
													<input type="email" className="form-control" id="email" placeholder="Example@Example.com"/>
											</div>
									</div>

									<div className="col-12">
									<div className="mb-3">
											<label htmlFor="password" className="form-label">Password</label>
											<input type="password" className="form-control" id="password" placeholder="Minimum 8 Character"/>
									</div>
							</div>
						 <div className="d-flex justify-content-center">
									<div className="btn btn-primary">Sign Up</div>
						 </div>
					</fieldset>   
			</form>
	</>
	 );
}

export default Register;