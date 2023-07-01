import AuthInput from "@/components/auth/AuthInput";
import { ExclamationTriangleIcon } from "@/components/icons";
import Image from "next/image";
import { useState } from "react";

export default function auth() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [error, setError] = useState("")

  const showError = (message: string, timeInSeconds: number = 5) => {
    setError(message)
    setTimeout(() => setError(''), timeInSeconds * 1000)
  }

  const handleSubmit = () => {
    if (mode === 'login') {
      console.log('login')
      showError('Erro ao fazer login')
    } else {
      console.log('register')
      showError('Erro ao realizar cadastro')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de autenticação"
          className="h-screen w-full object-cover bg-no-repeat"
        />
      </div>
      <div className="w-full md:w-[600px] lg:h-1/3 m-10">
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
          onClick={handleSubmit}
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
