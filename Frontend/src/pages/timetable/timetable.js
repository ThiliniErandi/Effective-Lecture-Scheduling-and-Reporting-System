import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
// import './tailwind.css';

import { getMonth } from '../../utils/utils';
import CalenderHeader from '../../components/Timetable/CalenderHeader';
import Sidebar from '../../components/Timetable/Sidebar';
import Month from '../../components/Timetable/Month';
import GlobalContext from '../../context/GlobalContext';
import EventModal from '../../components/Timetable/EventModal';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import verifyUser from '../../helpers/authCheck';
import { useCookies } from 'react-cookie';

const timetable = {
  overflow: 'hidden'
}
function Timetable() {

  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
      verifyUser("timetable", cookies, removeCookie);
  }, [cookies, removeCookie])

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (<div className='timetable'>
    <Navbar/>
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col" style={timetable}>
        <CalenderHeader />
        <div className="flex flex-1">
            <Sidebar />
            <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
    <Footer/>
    </div>
  );
}

export default Timetable;
