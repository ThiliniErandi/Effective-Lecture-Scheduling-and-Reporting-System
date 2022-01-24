import SocialMediaIcons from '../components/SocialMediaIcons';
import ButtonComponent from '../components/ButtonComponent';

const Welcome = () => {
    return (
      <div className="hero-banner">
        <div className="layer">
            <img className="hero-right-img" src="../assets/images/hero-right-img.png" alt='hero-right-img'/>
            <div className="social-follow">
                <SocialMediaIcons/>
            </div>
            <div className="hero-text">
                <div className="hero-brand">
                    <h1>Effective Lecture Scheduling </h1>
                    <h1>& Reporting System</h1>
                </div>
                <div className="hero-welcome">
                    <h2>WELCOME</h2>
                    <h3>Academic Year 2022</h3>
                    <h3>Faculty of Applied Sciences</h3>
                    <h3>Sabaragamuwa University of Sri Lanka</h3>
                </div>
            </div>
            <div className="hero-btn-set">
                <ButtonComponent name='Login' variant='primary' />
                <ButtonComponent name='Sign Up' variant='outline-light' />
            </div>
        </div>
      </div> 
    );
  }
 
export default Welcome;
