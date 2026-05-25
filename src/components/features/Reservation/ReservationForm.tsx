'use client'

import { useState, type FormEvent } from 'react'
import { useToast } from '@/contexts/ToastContext'
import { getTodayISO } from '@/lib/utils'
import { RESERVATION_PARTY_SIZES, RESERVATION_TIMES } from '@/constants/restaurant'
import type { FormStatus } from '@/types'

const INPUT_BASE =
  'w-full bg-brand-charcoal border border-[var(--border-subtle)] rounded-sm text-brand-white font-jost text-[0.95rem] font-light px-[1.1rem] py-[0.9rem] transition-all duration-300 outline-none focus:border-brand-red focus:bg-[rgba(192,57,43,0.05)] placeholder:text-[var(--text-dim)]'

/**
 * Reservation form — Client Component.
 * Handles controlled form state, validation feedback, and simulated submission.
 * In production, replace the `simulateSubmit` function with a real API call.
 */
export function ReservationForm() {
  const { showToast } = useToast()
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    // TODO: Replace with real API call — e.g. POST /api/reservations
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus('success')
    showToast('✓ Reserva recibida — te contactaremos en breve.')

    setTimeout(() => {
      setStatus('idle')
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  const isSubmitting = status === 'submitting'
  const isSuccess = status === 'success'

  return (
    <div className="p-12 bg-brand-card border border-[var(--border-subtle)] rounded max-md:p-6">
      <h3 className="font-cormorant text-2xl font-[400] mb-8">Hacer una Reserva</h3>

      <form onSubmit={handleSubmit} noValidate aria-label="Formulario de reserva">
        {/* Row: nombre + teléfono */}
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="mb-6">
            <label htmlFor="nombre" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2.5 font-[400]">
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
              autoComplete="name"
              className={INPUT_BASE}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="telefono" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2.5 font-[400]">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="+34 600 000 000"
              required
              autoComplete="tel"
              className={INPUT_BASE}
            />
          </div>
        </div>

        {/* Row: personas + fecha */}
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="mb-6">
            <label htmlFor="personas" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2.5 font-[400]">
              Número de Personas
            </label>
            <select
              id="personas"
              name="personas"
              required
              defaultValue=""
              className={`${INPUT_BASE} appearance-none`}
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
          </div>
          <div className="mb-6">
            <label htmlFor="fecha" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2.5 font-[400]">
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              required
              min={getTodayISO()}
              className={INPUT_BASE}
            />
          </div>
        </div>

        {/* Row: hora + email */}
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="mb-6">
            <label htmlFor="hora" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2.5 font-[400]">
              Hora
            </label>
            <select
              id="hora"
              name="hora"
              required
              defaultValue=""
              className={`${INPUT_BASE} appearance-none`}
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
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2.5 font-[400]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              autoComplete="email"
              className={INPUT_BASE}
            />
          </div>
        </div>

        {/* Notas */}
        <div className="mb-6">
          <label htmlFor="notas" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2.5 font-[400]">
            Peticiones Especiales
          </label>
          <textarea
            id="notas"
            name="notas"
            placeholder="Alergias, ocasión especial, preferencias de mesa..."
            rows={4}
            className={`${INPUT_BASE} resize-y min-h-[100px]`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full relative overflow-hidden py-[1.1rem] border rounded-sm font-jost text-[0.75rem] tracking-[0.25em] uppercase font-[400] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:inset-0 before:bg-white/8 before:-translate-x-full before:transition-transform hover:before:translate-x-0 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(192,57,43,0.25)] disabled:cursor-not-allowed ${
            isSuccess
              ? 'bg-[#27ae60] border-[#27ae60] text-white'
              : 'bg-brand-red border-brand-red text-brand-white'
          }`}
          aria-live="polite"
        >
          {isSubmitting
            ? 'Enviando...'
            : isSuccess
              ? '✓ Reserva Confirmada'
              : 'Confirmar Reserva'}
        </button>

        <p className="text-[0.72rem] text-[var(--text-dim)] text-center mt-4">
          Te confirmaremos la reserva por teléfono o email en menos de 2 horas.
        </p>
      </form>
    </div>
  )
}
