"use client";

import { MOCK_PRODUCTS } from "./data/products";
import Product from "./components/Product/Product";

export default function Home() {
  return (
    <div className="pb-7 bg-white">
      <div className="mx-4 md:mx-20 xl:mx-44 grid grid-cols-fluid gap-12">
        {MOCK_PRODUCTS.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
