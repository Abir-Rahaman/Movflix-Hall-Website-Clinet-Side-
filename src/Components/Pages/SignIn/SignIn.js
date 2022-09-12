import React from "react";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { GrFacebook } from "react-icons/gr";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Spinner from "../../Shared/Spinner";
import { Link } from "react-router-dom";
import { useSendEmailVerification } from "react-firebase-hooks/auth";


const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const onSubmit = async (data) => {
     await  createUserWithEmailAndPassword(data.email, data.password);
     await updateProfile({displayName:data.name })
     console.log("update");
     console.log(data)
     
  };
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);


  if (loading || googleLoading) {
    return <Spinner></Spinner>;
  }

  let errorMessage;

  if (error || googleError) {
    errorMessage = (
      <p className="text-red-400 font-bold text-center">
        {" "}
        <small> {error?.message || googleError?.message} </small>
      </p>
    );
  }
  return (
    <div className="bg-base-200  flex-col">
      <div class="hero pt-24 pb-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <span className="text-6xl text-slate-800 mx-auto hidden lg:block rounded-full bg-green-400 p-6 lg:relative lg:top-[-290px] lg:right-[260px] z-10">
            <MdOutlineManageAccounts />
          </span>
          <div class="card w-96  shadow-2xl bg-base-10">
            <div class="card-body pt-20">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Your Full Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Your Name"
                    class="input input-bordered w-full max-w-xs"
                  />
                  <label class="label">
                    {errors.name?.type === "required" && <span class="label-text-alt text-red-600"> {errors.name.message} </span>}
                  </label>
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /([a-z0-9]+@[a-z]+\.[a-z]{2,3})/,
                        message: "Think twice and try again",
                      },
                    })}
                    type="email"
                    placeholder="Your Email"
                    class="input input-bordered w-full max-w-xs"
                  />
                  <label class="label">
                    {errors.email?.type === "required" && <span class="label-text-alt text-red-600"> {errors.email.message} </span>}
                    {errors.email?.type === "pattern" && <span class="label-text-alt text-red-600"> {errors.email.message} </span>}
                  </label>
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    type="password"
                    placeholder="Your Password"
                    class="input input-bordered w-full max-w-xs"
                  />
                  <label class="label">
                    {errors.password?.type === "required" && <span class="label-text-alt text-red-600"> {errors.password.message} </span>}
                    {errors.password?.type === "minLength" && <span class="label-text-alt text-red-600"> {errors.password.message} </span>}
                  </label>
                </div>
                {errorMessage}
                <div class="form-control mt-6">
                  <input
                    className="btn border-4 px-6 py-2 bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-green-600 to-green-400 duration-700"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <p className="text-center">
                  <small>
                    {" "}
                    Already have an account?{" "}
                    <Link className="text-green-400 font-bold" to="/logIn">
                      Sing In
                    </Link>
                  </small>
                </p>
                <div class="divider">OR</div>
                <div className="flex justify-center text-4xl gap-8 mt-4">
                  <span onClick={() => signInWithGoogle()}>
                    <FcGoogle />
                  </span>
                  <ImGithub />
                  <GrFacebook />
                </div>
                <button
                onClick={async () => {
                  await sendEmailVerification();
                  alert("Sent email");
                }}
              >
                Verify email
              </button>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
