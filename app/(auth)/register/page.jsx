"use client";
import "./_register.scss";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useSelector } from "react-redux";


const Register = () => {

	const dark_mode = useSelector((state) => state.Dark_Mode.dark_mode);

	const formik = useFormik({
		initialValues: {first_name: "", last_name: "", phone_number: 0, email: "", password: ""},
		onSubmit: async(values) => {
			const response = await axios.post("https://reqres.in/api/register", values);
			console.log(response);
		},
		validationSchema: Yup.object({
			first_name: Yup.string().required("Required"),
			last_name: Yup.string().required("Required"),
			email: Yup.string().email("Please Enter Another Email").required("Required"),
			password: Yup.string().required("Required"),
			phone_number: Yup.number().min(11).required("Required")
		})
	})

	return (
		<form className={`form_register mt-5 py-4 px-3 ${dark_mode ? "dark_mode" : undefined}`} onSubmit={formik.handleSubmit}>
			<h1 className="text-center p-3 m-0">Sign Up</h1>
			<div className="row">
				<div className="col-12 col-sm-6">
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Name</label>
						<input type="text" className="form-control" id="first_name" name="first_name"  onChange={formik.handleChange} onBlur={formik.handleBlur} />
						<p className="text-danger">{formik.touched.first_name ? formik.errors.first_name : undefined}</p>
					</div>
				</div>
				<div className="col-12 col-sm-6">
					<div className="mb-3">
						<label htmlFor="last_name" className="form-label">Last Name</label>
						<input type="text" className="form-control" id="last_name" name="last_name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
						<p className="text-danger">{formik.touched.last_name ? formik.errors.last_name : undefined}</p>
					</div>
				</div>
			</div>   
			<div className="col-12">
				<div className="mb-3">
					<label htmlFor="phone_number" className="form-label">Phone Number</label>
					<input type="text" className="form-control" id="phone_number" name="phone_number" placeholder="09123456789" maxLength={11} onChange={formik.handleChange} onBlur={formik.handleBlur} />
					<p className="text-danger">{formik.touched.phone_number ? formik.errors.phone_number : undefined}</p>
				</div>
			</div>
			<div className="col-12">
				<div className="mb-3">
					<label htmlFor="email" className="form-label">Email</label>
					<input type="email" className="form-control" id="email" name="email" placeholder="Example@Example.com" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
					<p className="text-danger">{formik.touched.email ? formik.errors.email : undefined}</p>
				</div>
			</div>
			<div className="col-12">
				<div className="mb-3">
					<label htmlFor="password" className="form-label">Password</label>
					<input type="password" className="form-control" id="password" name="password" placeholder="Minimum 8 Character" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
					<p className="text-danger">{formik.touched.password ? formik.errors.password : undefined}</p>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<button type="submit" className="btn btn_signin">Sign Up</button>
			</div> 
		</form>
	)
}

export default Register;