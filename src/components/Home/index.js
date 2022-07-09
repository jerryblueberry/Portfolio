import { Link,  } from 'react-router-dom';
import LogoTItle from '../../assests/images/logo-s.png';
import './index.scss';
const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,<br /> I'm
                <img src = {LogoTItle} alt="developer" />
                Sajan
                <br />
                Web developer
                </h1>
                <h2>FullStack Developer</h2>
                <Link to ="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
    )
}
export default Home;