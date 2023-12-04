import { SessionProvider } from "next-auth/react"
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from './context/ThemeContext'
import AuthProvider from "@/components/AuthProvider/AuthProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oscar dev',
  description: 'Project generated for interaction with user and blogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <NavBar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
