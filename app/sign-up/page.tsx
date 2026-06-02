"use client";

import React from "react";
import Link from "next/link";
export default function SignUp() {
  return (
    <div className="mx-4 md:mx-20 xl:mx-44 pb-7">
      <div className="rounded-lg bg-base-200 p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Sign Up Disabled</h1>
        <p className="text-base">
          User registration is disabled because auth and database flow were
          removed.
        </p>
        <div>
          <Link href="/" className="text-primary font-medium">
            Back to products
          </Link>
        </div>
      </div>
    </div>
  );
}
