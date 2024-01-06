import "./globals.css";

// import { Poppins } from "next/font/google";

// const inter = Poppins({ subsets: ["latin"] });

export const metadata = {
  title: "Pandusu",
  description: "Ahmad Pandu Subekti Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
