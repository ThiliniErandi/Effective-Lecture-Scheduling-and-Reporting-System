import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/dashboard/dashboard.css';
import '../../custom.css';

function Sidebar() {
  return (
    <div className="wrapper">

        <nav id="sidebar">

            <ul className="list-unstyled components" style={{textAlign:'left'}}>
                <li>
                    <Link to='/dashboard' className="sidebar-a" >
                        <i className="fa fa-tv fa-fw px-4 nav-icon" aria-hidden="true"></i><span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to='/batches' className="sidebar-a" >
                        <i className="fa fa-users fa-fw px-4 nav-icon" aria-hidden="true"></i><span>Batches</span>
                    </Link>
                </li>
                <li>
                    <Link to='/courses' className="sidebar-a" >
                      <i className="fa fa-tags fa-fw px-4 nav-icon" aria-hidden="true"></i><span>Courses </span>
                    </Link>
                </li>
                <li>
                    <Link to='/departments'className="sidebar-a" >
                      <i className="fa fa-university fa-fw px-4 nav-icon" aria-hidden="true"></i><span>Departments </span>
                    </Link>
                </li>
                <li>
                    <Link to='/hods' className="sidebar-a" >
                      <i className="fa fa-heading fa-fw px-4 nav-icon" aria-hidden="true"></i><span>HODs </span>
                    </Link>
                </li>
                {/* <li>
                    <a className="sidebar-a" href="#reportSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i className="fa fa-file fa-fw px-4 nav-icon" aria-hidden="true"></i><span>Reports</span>
                    </a>
                    <ul className="collapse list-unstyled" id="reportSubmenu">
                        <li>
                            <a className="sidebar-a" href="#"><span>Report 1</span></a>
                        </li>
                        <li>
                            <a className="sidebar-a" href="#"><span>Report 2</span></a>
                        </li>
                        <li>
                            <a className="sidebar-a" href="#"><span>Report 3</span></a>
                        </li>
                    </ul>
                </li> */}
                <li>
                    <Link to='/lecturers' className="sidebar-a" >
                      <i className="fa fa-address-card fa-fw px-4 nav-icon" aria-hidden="true"></i><span>Lecturers</span>
                    </Link>
                </li>
                <li>
                    <Link to='/representatives' className="sidebar-a" >
                      <i className="fa fa-graduation-cap fa-fw px-4 nav-icon" aria-hidden="true"></i><span>Representatives</span>
                    </Link>
                </li>
                <li>
                    <Link to='/users' className="sidebar-a" >
                      <i className="fa fa-user fa-fw px-4 nav-icon" aria-hidden="true"></i><span>Users</span>
                    </Link>
                </li>
                <hr />
                {/* <li>
                    <Link to='/noticeBoard' className="sidebar-a" >
                      <i className="fa fa-newspaper fa-fw px-4 nav-icon" aria-hidden="true"></i><span>Notices</span>
                    </Link>
                </li> */}
            </ul>
        </nav>

    </div>
    
  )
};         

export default Sidebar;
