"use client";
import { AnalyticsWrapper } from "./components/analytics";
import Layout from "#/app/components/layout";
import ReduxProvider from "./components/reduxprovider";
import { Lexend } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./styles/globals.css";
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title data-rh="true">polyplace</title>
      <meta
        data-rh="true"
        name="viewport"
        content="width=device-width,initial-scale=1"
      ></meta>
      <body>
        <ReduxProvider>
          <ThemeProvider attribute="class">
            <Layout>{children}</Layout>
          </ThemeProvider>
        </ReduxProvider>
        <AnalyticsWrapper />
        <Script
          src="https://kit.fontawesome.com/77a74156e4.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
