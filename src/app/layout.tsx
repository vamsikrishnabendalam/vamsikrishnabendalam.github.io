import type { Metadata } from "next";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  title: "J.A.R.V.I.S. // Vamsi Krishna Bendalam",
  description:
    "Partner Solutions Engineer • Technical Solutions Consultant • Data & Automation Engineer. 5+ years building integrations across Retail Media, Banking, Healthcare and E-Commerce.",
  keywords: [
    "Vamsi Krishna Bendalam",
    "Partner Solutions Engineer",
    "Technical Solutions Consultant",
    "Integration Engineer",
    "Data Engineer",
    "Make.com",
    "Ab Initio",
    "SKAI",
    "Snowflake",
    "AWS",
  ],
  authors: [{ name: "Vamsi Krishna Bendalam" }],
  openGraph: {
    title: "J.A.R.V.I.S. // Vamsi Krishna Bendalam",
    description:
      "Partner Solutions Engineer • Integration & Automation Specialist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text font-sans selection:bg-cyan/40">
        {children}
      </body>
    </html>
  );
}
