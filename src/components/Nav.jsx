import dayjs from "dayjs";
import {navIcons, navLinks} from "#constants";

const Nav = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo apple"/>
                <p className="font-bold">Adrian's Portfolio</p>
                <ul>
                    {navLinks.map(({id, name}) => (<li key={id}><p>{name}</p></li>))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} alt={`icon ${img}`} />
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format("dd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}

export default Nav
