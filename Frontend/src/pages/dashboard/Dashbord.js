import Sidebar from '../../components/DashboardComponents/Sidebar';
import Navbar from '../../components/Navbar';
import { Row } from 'react-bootstrap';
import './dashboard.css';

const Dashboard = () => {
    return ( 
        <div className='dashboard'>
            <Navbar/>
            <Sidebar/>
            <Row className = "footer-dashboard text-center y-4" >
                <p style = {{ padding: '5px', fontSize: '15px', color: 'black' } } >
                    &copy; { new Date().getFullYear() }Copyright:
                    <a href = "https://www.mdbootstrap.com"
                    style = {{ textDecoration: 'none', fontWeight: '500' } } > Name.com </a> 
                </p> 
            </Row> 
        </div>
        
     );
}
 
export default Dashboard;
