import type { Metadata } from 'next'
import './globals.css'
import { SessionProvider} from 'next-auth/react'
import { auth } from '@/auth'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const session = await auth();
  return (
    <html lang="en">
      <body className='min-h-screen font-sans antialiased __className_343187'>
        <SessionProvider session={session}>
         {children}
        </SessionProvider>
      </body>
    </html>
  )
}
