import type { MouseEvent } from "react";
const Education = () => {
    const edu = [
        {
            id: 1,
            title: 'Bachelor of Computer Applications (BCA)',
            info: 'IEC University, 2018'
        },
        {
            id: 2,
            title: 'Professional focus',
            info: 'UI/UX Design · Product Design · Web Design · Frontend Development'
        },
        {
            id: 3,
            title: 'Languages',
            info: 'Punjabi, English, Hindi'
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
        <section className="education">
            <div className="container">
                <h2>Education & languages</h2>
                <div className="edu">
                    {edu.map((item) => (
                        <div className="ed" key={item.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                            <h3>{item.title}</h3>
                            <p>{item.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Education