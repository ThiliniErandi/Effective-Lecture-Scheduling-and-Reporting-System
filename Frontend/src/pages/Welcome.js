import SocialMediaIcons from '../components/SocialMediaIcons';
import LoginComponent from '../forms/welcome/LoginComponent';
import '../custom.css';

const Welcome = () => {
    return (
      <div className="hero-banner">
        <div className="layer">
            <img className="hero-right-img" src="../assets/images/hero-right-img.png" alt='hero-right-img'/>
            <div className="social-follow">
                <SocialMediaIcons />
            </div>
            <div className="hero-text">
                <div className="hero-brand">
                    <h1 >Effective Lecture Scheduling </h1>
                    <h1 className='welcome-text'>& Reporting System</h1>
                </div>
                <div className="hero-welcome">
                    <h2>WELCOME</h2>
                    <h3>Academic Year 2020/2021</h3>
                    <h3>Faculty of Applied Sciences</h3>
                    <h3>Sabaragamuwa University of Sri Lanka</h3>
                </div>
            </div>
            <LoginComponent/>
        </div>
      </div> 
    );
  }
 
export default Welcome;
