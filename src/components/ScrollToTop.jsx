import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Numa SPA sem SSR a restauração nativa do navegador acontece cedo demais
// (antes do React montar o conteúdo), então a posição salva não "pega" em
// páginas altas. Por isso assumimos o controle manualmente, salvando a
// posição por rota e restaurando depois que o conteúdo já tiver altura
// suficiente.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const STORAGE_KEY = 'eg1-scroll-positions'

function readPositions() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function savePosition(pathname) {
  const positions = readPositions()
  positions[pathname] = window.scrollY
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions))
  } catch {
    // ignore quota errors
  }
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      if (hash) return

      const saved = readPositions()[pathname]
      if (!saved) return

      let attempts = 0
      const tryRestore = () => {
        attempts += 1
        if (document.body.scrollHeight >= saved || attempts > 40) {
          window.scrollTo(0, saved)
        } else {
          requestAnimationFrame(tryRestore)
        }
      }
      requestAnimationFrame(tryRestore)
      return
    }

    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    const handleSave = () => savePosition(pathname)
    window.addEventListener('beforeunload', handleSave)
    window.addEventListener('pagehide', handleSave)
    return () => {
      handleSave()
      window.removeEventListener('beforeunload', handleSave)
      window.removeEventListener('pagehide', handleSave)
    }
  }, [pathname])

  return null
}
