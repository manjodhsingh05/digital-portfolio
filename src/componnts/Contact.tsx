import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <section>
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
            <div className="footer">© 2026 Manjodh Singh. Designed with purpose.</div>
        </section>
    )
}
export default Contact