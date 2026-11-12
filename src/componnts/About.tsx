const About = () => {
    const sectors = [
        {
            id: 1,
            name: 'Healthcare'
        },
        {
            id: 2,
            name: 'E-commerce'
        },
        {
            id: 3,
            name: 'Enterprise'
        },
        {
            id: 4,
            name: 'Pre-sales'
        },
        {
            id: 5,
            name: 'eLearning'
        },
    ]
    return (
        <section className="about-main">
            <div className="container">
                <div className="about">
                    <div>
                        <h2>Design that people adopt, and teams can ship.</h2>
                    </div>
                    <div className="txt">
                        <p>I’m a senior designer who leads UX and UI strategy from research and problem definition through information architecture, flows, prototyping, usability validation and developer handoff.</p>
                        <p>I build and scale design systems that keep products consistent and speed up delivery. I work closely with Product, Engineering, Business and Clinical stakeholders in Agile teams, present design rationale to leadership, and mentor junior designers.</p>
                        <div className="sectors">
                            {sectors.map((item) => (
                                <span className="chip" key={item.id}>{item.name}</span>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;