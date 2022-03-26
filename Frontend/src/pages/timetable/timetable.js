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

function Timetable() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (<div className='timetable'>
    <Navbar/>
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
            <Sidebar />
            <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
    </div>
  );
}

export default Timetable;
