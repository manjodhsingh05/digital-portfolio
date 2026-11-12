const About = () => {
    const sectors = [
        {
            id: 1,
            name: 'Enterprise SaaS'
        },
        {
            id: 2,
            name: 'Logistics'
        },
        {
            id: 3,
            name: 'Inventory & Retail'
        },
        {
            id: 4,
            name: 'Dashboards'
        },
        {
            id: 5,
            name: 'Design Systems'
        },
        {
            id: 6,
            name: 'Web Applications'
        },
    ]
    return (
        <section id="about" className="about-main">
            <div className="container">
                <div className="about">
                    <div>
                        <h2>Design that makes complex work feel simple.</h2>
                    </div>
                    <div className="txt">
                        <p>I’m a UI/UX and Product Designer based in Mohali, Punjab, with experience creating enterprise interfaces, responsive websites, and practical product workflows. I focus on clarity, consistency, and experiences that people can use with confidence.</p>
                        <p>I work across discovery, user flows, wireframes, high-fidelity UI, prototypes, and developer handoff. My frontend knowledge helps me collaborate with engineers and make thoughtful design decisions that work in real products.</p>
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
