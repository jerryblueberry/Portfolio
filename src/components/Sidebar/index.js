import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assests/images/logo-s.png'
import LogoSubtitle from '../../assests/images/sajan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome,faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='main-logo' src={LogoS} alt='logo'/>
            <img  className = "sub-logo" src = {LogoSubtitle} alt='sajan' />
        </Link>
        <nav>
            <NavLink exact ="true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon={faHome} color ="#4d4d4e" />
            </NavLink>
            <NavLink exact ="true" activeclassname = "active" className="about-link" to = "/about">
                <FontAwesomeIcon icon={faUser} color ="#4d4d4e" />
            </NavLink>
            <NavLink exact ="true" activeclassname = "active" className="contact-link" to = "/contact">
                <FontAwesomeIcon icon={faEnvelope} color ="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sajan-koirala-3475491a1/"><FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" /></a>
            </li>
        </ul>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/jerryblueberry"><FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" /></a>
            </li>
        </ul>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sajan__46/"><FontAwesomeIcon icon = {faInstagram} color = "#4d4d4e" /></a>
            </li>
        </ul>
        
   
       

    </div>
   

);


export default Sidebar;