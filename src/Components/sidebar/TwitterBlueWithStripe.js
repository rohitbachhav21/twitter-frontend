import React from "react";
import TwitterBlue from "./TwitterBlue";
import { Elements, loadStripe } from "@stripe/react-stripe-js";
const TwitterBlueWithStripe = () => {
  const stripePromise = loadStripe(
    "pk_test_51MuxqwSI1PVmUJHRJv5gXs4Ig7JELS7yhuUlPTgi5ZGlNIj8PdJJq2OC9MmiLczaUpQFjh2rKpCbIpXwVPydMb7700EyOTsVfN"
  );

  return (
    <div>
      <Elements stripe={stripePromise}>
        <TwitterBlue />
      </Elements>
    </div>
  );
};

export default TwitterBlueWithStripe;
