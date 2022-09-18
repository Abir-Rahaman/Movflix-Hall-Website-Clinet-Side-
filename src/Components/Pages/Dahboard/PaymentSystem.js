import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import Spinner from "../../Shared/Spinner";

const stripePromise = loadStripe("pk_test_51L18qLA4o5tgtQUCryMTWsArjQnagTRL3XcMoVH0cAkohaEhOUYXvMKqPe9i6FqYQoJjrJ2ZVxyPaYiEpoWkLNxP00Asyqdyam");

const PaymentSystem = () => {
  const [user, loading, error] = useAuthState(auth);
  

  const { id } = useParams();
  const [payment, setPayment] = useState({});
  const {movieName, ticketPrice} = payment;
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setPayment(data);
      });
  }, [id]);
  
  if(loading){
    return <Spinner></Spinner>
  }
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6">Your Payment Portal</h1>
      <div className=" flex">
        <div class="card w-96 bg-base-100 shadow-xl mx-auto mb-8">
          <div class="card-body">
            <p className="text-green-400 font-bold">Hello , {user.displayName} </p>
            <p>
              Please Pay for <span className="text-green-400 font-extrabold">{movieName} </span> Movie
            </p>
            <p>
              Price of this Ticket <span className="text-green-400 font-extrabold">$ {ticketPrice} </span>
            </p>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-2xl text-primary-content mx-auto">
          <div class="card-body">
            <Elements stripe={stripePromise}>
               <CheckoutForm payment={payment}/>
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSystem;
