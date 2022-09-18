import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const element = useElements();
    const [cardError , setCardError] = useState('')
    const handleSubmit = async(e) =>{
       e.preventDefault();
       if(!element || !stripe){
        return;
       }
       const card = element.getElement(CardElement);

       if (card == null) {
         return;
       }
       const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
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
      <button className="btn btn-sm bg-green-400 border-none mt-8" type="submit" disabled={!stripe}>
        Payment
      </button>
    </form>

      {cardError && <p> <small  className="text-red-500 font-bold">{cardError}</small>  </p>}
    

  </div>;
};

export default CheckoutForm;
