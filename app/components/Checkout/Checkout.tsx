"use client";

import useCart from "@/store/store";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Image from "next/image";
import { motion } from "framer-motion";

import Delivery from "@/public/assets/delivery.gif";

export default function Checkout() {
  const totalCartItem = useCart((state: any) => state.cart);
  const isEmptyCart = totalCartItem.length === 0;

  return (
    <div>
      {isEmptyCart && (
        <div className="flex items-center justify-center flex-col gap-3 mt-24">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="text-xl font-semibold"
          >
            Your cart is empty
          </motion.h1>
          <Image
            src={Delivery}
            alt="empty cart"
            className="rounded-lg"
            priority={true}
          />
        </div>
      )}
      {!isEmptyCart && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <CheckoutForm />
        </motion.div>
      )}
    </div>
  );
}
