import "../styles/globals.css";

export const metadata = {
  title: 'E-commerce Store',
  description: 'Your one-stop shop for all products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
