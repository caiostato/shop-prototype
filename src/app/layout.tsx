import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-zinc-100 container m-0 p-0 font-sans antialiased overflow-x-hidden overflow-y-hidden">
        {children}
      </body>
    </html>
  );
}
