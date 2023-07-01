import Content from './Content'
import Header from './Header'
import MenuAside from './MenuAside'

interface LayoutProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

/**
 * Render a layout component.
 *
 * @param {LayoutProps} props - The props for the layout component.
 * @return {JSX.Element} The rendered layout component.
 */
export default function Layout({ title, subtitle, children }: LayoutProps): JSX.Element {
  return (
    <section className={`
      flex w-screen h-screen
    `}>
      <MenuAside />
      <div className={`flex flex-col w-full p-7 bg-gray-300`}>
        <Header title={title} subtitle={subtitle} />
        <Content>
          {children}
        </Content>
      </div>
    </section >
  )
}
