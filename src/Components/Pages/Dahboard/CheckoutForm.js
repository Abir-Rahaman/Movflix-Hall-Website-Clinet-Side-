import React from "react";
import { useState,useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = ({payment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError , setCardError] = useState('')
  // console.log(payment)
  const {ticketPrice} = payment;
  const [clientSecret, setClientSecret] = useState('');

   
   
    useEffect(()=> {
      fetch("http://localhost:5000/create-payment-intent" ,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },


          body: JSON.stringify({ticketPrice})
             
        })
          .then(res => res.json())
          .then(data => {
          
              console.log(data); 
          
       
      })

    },[ticketPrice])
    const handleSubmit = async(e) =>{
       e.preventDefault();
       if(!elements || !stripe){
        return;
       }
       const card = elements.getElement(CardElement);


       if (card == null) {
         return;
       }
       const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    });

      
    setCardError(error?.message || '')

      
  


    }
  return <div>
       <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
           
      {cardError && <p> <small  className="text-red-500 font-bold">{cardError}</small>  </p>}
    

  </div>;
};

export default CheckoutForm;
