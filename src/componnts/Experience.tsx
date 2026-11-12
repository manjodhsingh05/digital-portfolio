const Experience = () => {
    const job = [
        {
            id: 1,
            time: '2025 – Present',
            company: 'Arethos Ventures',
            project: '· UI/UX / Product Design',
            list: [
                {
                    id: 1,
                    text: 'Design enterprise application interfaces and operational workflows. Collaborate with developers and stakeholders on usability, consistency, and implementation-ready designs.'
                }
            ]
        },
        {
            id: 2,
            time: '2023 – 2025',
            company: 'Zero IT Solution',
            project: '· UI/UX / Web Design',
            list: [
                {
                    id: 1,
                    text: 'Designed web interfaces and responsive experiences; translated requirements into visual layouts and reusable UI patterns.'
                }
            ]
        },
        {
            id: 3,
            time: '2021 – 2023',
            company: 'Fortec Web Solution',
            project: '· Web / UI Design',
            list: [
                {
                    id: 1,
                    text: 'Worked on website layouts, interface improvements, and responsive design delivery.'
                }
            ]
        },
        {
            id: 4,
            time: '2020 – 2021',
            company: 'Crishion Solution',
            project: '· Web Design',
            list: [
                {
                    id: 1,
                    text: 'Created and refined website designs with attention to usability, presentation, and frontend handoff.'
                }
            ]
        },
        {
            id: 5,
            time: '2017 – 2020',
            company: 'Baseline IT Development',
            project: '· Web Design',
            list: [
                {
                    id: 1,
                    text: 'Built foundational experience designing websites, responsive layouts, and production-ready interfaces'
                },
                {
                    id: 2,
                    text: 'Please verify job titles and month-level dates against your latest CV before posting; only company/year history is currently used.'
                }
            ]
        }
    ]
    return (
        <section id="experience" className="experience">
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
