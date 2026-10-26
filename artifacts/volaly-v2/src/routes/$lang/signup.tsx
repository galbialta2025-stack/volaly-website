import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useAuth } from '../../hooks/use-auth'

const signupSchema = z.object({
  email: z.string().email('Bitte eine gültige Email-Adresse eingeben'),
  password: z.string().min(6, 'Mindestens 6 Zeichen'),
})

type SignupForm = z.infer<typeof signupSchema>

export const Route = createFileRoute('/$lang/signup')({
  component: SignupPage,
})

function SignupPage() {
  const { lang } = Route.useParams()
  const { signUp } = useAuth()
  const [serverError, setServerError] = useState<string | null>(null)
  const [confirmationSent, setConfirmationSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  })

  async function onSubmit(values: SignupForm) {
    setServerError(null)
    const { error } = await signUp(values.email, values.password)
    if (error) {
      setServerError(error)
      return
    }
    setConfirmationSent(true)
  }

  if (confirmationSent) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16 text-center">
        <h1 className="mb-2 text-2xl font-semibold">Fast geschafft</h1>
        <p className="text-gray-600">Bitte bestätige deine Email-Adresse über den Link, den wir dir geschickt haben.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16">
      <h1 className="mb-6 text-2xl font-semibold">Konto erstellen</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
            {...register('email')}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium">Passwort</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
            {...register('password')}
          />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>

        {serverError && <p className="text-sm text-red-600">{serverError}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {isSubmitting ? 'Wird erstellt…' : 'Konto erstellen'}
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Schon ein Konto?{' '}
        <Link to="/$lang/login" params={{ lang }} className="font-medium underline">Einloggen</Link>
      </p>
    </div>
  )
}
