import { Jost, Poppins } from "next/font/google";
import "./globals.css";
import "boxicons/css/boxicons.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "E-Commerce - NextJS",
  description: "Dibuat oleh Andika Alakate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" />
      </head>
      <body className={jost.className}>{children}</body>
    </html>
  );
}
