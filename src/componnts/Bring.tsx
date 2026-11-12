import { useRef } from "react";
import type { MouseEvent } from "react";
const Bring = () => {
    const BringItems = [
        {
            id: 1,
            title: 'UX & product design',
            list: [
                {
                    id: 1,
                    item: 'UX strategy'
                },
                {
                    id: 2,
                    item: 'User research'
                },
                {
                    id: 3,
                    item: 'Information architecture'
                },
                {
                    id: 4,
                    item: 'User flows'
                },
                {
                    id: 5,
                    item: 'Wireframing'
                },
                {
                    id: 6,
                    item: 'Prototyping'
                },
                {
                    id: 7,
                    item: 'Interaction design'
                },
                {
                    id: 8,
                    item: 'UI design'
                },
                {
                    id: 9,
                    item: 'Usability testing'
                },
                {
                    id: 10,
                    item: 'UX audits'
                }
            ]
        },
        {
            id: 2,
            title: 'Design leadership',
            list: [
                {
                    id: 1,
                    item: 'Design systems'
                },
                {
                    id: 2,
                    item: 'Component libraries'
                },
                {
                    id: 3,
                    item: 'Design governance'
                },
                {
                    id: 4,
                    item: 'Mentoring'
                },
                {
                    id: 5,
                    item: 'Stakeholder management'
                },
                {
                    id: 6,
                    item: 'Design thinking'
                }
            ]
        },
        {
            id: 3,
            title: 'Product & business',
            list: [
                {
                    id: 1,
                    item: 'Product discovery'
                },
                {
                    id: 2,
                    item: 'Customer journey mapping'
                },
                {
                    id: 3,
                    item: 'Data-informed design'
                },
                {
                    id: 4,
                    item: 'Conversion optimization'
                },
                {
                    id: 5,
                    item: 'User adoption'
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
                    item: 'Adobe XD'
                },
                {
                    id: 3,
                    item: 'Miro'
                },
                {
                    id: 4,
                    item: 'Jira'
                },
                {
                    id: 5,
                    item: 'Design tokens'
                },
                {
                    id: 6,
                    item: 'Dev Mode'
                },
                {
                    id: 7,
                    item: 'Agile / Scrum'
                },
                {
                    id: 8,
                    item: 'WCAG 2.2'
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
                    item: 'Lovable'
                },
                {
                    id: 6,
                    item: 'Perplexity'
                },
                {
                    id: 7,
                    item: 'Rapid prototyping'
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