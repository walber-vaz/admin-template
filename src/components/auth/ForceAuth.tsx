import { useAppData } from "@/data/hooks/useAppData"
import { useAuth } from "@/data/hooks/useAuth"
import Head from "next/head"
import router from 'next/router'

/**
 * Renders the component that forces authentication.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The child elements.
 * @return {React.ReactNode} The rendered content.
 */
export default function ForceAuth({ children }: { children: React.ReactNode }): React.ReactNode {
  const { user, loading } = useAuth()
  const { theme } = useAppData()

  const renderContent = () => {
    return (
      <>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie?.includes('admin-template-w2k-auth')) {
                window.location.href = "/auth"
              }
            `
          }} />
        </Head>
        {children}
      </>
    )
  }

  const renderLoading = () => {
    return (
      <div className={`
        flex justify-center items-center h-screen w-screen flex-col
        ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-300'}
      `}>
        <div className={`
          animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 mb-2
          ${theme === 'dark' ? 'border-gray-300' : 'border-gray-900'}
        `}></div>
        <h2 className={`
          text-2xl font-bold
          ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}
        `}>
          Carregando...
        </h2>
      </div>
    )
  }

  if (!loading && user?.email) {
    return renderContent()
  }

  if (loading) {
    return renderLoading()
  }

  router.push('/auth')
  return null
}
