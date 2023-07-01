import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Renders a document component.
 *
 * @return {JSX.Element} The rendered document component.
 */
export default function Document(): JSX.Element {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
