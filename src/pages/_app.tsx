import '@/styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * A React component that renders the App.
 * @param {AppProps} Component - The component to render.
 * @return {JSX.Element} The rendered component.
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main>
      <Component {...pageProps} />
    </main >
  )
}
