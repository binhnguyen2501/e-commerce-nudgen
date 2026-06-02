"use client";

import { ReactNode, useState, useEffect } from "react";
import Loading from "@/app/components/Loading/Loading";

export default function HydrateProvider({ children }: { children: ReactNode }) {
  const [isHydrate, setIsHydrate] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrate(true);
  }, []);

  return (
    <div>{isHydrate ? children : <Loading />}</div>
  );
}
