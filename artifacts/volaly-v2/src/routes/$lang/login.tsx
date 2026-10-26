import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../hooks/use-auth'

export const Route = createFileRoute('/$lang/login')({
  component: LoginPage,
})

function LoginPage() {
  const { lang } = Route.useParams()
  const { t } = useTranslation('auth')
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string | null>(null)

  const loginSchema = z.object({
    email: z.string().email(t('login.emailError')),
    password: z.string().min(6, t('login.passwordError')),
  })
  type LoginForm = z.infer<typeof loginSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(values: LoginForm) {
    setServerError(null)
    const { error } = await signIn(values.email, values.password)
    if (error) {
      setServerError(error)
      return
    }
    navigate({ to: '/$lang/account', params: { lang } })
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16">
      <h1 className="mb-6 text-2xl font-semibold">{t('login.title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">{t('login.emailLabel')}</label>
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
          <label htmlFor="password" className="mb-1 block text-sm font-medium">{t('login.passwordLabel')}</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
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
          {isSubmitting ? t('login.submitting') : t('login.submit')}
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        {t('login.noAccount')}{' '}
        <Link to="/$lang/signup" params={{ lang }} className="font-medium underline">{t('login.signUpLink')}</Link>
      </p>
    </div>
  )
}
