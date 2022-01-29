import React from 'react';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HomeIcon from '@material-ui/icons/Home';
function Sidebar(props) {
    return (
        <div className={`sidebar ${props.menuActive ? 'active' : ''}`}>
            <div className='logo'>ASTRA</div>
            <div className='btn btn-1'><AssignmentTurnedInIcon />Available for Job</div>
            <div className='menu'>
                <div className='btn active' onClick={() => { props.changePage('home') }}><HomeIcon />Home</div>
                <div className='sub-menu'>
                    <div className='btn' onClick={() => { props.changePage('profile') }}><AssignmentTurnedInIcon />Profile</div>
                    <div className='btn box'>Apply for Jobs</div>
                    <div className='btn box'>Mail Box</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
