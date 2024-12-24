"use client";

import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isActive = (path: string) => (pathname === path ? "active" : "");
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <header>
          <nav>
            <a href="/">
              <img
                src="/logo.svg"
                alt="Logo"
                style={{ width: "32px", height: "32px" }}
              />
            </a>
            <div className="links">
              <a href="/" className={isActive("/")}>
                Home
              </a>
              <a href="/about" className={isActive("/about")}>
                About
              </a>
              <a href="/just-for-fun" className={isActive("/just-for-fun")}>
                Just For Fun
              </a>
              <a
                href="https://drive.google.com/file/d/1DdgikEMpW-M7nETFOQ0Oip6tuMuJE5fi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume ↗
              </a>
            </div>
          </nav>
        </header>
        {children}
        <footer>
          <p>foot</p>
        </footer>
      </body>
    </html>
  );
}
