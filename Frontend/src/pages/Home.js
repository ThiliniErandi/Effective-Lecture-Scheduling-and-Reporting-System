import Header from '../components/home/Header';
import Footer from '../components/Footer';
import '../custom.css';
import Navbar from '../components/Navbar';
import DepartmentRow from '../components/home/DepartmentRow';
import NoticeBoard from '../pages/noticeBoard/NoticeBoard';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import verifyUser from '../helpers/authCheck';


const Home = () => {
    const [cookies, removeCookie] = useCookies([]);

    useEffect(() => {
        verifyUser("home", cookies, removeCookie);
    }, [cookies, removeCookie])

    return (
        <div className="home" style={{ overflow: 'hidden', backgroundColor: '#F5F5F5' }}>

            <Navbar />

            <section className="home-header">
                <Header />
            </section>

            <section className='home-content'>
                <NoticeBoard />
                <DepartmentRow />
            </section>

            <section className='footer'>
                <Footer />
            </section>
        </div>
    );
}

export default Home;
