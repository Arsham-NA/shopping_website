import "./login.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const Login = () => {
  
 const formik = useFormik({
  initialValues: {email: "", password: ""},
  onSubmit: (values) => {
    console.log(values)
    localStorage.setItem("token", "123432");
    window.location = "/";
  }
 })
	return (
		<>
			<form className="mt-5" id="form_login" onSubmit={formik.handleSubmit}>
          <fieldset className="container-fluid py-4 px-3">
            <h1 className="text-center p-3 m-0">Login</h1>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Example@Example.com" value={formik.values.email} onChange={formik.handleChange}/>
                {formik.errors.password ? <span className="text-danger">{formik.errors.password}</span> : null}
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" maxLength={20}  value={formik.values.password} onChange={formik.handleChange}/>
                
              </div>
            </div>
           <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary" >Login</button>
           </div>
            
           <div className=" mt-3">
              <div id="login_help" className="form-text mt-3 d-inline-block">Dont Have An Account?</div>
              <span className="d-inline-block ms-2"><Link to={"/register"} className="text-decoration-none">Sign In</Link></span>
           </div>
          </fieldset>   
      </form>
		</>
	)
}

export default Login;