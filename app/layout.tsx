import Navbar from './component/Navbar'
import './globals.css'

export const metadata = {
  title: 'Medium',
  description: 'Created by AniketVR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
