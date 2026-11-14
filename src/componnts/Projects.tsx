// import { useRef } from "react";
import type { MouseEvent } from "react";
const Projects = () => {
    const Project = [
        {
            id: 1,
            subtitle: 'ALS Dispatch',
            title: 'Transportation Management & Dispatch System',
            text: 'Designed user-friendly interfaces for a logistics and dispatch management platform, simplifying complex transportation workflows.',
            list: [
                {
                    id: 1,
                    title: 'Active Load Management Dashboard'
                },
                {
                    id: 2,
                    title: 'Create Job & Update Job Workflows'
                },
                {
                    id: 3,
                    title: 'Automated Job Creation'
                },
                {
                    id: 4,
                    title: 'Interactive Popups and Data Tables'
                },
                {
                    id: 4,
                    title: 'Responsive UI and Workflow Optimization'
                }
            ],
        },
        {
            id: 2,
            subtitle: 'ALS Smart Track',
            title: 'Real-Time Fleet Tracking & Monitoring Platform',
            text: 'Worked on designing an intuitive fleet tracking experience to help transportation businesses monitor vehicles and manage operational information efficiently.',
            list: [
                {
                    id: 1,
                    title: 'Fleet Monitoring Dashboard'
                },
                {
                    id: 2,
                    title: 'Vehicle Tracking Interfaces'
                },
                {
                    id: 3,
                    title: 'Data Visualization'
                },
                {
                    id: 4,
                    title: 'User-Friendly Navigation'
                },
                {
                    id: 5,
                    title: 'Responsive Interface Design'
                }
            ],
            className: 'a'
        },
        {
            id: 3,
            subtitle: 'ALS ELD',
            title: 'Electronic Logging Device & Driver Compliance Platform',
            text: 'Designed interfaces for an electronic logging solution focused on making driver activity and compliance-related information easier to understand and manage.',
            list: [
                {
                    id: 1,
                    title: 'Driver Hours of Service (HOS)'
                },
                {
                    id: 2,
                    title: 'Electronic Log Management'
                },
                {
                    id: 3,
                    title: 'Driver Activity Dashboard'
                },
                {
                    id: 4,
                    title: 'Compliance Information Display'
                },
                {
                    id: 5,
                    title: 'Clear Data Tables and User Workflows'
                }
            ],
            className: 'a'
        },
        {
            id: 4,
            subtitle: 'ALS Truck Repair Shop',
            title: 'Truck Maintenance & Repair Management System',
            text: 'Worked on interface design for a truck repair management platform, focusing on simplifying repair workflows and improving information accessibility.',
            list: [
                {
                    id: 1,
                    title: 'Repair Job Management'
                },
                {
                    id: 2,
                    title: 'Service & Maintenance Records'
                },
                {
                    id: 3,
                    title: 'Vehicle Information Management'
                },
                {
                    id: 4,
                    title: 'Repair Status Tracking'
                },
                {
                    id: 4,
                    title: 'Dashboard and Form Design'
                }
            ],
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
