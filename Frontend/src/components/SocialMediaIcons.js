import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaIcons() {
    return <div className = "SocialMediaIcons"
    style = {{
                color: '#fff',
                fontSize: '75px',
                // paddingRight: '10px',
                paddingLeft: '1280px',
                marginTop: '20px',
                position: 'absolute',
                float: 'right'
            }} >
        <FontAwesomeIcon
            href = ""
            className = 'social-icon'
            style = {{ padding: '10px', cursor: 'pointer' }}
            icon = { faTwitterSquare }
        /> 
        <FontAwesomeIcon
            href = ""
            className = 'social-icon'
            style = {{ padding: '10px', cursor: 'pointer' }}
            icon = { faFacebookSquare }
        /> 
        <FontAwesomeIcon
            href = ""
            className = 'social-icon'
            style = {{ padding: '10px', cursor: 'pointer' }}
            icon = { faLinkedin }
            /> 
        </div > ;
}