const Stats = () => {
    const statsData = [
        {
            id: 1,
            number: "8+",
            text: "Years in UI/UX & web design"
        },
        {
            id: 2,
            number: "5",
            text: "Companies across my career"
        },
        {
            id: 3,
            number: "3",
            text: "Core disciplines: UX, product & web"
        },
        {
            id: 4,
            number: "1",
            text: "Design-to-development mindset"
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