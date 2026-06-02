import React, { ReactNode } from "react";
import { Roboto } from "@next/font/google";
import Script from "next/script";

import QueryProvider from "@/utils/QueryProvider";
import ToastProvider from "@/utils/ToastProvider";
import Header from "./header";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

interface IRootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: IRootLayoutProps) {
  const gaId = "G-MG1VRDTP62";

  return (
    <html lang="en" className={`${roboto.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      </head>
      <body data-theme="light">
        <QueryProvider>
          <ToastProvider />
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
