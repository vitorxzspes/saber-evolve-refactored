import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./globals.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
