import { AppProvider } from '@/data/contents/AppContext'
import { AuthProvider } from '@/data/contents/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * Renders the main application component.
 *
 * @param {Object} Component - The component to render.
 * @param {Object} pageProps - The props for the component.
 * @return {JSX.Element} The rendered application component.
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main>
      <AuthProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </AuthProvider>
    </main >
  )
}
