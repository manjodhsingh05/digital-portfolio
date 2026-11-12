import { NavLink } from "react-router-dom";
import user from "../assets/img/download.jpg";
import { useRef } from "react";
import type { MouseEvent } from "react";
const Info = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        // Measure the wrapper, not the rotated element
        const rect = e.currentTarget.getBoundingClientRect();

        if (!rect.width || !rect.height) return;

        const x = Math.min(1, Math.max(0,
            (e.clientX - rect.left) / rect.width
        ));

        const y = Math.min(1, Math.max(0,
            (e.clientY - rect.top) / rect.height
        ));

        // Rotation between -4deg and +4deg
        const rx = (0.5 - y) * 8;
        const ry = (x - 0.5) * 8;

        card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;

        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
    };
    return (
        <section>
            <div className="info-main">
                <div className="container">
                    <div className="info-parent">
                        <div className="info-side">
                            <h6>Open to opportunities · Mohali, India · Remote / Hybrid</h6>
                            <h1>Manjodh Singh</h1>
                            <h4>Senior UI/UX Designer · Product Designer · Web Designer</h4>
                            <p>I turn complex business workflows into clear, intuitive digital experiences. With 8+ years in UI/UX and web design, I connect user needs, product goals, and frontend feasibility.</p>
                            <div className="action">
                                <NavLink to='mailto:manjodhs11@gmail.com' className='btn'>See my work</NavLink>
                                <NavLink to='mailto:manjodhs11@gmail.com' className='btn'>Get in touch</NavLink>
                            </div>
                        </div>
                        <div className="scene">
                            <div
                                className="stage"
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="halo"></div>
                                <div className="ring"></div>

                                <div className="photo">
                                    <img src={user} alt="Keval Vora" />
                                </div>

                                {/* <div className="cw" style={{ left: "6%", top: "8%"}}>
                                    <div className="cube"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                                </div> */}
                                <div className="cw" style={{ right: "6%", bottom: "6%"}}>
                                    <div className="cube"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                                </div>

                                <div className="fl" style={{ right: "-4%", top: "12%" }}>
                                    <div className="fl-content">
                                        <b>200+</b>
                                        <h4>Screens Designed</h4>
                                    </div>
                                </div>

                                <div
                                    className="fl"
                                    style={{ left: "-6%", bottom: "22%" }}
                                >
                                    <div
                                        className="fl-content"
                                        style={{ animationDelay: "-2s" }}
                                    >
                                        <b>8+</b>
                                        <h4>Years of Experience</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Info;