import React, { useContext, useState }  from "react";
import { Link } from "react-router-dom";
import { UserData } from "./Providers/AuthProvider";


const Register = () => {
    const {signInGoogle,signUpWithEmail} = useContext(UserData);
    const [error,setError] = useState('');
    const handleGoogleLogIn = () => {
        signInGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message); 
            setError(error) 
        })
    }

    const handleSignUpButton = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        if(password !== confirmPassword){
            setError('password does not matched')
            return
        }else if(password.length < 6){
            setError('please provide atleast 7 digit value')
            return
        }
        
        signUpWithEmail(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message);
            setError(error)
        })

        form.reset();
        setError('')
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up     now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUpButton} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                name="confirm"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account ????
                </Link>
              </label>
              </div>
            <div className="form-control mt-6">
              <button  className="btn btn-primary">SignUp</button>
            </div>
          </form>
          <div className="mb-9 flex flex-col gap-8 justify-center items-center">
            <h1>-----------or-----------</h1>
            <img onClick={handleGoogleLogIn} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""  className="h-20 w-20"/>
          </div>
          <p className="text-red-700 font-bold text-2xl m-4 ">{error}</p>
        </div>
      </div>

     
    </div>
  );
};

export default Register;
