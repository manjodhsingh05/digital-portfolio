const Stats = () => {
    const statsData = [
        {
            id: 1,
            number: "15+",
            text: "years in design, 8+ in UX/UI"
        },
        {
            id: 2,
            number: "25+",
            text: "UX audits and usability studies"
        },
        {
            id: 3,
            number: "30+",
            text: "stakeholder presentations"
        },
        {
            id: 4,
            number: "8+",
            text: "product releases with PMs"
        }
    ]
    return(
        <section>
            <div className="container">
                <div className="stats" data-tilt>
                    {statsData.map((item) => (
                        <div className="stat" key={item.id}>
                            <b>{item.number}</b>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Stats;