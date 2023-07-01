/* eslint-disable react-hooks/rules-of-hooks */
import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";

export default function auth() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [mode, setMode] = useState<'login' | 'register'>('login')

  return (
    <div>
      <h1>
        Login
      </h1>
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
    </div>
  )
}
