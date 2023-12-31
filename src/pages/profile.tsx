/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/template/Layout'
import { useAppData } from '@/data/hooks/useAppData'
import React from 'react'

/**
 * Renders the index component.
 *
 * @return {JSX.Element} The rendered index component.
 */
export default function profile(): JSX.Element {
  const { altTheme } = useAppData()

  return (
    <Layout title="Perfil de Usuário" subtitle="Gerencie suas informações de usuário">
      <h1>Perfil</h1>
    </Layout>
  )
}
