import AuthInput from "@/components/auth/AuthInput";
import { ExclamationTriangleIcon } from "@/components/icons";
import { useAuth } from "@/data/hooks/useAuth";
import Image from "next/image";
import { useState } from "react";

/**
 * Renders the authentication form.
 *
 * @returns {JSX.Element} The rendered authentication form.
 */
export default function auth(): JSX.Element {
  const { loginEmailPassword, entryLoginEmailPassword, loginGoogle } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [error, setError] = useState("")

  /**
   * Shows an error message for a specified duration.
   *
   * @param {string} message - the error message to display
   * @param {number} timeInSeconds - the duration in seconds for the error message to be displayed (default: 5)
   * @return {void}
   */
  const showError = (message: string, timeInSeconds: number = 5): void => {
    setError(message)
    setTimeout(() => setError(''), timeInSeconds * 1000)
  }

  /**
   * Handles the form submission asynchronously.
   *
   * @return {Promise<void>} - A promise that resolves to void.
   */
  const handleSubmit = async (): Promise<void> => {
    const errorMessage = mode === 'login' ? 'Erro ao autenticar' : 'Erro ao cadastrar'
    try {
      if (mode === 'login' && loginEmailPassword) {
        await loginEmailPassword(email, password)
      }
      if (mode === 'register' && entryLoginEmailPassword) {
        await entryLoginEmailPassword(email, password)
      }
    } catch (error) {
      if (error instanceof Error) {
        showError(errorMessage)
      }
    }
  }

  return (
    <div className="flex h-screen items-center justify-center mx-auto max-w-7xl sm:w-3/4">
      <div className="hidden md:flex items-center justify-center md:w-1/2 lg:w-2/3 p-10">
        <Image
          src="/dasbord.svg"
          alt="Imagem da tela de autenticação"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      {/* bordar */}
      <div
        className={`
          w-0.5 h-[680px] hidden md:block bg-gray-200
        `}></div>
      <div className="w-full md:w-1/2 lg:h-1/3 m-10 flex flex-col justify-center">
        <h1 className={`
          text-xl font-bold mb-5
        `}>
          {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
        </h1>
        {error ? (
          <div className={`
            bg-red-400 text-white text-center px-4 py-3 mb-5 rounded-lg
            border border-red-700 flex
          `}>
            <ExclamationTriangleIcon className="w-6 h-6" />
            <span className="ml-3">{error}</span>
          </div>
        ) : false}
        <AuthInput
          label="Email"
          type="email"
          value={email}
          required
          onChange={(e: string) => setEmail(e)}
        />
        <AuthInput
          label="Senha"
          type="password"
          value={password}
          required
          onChange={(e: string) => setPassword(e)}
        />
        <button
          onClick={handleSubmit}
          className={`
            w-full bg-indigo-500 hover:bg-indigo-400 text-white
            rounded-lg px-4 py-3 mt-6 font-semibold
          `}
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={loginGoogle}
          className={`
            w-full bg-transparent border-2 border-red-500 hover:border-red-400
            text-gray-400 rounded-lg px-4 py-3 font-semibold flex justify-center
          `}
        >
          <Image
            src="/google.svg"
            alt="Logo do Google"
            width={24}
            height={24}
            className="mr-2"
          />
          Entrar com conta google
        </button>
        {mode == 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setMode('register')}
              className={`
                text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2
              `}
            >
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setMode('login')}
              className={`
                text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2
              `}
            >
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
