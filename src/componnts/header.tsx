import { useEffect, useRef, useState } from "react"

const menuItems = [
    { title: "About", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" },
]

const Header = () => {
    const headerRef = useRef<HTMLElement>(null)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        let frame = 0
        const updateActiveSection = () => {
            frame = 0
            // Include the 88px section scroll margin so clicked anchors become active.
            const offset = Math.max(88, (headerRef.current?.getBoundingClientRect().height ?? 0) + 24) + 1
            let current = ""
            for (const item of menuItems) {
                const section = document.getElementById(item.id)
                if (section && section.getBoundingClientRect().top <= offset) current = item.id
            }
            // The last section may be too short to reach the header.
            if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
                current = "contact"
            }
            setActiveSection(current)
        }
        const scheduleUpdate = () => {
            if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
        }
        const observer = new ResizeObserver(scheduleUpdate)
        observer.observe(document.body)
        updateActiveSection()
        window.addEventListener("scroll", scheduleUpdate, { passive: true })
        window.addEventListener("resize", scheduleUpdate)
        return () => {
            window.cancelAnimationFrame(frame)
            observer.disconnect()
            window.removeEventListener("scroll", scheduleUpdate)
            window.removeEventListener("resize", scheduleUpdate)
        }
    }, [])
    return (
        <header ref={headerRef}>
            <div className="container">
                <div className="inner-header">
                    <a href="#home" className="logo" aria-label="Manjodh Singh, back to top">
                        <span>MS</span>
                        {/* Manjodh S. */}
                    </a>
                    <nav className="menu" aria-label="Main navigation">
                        {menuItems.map((item) => (
                            <a key={item.id} href={`#${item.id}`}
                                className={activeSection === item.id ? "active" : undefined}
                                aria-current={activeSection === item.id ? "location" : undefined}>
                                {item.title}
                            </a>
                        ))}
                    </nav>
                    <a href='mailto:manjodhs11@gmail.com' className='btn'>Hire Me</a>
                </div>
            </div>
        </header>
    )
}
export default Header
