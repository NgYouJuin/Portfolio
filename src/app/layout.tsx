import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/content";

const title = `${profile.name} | Computer Science Undergraduate & Aspiring Software Engineer`;
const description =
  "Portfolio of Ng You Juin, NTU Computer Science undergraduate with full-stack software engineering experience (GovTech, DSTA BrainHack finalist) and a cybersecurity background. Seeking Software Engineering internships.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Ng You Juin",
    "Software Engineer Intern",
    "Computer Science",
    "NTU",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "Cybersecurity",
    "Singapore",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_SG",
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
