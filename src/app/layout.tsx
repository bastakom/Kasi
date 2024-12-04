import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import "./globals.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Header, Footer } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { Quicksand } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});
const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="sv" className={quicksand.className}>
        <body>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
