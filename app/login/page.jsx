"use client";
import "./_login.scss";
import axios from "axios";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  
  const dark_mode = useSelector((state) => state.Dark_Mode.dark_mode);

  const formik = useFormik({
    initialValues: {email: "", password: ""},
    onSubmit: async(values) => {
      await axios.post("https://reqres.in/api/login", values)
      .then(res => {
        localStorage.setItem("user_token", JSON.stringify(res.data.token));
        toast.success("Loggin Successfuly")
        window.location = "/";
      })
      .catch(error => toast.error("email or password is incorrect"))
    },
    
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      })
   })


	return (
    <>
      <form className={`form_login mt-5 py-4 px-3 ${dark_mode ? "dark_mode" : undefined}`} onSubmit={formik.handleSubmit}>
        <h1 className="text-center p-3 m-0">Login</h1>
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Example@Example.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.email ? <p className="text-danger">{formik.errors.email}</p> : undefined}
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" maxLength={20}  value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.password ? <p className="text-danger">{formik.errors.password}</p> : undefined}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn_login" >Login</button>
        </div>
              
        <div className="mt-3">
          <p id="login_help" className="form-text mt-3 d-inline-block">Don't Have An Account?</p>
          <Link href={"/register"} className="text-decoration-none d-inline-block ms-2">Sign In</Link>
        </div>
      </form>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-2 row-gap-3">
        <h2 className="w-100 text-center mt-4">or</h2>
        <button type="button" className="btn btn-outline-dark btn_github" onClick={() => signIn("github")}>login with Github</button>
      </div>
      <ToastContainer />
    </>
	)
}

export default Login;