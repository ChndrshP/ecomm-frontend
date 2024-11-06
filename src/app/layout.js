import "../styles/globals.css";
import { AuthProvider } from './providers'

export const metadata = {
  title: 'E-commerce Store',
  description: 'Your one-stop shop for all products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}