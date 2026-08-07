'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useToast } from '@/contexts/ToastContext'
import { getTodayISO } from '@/lib/utils'
import { RESERVATION_PARTY_SIZES, RESERVATION_TIMES } from '@/constants/restaurant'
import type { FormStatus } from '@/types'

const INPUT_BASE =
  'w-full bg-brand-charcoal border rounded-sm text-brand-white font-jost text-[0.95rem] font-light px-[1.1rem] py-[0.9rem] transition-all duration-300 outline-none focus:border-brand-red focus:bg-[rgba(192,57,43,0.05)] placeholder:text-[var(--text-dim)]'

const LABEL_CLASSES =
  'block text-[0.68rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2.5 font-[400]'

/** Field names that participate in validation. */
type FieldName = 'nombre' | 'telefono' | 'personas' | 'fecha' | 'hora' | 'email' | 'privacidad'

type Errors = Partial<Record<FieldName, string>>

/** Accepts Spanish and international formats; digits are counted, not shape. */
const PHONE_RE = /^[+]?[\d\s().-]{9,20}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(data: FormData, today: string): Errors {
  const errors: Errors = {}
  const get = (k: string) => String(data.get(k) ?? '').trim()

  const nombre = get('nombre')
  if (!nombre) errors.nombre = 'Indícanos tu nombre.'
  else if (nombre.length < 2) errors.nombre = 'El nombre es demasiado corto.'

  const telefono = get('telefono')
  const digits = telefono.replace(/\D/g, '')
  if (!telefono) errors.telefono = 'Necesitamos un teléfono de contacto.'
  else if (!PHONE_RE.test(telefono) || digits.length < 9)
    errors.telefono = 'Introduce un teléfono válido (mínimo 9 dígitos).'

  if (!get('personas')) errors.personas = 'Selecciona el número de comensales.'

  const fecha = get('fecha')
  if (!fecha) errors.fecha = 'Selecciona una fecha.'
  else if (fecha < today) errors.fecha = 'La fecha no puede ser anterior a hoy.'

  if (!get('hora')) errors.hora = 'Selecciona una hora.'

  // Email is optional, but must be well formed when provided.
  const email = get('email')
  if (email && !EMAIL_RE.test(email)) errors.email = 'Introduce un email válido.'

  if (!data.get('privacidad'))
    errors.privacidad = 'Debes aceptar el tratamiento de tus datos para reservar.'

  return errors
}

/**
 * Reservation form — Client Component.
 * Handles controlled form state, validation feedback, and simulated submission.
 *
 * NOTE: submission is still a local simulation. Before launch, replace the
 * `await new Promise(...)` block with a real `POST /api/reservations` call and
 * surface the `error` status to the user.
 */
