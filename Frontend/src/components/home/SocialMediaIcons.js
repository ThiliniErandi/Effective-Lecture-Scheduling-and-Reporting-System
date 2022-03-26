import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../../custom.css'

export default function SocialMediaIcons() {
    return <div className = "SocialMediaIcons-home">
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