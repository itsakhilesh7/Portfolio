import { Inter, Space_Grotesk } from "next/font/google";
import Preloader from "../components/Preloader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Vobilisetti Akhilesh | Full Stack Developer",
  description: "Portfolio of Vobilisetti Akhilesh, a passionate Full Stack Developer specializing in Next.js.",
  openGraph: {
    title: "Vobilisetti Akhilesh | Full Stack Developer",
    description: "Portfolio of Vobilisetti Akhilesh, a passionate Full Stack Developer specializing in Next.js.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vobilisetti Akhilesh Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vobilisetti Akhilesh | Full Stack Developer",
    description: "Portfolio of Vobilisetti Akhilesh, a passionate Full Stack Developer specializing in Next.js.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#0a0f1e" />
      </head>
      <body>
        <Preloader />
        {/* Global animated background glow */}
        <div className="fixed inset-0 z-[-1] min-h-screen bg-navy bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,212,255,0.15),rgba(10,15,30,1))]"></div>
        {children}
      </body>
    </html>
  );
}
