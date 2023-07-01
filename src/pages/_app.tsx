import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900']
})

/**
 * A React component that renders the App.
 * @param {AppProps} Component - The component to render.
 * @return {JSX.Element} The rendered component.
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main >
  )
}
