
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/just-for-fun">Just For Fun</a>
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
