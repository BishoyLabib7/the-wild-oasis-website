import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";
// Put font from google fonts
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "The Wild Oasis is a cabin rental company in the woods.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto py-12 px-8 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
