'use client'

import { useEffect } from 'react'

/**
 * Last-resort boundary: catches errors thrown by the root layout itself.
 * It replaces the whole document, so it must render <html> and <body> and
 * cannot rely on globals.css being applied — hence the inline styles.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          background: '#080808',
          color: '#f8f6f2',
          fontFamily: 'Georgia, serif',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '2rem', fontWeight: 400, margin: 0 }}>
          MARE SUSHI
        </h1>
        <p style={{ color: '#9d9b97', margin: 0, maxWidth: '30rem' }}>
          La página no se ha podido cargar. Vuelve a intentarlo en unos instantes.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            background: '#c0392b',
            color: '#f8f6f2',
            border: 'none',
            borderRadius: 2,
            padding: '0.9rem 2.2rem',
            fontSize: '0.78rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Reintentar
        </button>
      </body>
    </html>
  )
}
