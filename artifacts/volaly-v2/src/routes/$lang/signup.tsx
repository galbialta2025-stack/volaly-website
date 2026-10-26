import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../hooks/use-auth'
import { LEGAL_DOCS_VERSION } from '../../lib/legal'

export const Route = createFileRoute('/$lang/signup')({
  component: SignupPage,
})

function SignupPage() {
  const { lang } = Route.useParams()
  const { t } = useTranslation('auth')
  const { signUp } = useAuth()
  const [serverError, setServerError] = useState<string | null>(null)
  const [confirmationSent, setConfirmationSent] = useState(false)

  const signupSchema = z.object({
    companyName: z.string().trim().min(2, t('signup.companyError')),
    email: z.string().email(t('signup.emailError')),
    password: z.string().min(6, t('signup.passwordError')),
    b2bConfirmed: z.literal(true, { errorMap: () => ({ message: t('signup.b2bError') }) }),
    termsAccepted: z.literal(true, { errorMap: () => ({ message: t('signup.termsError') }) }),
  })
  type SignupForm = z.infer<typeof signupSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  })

  async function onSubmit(values: SignupForm) {
    setServerError(null)
    const { error } = await signUp(values.email, values.password, {
      company_name: values.companyName,
      b2b_confirmed: true,
      terms_accepted_at: new Date().toISOString(),
      terms_version: LEGAL_DOCS_VERSION,
      signup_locale: lang,
    })
    if (error) {
      setServerError(error)
      return
    }
    setConfirmationSent(true)
  }

  if (confirmationSent) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16 text-center">
        <h1 className="mb-2 text-2xl font-semibold">{t('signup.confirmTitle')}</h1>
        <p className="text-gray-600">{t('signup.confirmSubtitle')}</p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none'

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col px-4 pb-16 pt-32">
      <h1 className="mb-6 text-2xl font-semibold">{t('signup.title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="companyName" className="mb-1 block text-sm font-medium">{t('signup.companyLabel')}</label>
          <input
            id="companyName"
            type="text"
            autoComplete="organization"
            className={inputClass}
            {...register('companyName')}
          />
          {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">{t('signup.emailLabel')}</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            {...register('email')}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium">{t('signup.passwordLabel')}</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            className={inputClass}
            {...register('password')}
          />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>

        <div>
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0" {...register('b2bConfirmed')} />
            <span>{t('signup.b2bConfirm')}</span>
          </label>
          {errors.b2bConfirmed && <p className="mt-1 text-sm text-red-600">{errors.b2bConfirmed.message}</p>}
        </div>

        <div>
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0" {...register('termsAccepted')} />
            <span>
              {t('signup.termsPre')}
              <Link to="/$lang/terms" params={{ lang }} target="_blank" className="font-medium underline">
                {t('signup.termsLink')}
              </Link>
              {t('signup.termsMid')}
              <Link to="/$lang/privacy" params={{ lang }} target="_blank" className="font-medium underline">
                {t('signup.privacyLink')}
              </Link>
              {t('signup.termsPost')}
            </span>
          </label>
          {errors.termsAccepted && <p className="mt-1 text-sm text-red-600">{errors.termsAccepted.message}</p>}
        </div>

        {serverError && <p className="text-sm text-red-600">{serverError}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {isSubmitting ? t('signup.submitting') : t('signup.submit')}
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        {t('signup.haveAccount')}{' '}
        <Link to="/$lang/login" params={{ lang }} className="font-medium underline">{t('signup.loginLink')}</Link>
      </p>
    </div>
  )
}
