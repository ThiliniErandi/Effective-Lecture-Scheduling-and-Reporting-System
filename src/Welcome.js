import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare  } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Welcome = () => {
    return (
      <div className="hero-banner">
        <div className="layer">
            <img className="hero-right-img" src="../assets/images/hero-right-img.png" />
            <div className="social-follow">
                <FontAwesomeIcon 
                    className='social-icon'
                    icon={ faTwitterSquare } />
                <FontAwesomeIcon 
                    className='social-icon'
                    icon={ faFacebookSquare } />
                <FontAwesomeIcon 
                    className='social-icon'
                    icon={ faLinkedin } />
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
                <div className="hero-btns">
                    <Link className='hero-btn' 
                        style={{color:'white',
                                backgroundColor:'#0753B0'}} >Login</Link>
                    <Link className='hero-btn'>Sign Up</Link>
                </div>
            </div>
        </div>
      </div> 
    );
  }
 
export default Welcome;
