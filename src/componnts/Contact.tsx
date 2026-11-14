import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact">
                    <h2>Let’s create digital experiences that work beautifully.</h2>
                    <p>Open to UI/UX, Product Design, and Web Design opportunities — especially remote and hybrid roles. Based in Mohali, India; available to join immediately.</p>
                    <div className="cta">
                        <Link to='mailto:manjodhs11@gmail.com' className="btn p">manjodhs11@gmail.com</Link>
                        <Link to='tel:+917696749972' className="btn">+91 7696749972</Link>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <nav className="social-links" aria-label="Social profiles">
                    <Link to="https://www.behance.net/manjodhsingh" target="_blank" rel="noopener noreferrer" aria-label="Manjodh Singh on Behance (opens in a new tab)">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9.3 11.4c1.1-.5 1.7-1.3 1.7-2.6C11 6.4 9.2 5.5 7 5.5H1v13h6.2c2.4 0 4.5-1.2 4.5-3.8 0-1.7-.8-2.8-2.4-3.3ZM3.9 7.7h2.7c1 0 1.7.3 1.7 1.4 0 1-.7 1.4-1.6 1.4H3.9V7.7Zm2.9 8.6H3.9v-3.6h3c1.2 0 1.9.5 1.9 1.8s-.9 1.8-2 1.8ZM14.5 6h6v1.8h-6V6Zm8.5 8.4c0-3-1.5-5.2-4.7-5.2-2.9 0-4.9 2.1-4.9 4.9 0 3 1.8 4.9 4.9 4.9 2.2 0 3.8-1 4.5-3.2h-2.3c-.2.7-1.2 1.2-2.1 1.2-1.5 0-2.3-.8-2.4-2.4H23v-.2Zm-7-1.5c.1-1 .7-1.8 2.2-1.8 1.2 0 1.8.7 2 1.8H16Z" />
                        </svg>
                    </Link>
                    <Link to="https://www.linkedin.com/in/manjodh-singh521998/" target="_blank" rel="noopener noreferrer" aria-label="Manjodh Singh on LinkedIn (opens in a new tab)">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.31h.04c.39-.75 1.36-1.55 2.79-1.55 2.99 0 3.58 1.97 3.58 4.53v5.26Z" />
                        </svg>
                    </Link>
                </nav>
                <p>© 2026 Manjodh Singh</p>
            </footer>
        </section>
    )
}
export default Contact
