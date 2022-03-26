import Header from '../components/Home/Header';
import Footer from '../components/Footer';
import '../custom.css';
import Navbar from '../components/Navbar';
import DepartmentRow from '../components/Home/DepartmentRow';
import NoticeBoard from '../pages/noticeBoard/NoticeBoard';

const Home = () => {
    return (
        <div className="home" style={{overflow:'hidden',backgroundColor:'#F5F5F5'}}>

            <Navbar/>

            <section className="home-header">
                <Header/>
            </section>

            <section className='home-content'>
                <NoticeBoard/>
                <DepartmentRow/>
            </section>
            
            <section className='footer'>
                    <Footer/>
            </section>
      </div>
    );
  }
 
export default Home;
