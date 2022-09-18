import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";

const PaymentSystem = () => {
  const [user, loading, error] = useAuthState(auth);

  const { id } = useParams();
  const [payment, setPayment] = useState({});
  console.log(payment)
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPayment(data);
      });
  }, [id]);
  return (
    <>
    <h1 className="text-4xl font-bold text-center my-6">Your  Payment Portal</h1>
    <div className=" flex">
      <div class="card w-96 bg-base-100 shadow-xl mx-auto mb-8">
        <div class="card-body">
        <p className="text-green-400 font-bold">Hello , {user.displayName} </p>
          <p>Please Pay for <span className='text-green-400 font-extrabold'>{payment.movieName} </span> Movie</p>
          <p> You  Are get ticket at <span className='text-green-400 font-extrabold'> {payment.selectedDate} </span> </p>
          
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     
      <div class="card w-96 bg-primary text-primary-content mx-auto">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentSystem;
