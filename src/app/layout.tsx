import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import "./globals.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Quicksand } from "next/font/google";
import Script from "next/script";

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

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
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
          <Script src="https://consent.cookiebot.com/uc.js" />
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="54d930ab-fae6-4cd8-86ec-6ec0423efcde"
            data-blockingmode="manual"
            type="text/javascript"
            async
          ></script>
        </body>
      </html>
    </StoryblokProvider>
  );
}
