import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import "./globals.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Quicksand } from "next/font/google";

export const metadata: Metadata = {
  title: "Kasi Ab",
  description:
    "Det lilla företaget med stora visioner inom fastighetsbranschen.",
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
