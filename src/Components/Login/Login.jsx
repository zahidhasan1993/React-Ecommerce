import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../Providers/AuthProvider";

const Login = () => {
  const { signInGoogle,signInWithEmail } = useContext(UserData);

  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    signInGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmail(email,password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate('/')
    })
    .catch(error => {
        console.log(error.message);
    })

    

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot Password ???
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="mb-9 flex flex-col gap-8 justify-center items-center">
            <h1>-----------or-----------</h1>
            <img
              onClick={handleGoogleLogIn}
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt=""
              className="h-20 w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
