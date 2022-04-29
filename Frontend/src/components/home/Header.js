import SocialMediaIcons from '../home/SocialMediaIcons';
import '../../custom.css';

export default function Header() {
    return <div className="hero-banner-home">
        <div className="layer-home">
            <img className="hero-right-img-home" src="../assets/images/hero-right-img.png" alt='hero-right-img' />
            <div className="social-follow">
                <SocialMediaIcons />
            </div>
            <div className="hero-text">
                <div className="hero-brand-home">
                    <h1>Effective Lecture Scheduling </h1>
                    <h1 className='welcome-text'>& Reporting System</h1>
                </div>
                <div className="home-welcome">
                    <h2>WELCOME</h2>
                    <h3>Academic Year 2020/2021</h3>
                    <h3>Faculty of Applied Sciences</h3>
                    <h3>Sabaragamuwa University of Sri Lanka</h3>
                </div>
            </div>
        </div>
    </div>

}