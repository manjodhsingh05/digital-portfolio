const Experience = () => {
    const job = [
        {
            id: 1,
            time: 'Feb 2022 – Aug 2026',
            company: 'Lead Designer',
            project: '· IKS Health',
            list: [
                {
                    id: 1,
                    text: 'Led UX/UI strategy for clinical and patient-facing healthcare products, turning complex clinical workflows into intuitive experiences with a short learning curve.'
                },
                {
                    id: 2,
                    text: 'Architected and governed a design system of 50+ components across 120+ screens, improving consistency and speeding up handoff and delivery.'
                },
                {
                    id: 3,
                    text: 'Partnered with Product Managers on vision, prioritization and solution definition, from discovery to release.'
                },
                {
                    id: 4,
                    text: 'Ran usability research and testing, using feedback and product metrics to drive evidence-based improvements.'
                },
                {
                    id: 5,
                    text: 'Worked with 10+ developers and clinical stakeholders in Agile/Scrum, and presented in 15+ leadership reviews.'
                },
                {
                    id: 6,
                    text: 'Used AI-assisted design and rapid prototyping across research, ideation and solution development.'
                }
            ]
        },
        {
            id: 2,
            time: 'Feb 2022 – Aug 2026',
            company: 'Lead Designer',
            project: '· IKS Health',
            list: [
                {
                    id: 1,
                    text: 'Led UX/UI strategy for clinical and patient-facing healthcare products, turning complex clinical workflows into intuitive experiences with a short learning curve.'
                },
                {
                    id: 2,
                    text: 'Architected and governed a design system of 50+ components across 120+ screens, improving consistency and speeding up handoff and delivery.'
                },
                {
                    id: 3,
                    text: 'Partnered with Product Managers on vision, prioritization and solution definition, from discovery to release.'
                },
                {
                    id: 4,
                    text: 'Ran usability research and testing, using feedback and product metrics to drive evidence-based improvements.'
                },
                {
                    id: 5,
                    text: 'Worked with 10+ developers and clinical stakeholders in Agile/Scrum, and presented in 15+ leadership reviews.'
                },
                {
                    id: 6,
                    text: 'Used AI-assisted design and rapid prototyping across research, ideation and solution development.'
                }
            ]
        },
        {
            id: 3,
            time: 'Feb 2022 – Aug 2026',
            company: 'Lead Designer',
            project: '· IKS Health',
            list: [
                {
                    id: 1,
                    text: 'Led UX/UI strategy for clinical and patient-facing healthcare products, turning complex clinical workflows into intuitive experiences with a short learning curve.'
                },
                {
                    id: 2,
                    text: 'Architected and governed a design system of 50+ components across 120+ screens, improving consistency and speeding up handoff and delivery.'
                },
                {
                    id: 3,
                    text: 'Partnered with Product Managers on vision, prioritization and solution definition, from discovery to release.'
                },
                {
                    id: 4,
                    text: 'Ran usability research and testing, using feedback and product metrics to drive evidence-based improvements.'
                },
                {
                    id: 5,
                    text: 'Worked with 10+ developers and clinical stakeholders in Agile/Scrum, and presented in 15+ leadership reviews.'
                },
                {
                    id: 6,
                    text: 'Used AI-assisted design and rapid prototyping across research, ideation and solution development.'
                }
            ]
        },
        {
            id: 4,
            time: 'Feb 2022 – Aug 2026',
            company: 'Lead Designer',
            project: '· IKS Health',
            list: [
                {
                    id: 1,
                    text: 'Led UX/UI strategy for clinical and patient-facing healthcare products, turning complex clinical workflows into intuitive experiences with a short learning curve.'
                },
                {
                    id: 2,
                    text: 'Architected and governed a design system of 50+ components across 120+ screens, improving consistency and speeding up handoff and delivery.'
                },
                {
                    id: 3,
                    text: 'Partnered with Product Managers on vision, prioritization and solution definition, from discovery to release.'
                },
                {
                    id: 4,
                    text: 'Ran usability research and testing, using feedback and product metrics to drive evidence-based improvements.'
                },
                {
                    id: 5,
                    text: 'Worked with 10+ developers and clinical stakeholders in Agile/Scrum, and presented in 15+ leadership reviews.'
                },
                {
                    id: 6,
                    text: 'Used AI-assisted design and rapid prototyping across research, ideation and solution development.'
                }
            ]
        }
    ]
    return (
        <section className="experience">
            <div className="container">
                <h2>Experience</h2>
                <div className="tl">
                    {job.map((item) => (
                        <div className="job" key={item.id}>
                            <h6 className="when">{item.time}</h6>
                            <h3>{item.company} <span>{item.project}</span></h3>
                            <ul>
                                {item.list.map((listItem) => (
                                    <li key={listItem.id}>{listItem.text}</li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Experience;