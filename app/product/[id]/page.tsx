"use client";

import React from "react";
import Image from "next/image";
import formatPrice from "@/utils/FormatPrice";
import { usePathname, useRouter } from "next/navigation";
import useCart from "@/store/store";
import { MOCK_PRODUCTS } from "@/app/data/products";

import Button from "@/app/components/Button/Button";
import Error from "@/public/assets/404.png";

export default function Product() {
  const router = useRouter();
  const pathname = usePathname();
  const productId = pathname.split("/").pop();
  const product = MOCK_PRODUCTS.find((item) => item.id === productId);
  const addProduct = useCart((state: any) => state.addProduct);

  const handleAddToCart = () => {
    if (!product) return;

    addProduct({
      id: product.id,
      image: product.image,
      name: product.name,
      unit_amount: product.unit_amount,
    });
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={Error} alt="404" priority={true} />
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-20 xl:mx-44 mb-7">
      <button
        onClick={() => router.push("/")}
        className="text-sm font-medium mb-6 hover:text-primary"
      >
        Back to products
      </button>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-24">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="w-full rounded-lg"
          priority={true}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          <p className="text-base font-regular">{product.description}</p>
          <p className="text-base font-regular">{product.metadata.About}</p>
          <div className="flex gap-2 mb-8 text-lg">
            <div className="font-semibold">Price:</div>
            <div className="font-semibold text-primary">
              {product.unit_amount && formatPrice(product.unit_amount)}
            </div>
          </div>
          <Button variant="basic" width={140} onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
