"use client";

import { useState } from "react";
import formatPrice from "@/utils/FormatPrice";

import Button from "../Button/Button";
import useCart from "@/store/store";

export default function CheckoutForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setCheckout = useCart((state: any) => state.setCheckout);
  const cart = useCart((state: any) => state.cart);
  const totalAllProductPrice = cart.reduce((acc: any, item: any) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setCheckout("success");
      setIsLoading(false);
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form">
      <div className="rounded-md bg-base-100 p-4 text-sm">
        Demo pay mode: payment is mocked and will always succeed.
      </div>
      <div className="my-4 flex items-center gap-2">
        <span className="font-bold">Total:</span>
        <span className="text-xl text-primary font-bold">
          {formatPrice(totalAllProductPrice)}
        </span>
      </div>
      <Button
        type="submit"
        variant="basic"
        disabled={isLoading}
        isLoading={isLoading}
      >
        Pay now
      </Button>
    </form>
  );
}
