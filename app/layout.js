import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio built with Sanity CMS as backend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
