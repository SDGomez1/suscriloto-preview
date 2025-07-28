import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "Suscrilotto | En Construccion",
  description:
    "Compra loterias por suscripcion y juega todas las semanas en forma automatica ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogProvider>
        <body className={`font-bahnschrift tracking-tighter`}>{children}</body>
      </PostHogProvider>
    </html>
  );
}
