import { AnalyticsWrapper } from "./components/analytics";
import Layout from "#/app/components/layout";
import ReduxProvider from "./components/reduxprovider";
import { Lexend } from "@next/font/google";
import "./styles/globals.css";
// const lexend = Lexend({
//   variable: "--font-lexend",
// });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title data-rh="true">TypeScript Quick Start | Redux Toolkit</title>
      <meta
        data-rh="true"
        name="viewport"
        content="width=device-width,initial-scale=1"
      ></meta>
      <body>
        <ReduxProvider>
          <Layout>{children}</Layout>
        </ReduxProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
