import type { MouseEvent } from "react";
const Bring = () => {
    const BringItems = [
        {
            id: 1,
            title: 'UX & product design',
            list: [
                {
                    id: 1,
                    item: 'User flows'
                },
                {
                    id: 2,
                    item: 'Information architecture'
                },
                {
                    id: 3,
                    item: 'Wireframing'
                },
                {
                    id: 4,
                    item: 'Prototyping'
                },
                {
                    id: 5,
                    item: 'Interaction design'
                },
                {
                    id: 6,
                    item: 'UX audits'
                },
                {
                    id: 7,
                    item: 'Usability-focused iteration'
                }
            ]
        },
        {
            id: 2,
            title: 'Design leadership',
            list: [
                {
                    id: 1,
                    item: 'Requirement clarification'
                },
                {
                    id: 2,
                    item: 'Design reviews'
                },
                {
                    id: 3,
                    item: 'Component consistency'
                },
                {
                    id: 4,
                    item: 'Developer handoff'
                },
                {
                    id: 5,
                    item: 'Stakeholder management'
                },
                {
                    id: 6,
                    item: 'Cross-functional teamwork'
                }
            ]
        },
        {
            id: 3,
            title: 'Product & business',
            list: [
                {
                    id: 1,
                    item: 'Workflow simplification'
                },
                {
                    id: 2,
                    item: 'Dashboard UX'
                },
                {
                    id: 3,
                    item: 'Operational tools'
                },
                {
                    id: 4,
                    item: 'Customer journeys'
                },
                {
                    id: 5,
                    item: 'Product discovery'
                },
                {
                    id: 6,
                    item: 'Business-rule mapping'
                }
            ]
        },
        {
            id: 4,
            title: 'Tools & delivery',
            list: [
                {
                    id: 1,
                    item: 'Figma'
                },
                {
                    id: 2,
                    item: 'FigJam '
                },
                {
                    id: 3,
                    item: 'Adobe XD'
                },
                {
                    id: 4,
                    item: 'HTML'
                },
                {
                    id: 5,
                    item: 'CSS/SCSS'
                },
                {
                    id: 6,
                    item: 'React'
                },
                {
                    id: 7,
                    item: 'Next.js'
                },
                {
                    id: 8,
                    item: 'Angular'
                },
                {
                    id: 9,
                    item: 'Tailwind CSS'
                }
            ]
        },
        {
            id: 5,
            title: 'AI-assisted design',
            className: 'ai',
            list: [
                {
                    id: 1,
                    item: 'Figma Make'
                },
                {
                    id: 2,
                    item: 'Claude'
                },
                {
                    id: 3,
                    item: 'ChatGPT'
                },
                {
                    id: 4,
                    item: 'Gemini'
                },
                {
                    id: 5,
                    item: 'Google Stitch'
                },
                {
                    id: 6,
                    item: ' UX Magic'
                },
                {
                    id: 7,
                    item: 'Uxcel / Useberry'
                },
                {
                    id: 8,
                    item: 'Recraft'
                },
                {
                    id: 9,
                    item: 'Design Arena'
                }
            ]
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
        <section className="bring">
            <div className="container">
                <h2>What I bring</h2>
                <p className="lead">Strategy, craft and delivery, plus AI tools that make exploration faster.</p>
                <div className="skills">
                    {BringItems.map((item) => (
                        <div
                            className={`sk ${item.className ? item.className : ''}`}
                            key={item.id}
                            // ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h3>{item.title}</h3>
                            <div>
                                {item.list.map((listItem) => (
                                    <span className="chip" key={listItem.id}>
                                        {listItem.item}
                                    </span>
                                ))}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Bring;