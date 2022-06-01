import { NavLink } from 'react-router-dom'
import './style.scss'

const Header = () => {

    return (
        <div className="Header">
            <div className="Header__container">
                <NavLink to={{pathname: '/'}} className="Header__link">Все котики</NavLink>
                <NavLink to={{pathname: '/favorites-cats'}} className="Header__link">Любимые котики</NavLink>
            </div>
        </div>
    )
}
export default Header
