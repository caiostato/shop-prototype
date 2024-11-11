import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-white md:bg-white w-screen h-screen m-0 p-0 font-sans antialiased overflow-x-hidden overflow-y-hidden">
        {children}
      </body>
    </html>
  );
}
