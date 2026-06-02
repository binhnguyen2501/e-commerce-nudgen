"use client";

import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import useCart from "@/store/store";

import Cart from "../components/Cart/Cart";

export default function UserInfo() {
  const totalCartItem = useCart((state: any) => state.cart);
  const isOpenCartList = useCart((state: any) => state.isOpen);
  const toggleCartList = useCart((state: any) => state.toggleCartList);
  const totalItemQuantity = totalCartItem.reduce(
    (acc: number, item: any) => acc + (item.quantity || 0),
    0
  );

  return (
    <>
      <div
        className="flex items-center relative cursor-pointer text-3xl"
        onClick={() => {
          toggleCartList();
        }}
      >
        <AiFillShopping />
        <AnimatePresence>
          {totalItemQuantity > 0 && (
            <motion.div
              key={totalItemQuantity}
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              className="bg-primary text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center"
            >
              {totalItemQuantity}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>{isOpenCartList && <Cart />}</AnimatePresence>
    </>
  );
}
