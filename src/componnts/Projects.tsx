// import { useRef } from "react";
import type { MouseEvent } from "react";
const Projects = () => {
    const Project = [
        {
            id: 1,
            subtitle: 'Healthcare · Clinical documentation',
            title: 'Team Based Charting',
            text: 'Lets MAs, NPs, clinicians and AI build patient notes together, with clear ownership and an audit trail. It reduces effort while the clinician stays the final authority.',
            list: [
                {
                    id: 1,
                    title: 'Project lead'
                },
                {
                    id: 2,
                    title: '8 weeks'
                },
                {
                    id: 3,
                    title: 'Team of 4'
                },
                {
                    id: 4,
                    title: 'Desktop + mobile'
                },
            ],
        },
        {
            id: 2,
            subtitle: 'Healthcare · Clinical documentation',
            title: 'Team Based Charting',
            text: 'Lets MAs, NPs, clinicians and AI build patient notes together, with clear ownership and an audit trail. It reduces effort while the clinician stays the final authority.',
            list: [
                {
                    id: 1,
                    title: 'Project lead'
                },
                {
                    id: 2,
                    title: '8 weeks'
                },
                {
                    id: 3,
                    title: 'Team of 4'
                },
                {
                    id: 4,
                    title: 'Desktop + mobile'
                },
            ],
            className: 'a'
        }
    ]

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        if (!rect.width || !rect.height) return;

        const x = Math.min(1, Math.max(0,
            (e.clientX - rect.left) / rect.width
        ));

        const y = Math.min(1, Math.max(0,
            (e.clientY - rect.top) / rect.height
        ));

        const rx = (0.5 - y) * 8;
        const ry = (x - 0.5) * 8;

        card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;

        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
    };
    return (
        <section id="projects" className="project">
            <div className="container">
                <h2>Selected projects</h2>
                <p className="lead">Recent AI-enabled healthcare products, designed and led end to end.</p>
                <div className="proj">
                    {Project.map((item) => (
                        <article
                            className={`pc ${item.className ? item.className : ''}`}
                            key={item.id}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="small">{item.subtitle}</span>
                            <h3>{item.title}</h3>
                            <p>
                                {item.text}
                            </p>
                            <div className="facts">
                                {item.list.map((listitem) => (
                                    <span key={listitem.id}>{listitem.title}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects;
