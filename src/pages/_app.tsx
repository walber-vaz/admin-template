import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

/**
 * A React component that renders the App.
 * @param {AppProps} Component - The component to render.
 * @return {JSX.Element} The rendered component.
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main >
  )
}
