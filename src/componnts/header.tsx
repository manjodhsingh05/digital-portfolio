import { NavLink } from "react-router-dom"

const Header = () => {
    const menuItems = [
        {
            id: 1,
            title: "About",
            path: "/about"
        },
        {
            id: 2,
            title: "Skills",
            path: "/skills"
        },
        {
            id: 3,
            title: "Experience",
            path: "/experience"
        },
        {
            id: 4,
            title: "Projects",
            path: "/projects"
        },
        {
            id: 5,
            title: "Contact",
            path: "/contact"
        }
    ]
    return (
        <header>
            <div className="container">
                <div className="inner-header">
                    <NavLink to="/" className="logo">
                        <span>MS</span>
                        {/* Manjodh S. */}
                    </NavLink>
                    <menu className="menu">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <NavLink to={item.path}>
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </menu>
                    <NavLink to='mailto:manjodhs11@gmail.com' className='btn'>Hire Me</NavLink>
                </div>
            </div>
        </header>
    )
}
export default Header