export function ReservationForm() {
  const { showToast } = useToast()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  /**
   * The minimum selectable date is resolved after mount. Computing it during
   * render would bake the *server's* date into the HTML and mismatch on
   * hydration whenever the visitor's timezone rolls over before the server's.
   */
  const [minDate, setMinDate] = useState('')
  useEffect(() => setMinDate(getTodayISO()), [])

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const nextErrors = validate(data, getTodayISO())
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      // Move focus to the first invalid control so keyboard and screen-reader
      // users are told what to fix instead of silently failing.
      const firstInvalid = Object.keys(nextErrors)[0]
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    setStatus('submitting')

    try {
      // TODO: Replace with real API call — e.g. POST /api/reservations
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus('success')
      showToast('✓ Reserva recibida — te contactaremos en breve.')

      resetTimer.current = setTimeout(() => {
        setStatus('idle')
        formRef.current?.reset()
      }, 3000)
    } catch {
      setStatus('error')
      showToast('No hemos podido enviar la reserva. Inténtalo de nuevo o llámanos.')
    }
  }

  const isSubmitting = status === 'submitting'
  const isSuccess = status === 'success'

  /** Border colour reflects validity so the error isn't communicated by text alone. */
  const fieldClass = (field: FieldName, extra = '') =>
    `${INPUT_BASE} ${
      errors[field] ? 'border-brand-red-light' : 'border-[var(--border-subtle)]'
    } ${extra}`

  const describedBy = (field: FieldName) => (errors[field] ? `${field}-error` : undefined)

  const FieldError = ({ field }: { field: FieldName }) =>
    errors[field] ? (
      <p
        id={`${field}-error`}
        className="mt-2 text-[0.72rem] text-brand-red-light"
      >
        {errors[field]}
      </p>
    ) : null

  return (
    <div className="p-12 bg-brand-card border border-[var(--border-subtle)] rounded max-md:p-6">
      <h3 className="font-cormorant text-2xl font-[400] mb-8">Hacer una Reserva</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Formulario de reserva"
      >
        {/* Row: nombre + teléfono */}
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="mb-6">
            <label htmlFor="nombre" className={LABEL_CLASSES}>
              Nombre Completo <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
              autoComplete="name"
              aria-required="true"
              aria-invalid={!!errors.nombre}
              aria-describedby={describedBy('nombre')}
              className={fieldClass('nombre')}
            />
            <FieldError field="nombre" />
          </div>
          <div className="mb-6">
            <label htmlFor="telefono" className={LABEL_CLASSES}>
              Teléfono <span aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="+34 600 000 000"
              required
              autoComplete="tel"
              inputMode="tel"
              aria-required="true"
              aria-invalid={!!errors.telefono}
              aria-describedby={describedBy('telefono')}
              className={fieldClass('telefono')}
            />
            <FieldError field="telefono" />
          </div>
        </div>

        {/* Row: personas + fecha */}
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="mb-6">
            <label htmlFor="personas" className={LABEL_CLASSES}>
              Número de Personas <span aria-hidden="true">*</span>
            </label>
            <select
              id="personas"
              name="personas"
              required
              defaultValue=""
              aria-required="true"
              aria-invalid={!!errors.personas}
              aria-describedby={describedBy('personas')}
              className={fieldClass('personas', 'appearance-none')}
            >
              <option value="" disabled>
                Selecciona
              </option>
              {RESERVATION_PARTY_SIZES.map((size) => (
                <option key={size} value={size} className="bg-brand-dark">
                  {size}
                </option>
              ))}
            </select>
            <FieldError field="personas" />
          </div>
          <div className="mb-6">
            <label htmlFor="fecha" className={LABEL_CLASSES}>
              Fecha <span aria-hidden="true">*</span>
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              required
              min={minDate || undefined}
              aria-required="true"
              aria-invalid={!!errors.fecha}
              aria-describedby={describedBy('fecha')}
              className={fieldClass('fecha')}
            />
            <FieldError field="fecha" />
          </div>
        </div>

        {/* Row: hora + email */}
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="mb-6">
            <label htmlFor="hora" className={LABEL_CLASSES}>
              Hora <span aria-hidden="true">*</span>
            </label>
            <select
              id="hora"
              name="hora"
              required
              defaultValue=""
              aria-required="true"
              aria-invalid={!!errors.hora}
              aria-describedby={describedBy('hora')}
              className={fieldClass('hora', 'appearance-none')}
            >
              <option value="" disabled>
                Selecciona
              </option>
              <optgroup label="Mediodía">
                {RESERVATION_TIMES.lunch.map((time) => (
                  <option key={time} value={time} className="bg-brand-dark">
                    {time}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Noche">
                {RESERVATION_TIMES.dinner.map((time) => (
                  <option key={time} value={time} className="bg-brand-dark">
                    {time}
                  </option>
                ))}
              </optgroup>
            </select>
            <FieldError field="hora" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className={LABEL_CLASSES}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              autoComplete="email"
              inputMode="email"
              aria-invalid={!!errors.email}
              aria-describedby={describedBy('email')}
              className={fieldClass('email')}
            />
            <FieldError field="email" />
          </div>
        </div>

        {/* Notas */}
        <div className="mb-6">
          <label htmlFor="notas" className={LABEL_CLASSES}>
            Peticiones Especiales
          </label>
          <textarea
            id="notas"
            name="notas"
            placeholder="Alergias, ocasión especial, preferencias de mesa..."
            rows={4}
            maxLength={1000}
            className={`${INPUT_BASE} border-[var(--border-subtle)] resize-y min-h-[100px]`}
          />
        </div>

        {/* Consentimiento RGPD */}
        <div className="mb-6">
          <label
            htmlFor="privacidad"
            className="flex items-start gap-3 text-[0.78rem] text-[var(--text-muted)] leading-[1.6] cursor-pointer"
          >
            <input
              type="checkbox"
              id="privacidad"
              name="privacidad"
              value="si"
              required
              aria-required="true"
              aria-invalid={!!errors.privacidad}
              aria-describedby={describedBy('privacidad')}
              className="mt-1 w-4 h-4 shrink-0 accent-brand-red"
            />
            <span>
              Acepto el tratamiento de mis datos con la única finalidad de gestionar esta
              reserva. <span aria-hidden="true">*</span>
            </span>
          </label>
          <FieldError field="privacidad" />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full relative overflow-hidden py-[1.1rem] border rounded-sm font-jost text-[0.75rem] tracking-[0.25em] uppercase font-[400] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:inset-0 before:bg-white/8 before:-translate-x-full before:transition-transform hover:before:translate-x-0 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(192,57,43,0.25)] disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none ${
            isSuccess
              ? 'bg-[#1e8449] border-[#1e8449] text-white'
              : 'bg-brand-red border-brand-red text-brand-white'
          }`}
        >
          {isSubmitting
            ? 'Enviando...'
            : isSuccess
              ? '✓ Reserva Confirmada'
              : 'Confirmar Reserva'}
        </button>

        {/* Single polite live region for submission state */}
        <p role="status" aria-live="polite" className="sr-only">
          {isSubmitting
            ? 'Enviando la reserva…'
            : isSuccess
              ? 'Reserva recibida. Te contactaremos en breve.'
              : ''}
        </p>

        <p className="text-[0.72rem] text-[var(--text-dim)] text-center mt-4">
          Te confirmaremos la reserva por teléfono o email en menos de 2 horas.
        </p>
      </form>
    </div>
  )
}
