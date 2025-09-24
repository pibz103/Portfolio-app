import '../styles/globals.css'
import ThemeProvider from '../components/theme-provider'
export const metadata = { title: 'AI Portfolio Builder' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
