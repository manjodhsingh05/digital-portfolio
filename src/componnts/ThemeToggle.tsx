import { useEffect, useRef, useState } from "react"

type Theme = "light" | "dark"

function savedTheme(): Theme | null {
    try {
        const saved = localStorage.getItem("portfolio-theme")
        return saved === "light" || saved === "dark" ? saved : null
    } catch {
        return null
    }
}

const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>(() =>
        document.documentElement.dataset.theme === "dark" ? "dark" : "light"
    )
    const hasPreference = useRef(savedTheme() !== null)

    useEffect(() => {
        const preference = window.matchMedia("(prefers-color-scheme: dark)")
        const followSystem = () => {
            if (!hasPreference.current) {
                const next = preference.matches ? "dark" : "light"
                document.documentElement.dataset.theme = next
                setTheme(next)
            }
        }
        followSystem()
        preference.addEventListener("change", followSystem)
        return () => preference.removeEventListener("change", followSystem)
    }, [])

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark"
        hasPreference.current = true
        document.documentElement.dataset.theme = next
        setTheme(next)
        try {
            localStorage.setItem("portfolio-theme", next)
        } catch {
            // The toggle still works when browser storage is unavailable.
        }
    }

    return (
        <button className="theme-toggle" type="button" onClick={toggleTheme}
            aria-label="Dark mode" aria-pressed={theme === "dark"}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {theme === "dark" ? <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
                </> : <path d="M20.5 13a8.5 8.5 0 0 1-9.5-9.5A8.5 8.5 0 1 0 20.5 13Z" />}
            </svg>
        </button>
    )
}

export default ThemeToggle
