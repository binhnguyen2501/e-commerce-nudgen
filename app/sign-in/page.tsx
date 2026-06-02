"use client";

import React from "react";
import Link from "next/link";
export default function SignInPage() {
  return (
    <div className="mx-4 md:mx-20 xl:mx-44 pb-7">
      <div className="rounded-lg bg-base-200 p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Authentication Removed</h1>
        <p className="text-base">
          This project now runs with hardcoded products and no authentication
          flow.
        </p>
        <Link href="/" className="text-primary font-medium">
          Back to products
        </Link>
      </div>
    </div>
  );
}
