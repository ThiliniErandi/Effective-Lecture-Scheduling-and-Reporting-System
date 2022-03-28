import React, { useContext } from 'react';
import dayjs from 'dayjs';
// import userIcon from '../../assets/userIcon.png';
import GlobalContext from '../../context/GlobalContext';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const CalenderHeader = () => {

  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  }

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  }

  const handleReset = () => {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }

  return (
    <header className="px-4 py-2 flex items-center">
      {/* <img src={userIcon} alt="calender" className="mr-2 w-12 h-12" /> */}
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">
        CIS Year III Semester I
      </h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <Link to='/report' style={{ paddingLeft: '600px'}}>
        <MDBBtn pill color='success' style={{paddingInline:'100px', letterSpacing: '2px', fontWeight:'bold', fontSize:'15px'}}>Reports</MDBBtn>
      </Link>
    </header>
  )
}

export default CalenderHeader;