import "#/styles/globals.css";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { AnalyticsWrapper } from "./components/analytics";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
