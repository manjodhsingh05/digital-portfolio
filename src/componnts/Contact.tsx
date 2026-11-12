import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <section>
            <div className="container">
                <div className="contact">
                    <h2>Let’s design something people love.</h2>
                    <p>Open to senior and lead design roles, and to relocating to Bangalore, Pune or Hyderabad.</p>
                    <div className="cta">
                        <Link to='mailto:manjodhs11@gmail.com' className="btn p">manjodhs11@gmail.com</Link>
                        <Link to='tel:+917696749972' className="btn">+91 7696749972</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact