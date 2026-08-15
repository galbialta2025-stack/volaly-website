import { createFileRoute, redirect } from '@tanstack/react-router'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/use-auth'

export const Route = createFileRoute('/account')({
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession()
    if (!data.session) {
      throw redirect({ to: '/login' })
    }
  },
  component: AccountPage,
})

function AccountPage() {
  const { user, signOut } = useAuth()

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-2 text-2xl font-semibold">Mein Konto</h1>
      <p className="mb-6 text-gray-600">{user?.email}</p>
      <button
        onClick={() => signOut()}
        className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
      >
        Logout
      </button>
    </div>
  )
}
