import React, { useContext, useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { userProfile } from '../context';

function Profile() {
    const context = useContext(userProfile);
    const [perEdit, setPerEdit] = useState(false);
    const [expEdit, setExpEdit] = useState(false);
    const [avaEdit, setAvaEdit] = useState(false);
    return (
        <div className='profilepage'>
            <div className='upload'>
                <PostAddIcon />
                <p>Upload your <span>resume</span></p>
            </div>
            <div className='personal-info'>
                {perEdit ?
                    <>
                        <div className='edit'>
                            <div>
                                <input type='text' name='first' value={context.user.first} onChange={context.handleChange} placeholder='First Name' />
                                <input type='text' name='last' value={context.user.last} onChange={context.handleChange} placeholder='Last Name' />
                            </div>
                            <input type='text' name='country' value={context.user.country} onChange={context.handleChange} placeholder='Country' />
                            <div>
                                <div className='email'>
                                    <EmailIcon id='email-icon' />
                                    <input type='email' name='email' value={context.user.email} onChange={context.handleChange} placeholder='email' />
                                </div>
                                <div className='phone'>
                                    <PhoneIcon id='phone-icon' />
                                    <input type='tel' name='phone' value={context.user.phone} onChange={context.handleChange} placeholder='eg: 9452567890' />
                                </div>
                            </div>
                        </div>
                        <button className='btn save' onClick={() => setPerEdit(false)}>Save</button>
                    </> :
                    <>
                        <div className='display'>

                            <div>
                                <div className='circle'>{context.user.first[0]}</div>
                                <div className='name'>
                                    <h2>{`${context.user.first} ${context.user.last}`}</h2>
                                    <p className='country-name'>{context.user.country}</p>
                                </div>
                            </div>

                            <div>
                                <p><EmailIcon />{context.user.email}</p>
                                <p><PhoneIcon />{context.user.phone}</p>

                            </div>
                        </div>
                        <button onClick={() => setPerEdit(true)}>
                            <EditIcon className='edit-btn' />
                        </button>
                    </>
                }
            </div>
            <div className='experience'>
                {expEdit ?
                    <>
                        <div className='edit'>
                            <label htmlFor='exp'><SettingsApplicationsIcon />Overall experience</label>
                            <textarea name='exp' id='exp' value={context.user.exp} onChange={context.handleChange} rows='2' cols='20'></textarea>
                        </div>
                        <button className='btn save' onClick={() => setExpEdit(false)}>Save</button>
                    </>
                    :
                    <>
                        <div className='display'>
                            <p><SettingsApplicationsIcon />Overall experience</p>
                            <p className='exp'>{context.user.exp}</p>
                        </div>
                        <button onClick={() => setExpEdit(true)}>
                            <EditIcon className='edit-btn' />
                        </button>
                    </>
                }

            </div>
            <div className='availability'>
                {avaEdit ?
                    <>
                        <div className='edit'>
                            <label htmlFor='avail'><EventAvailableIcon />Availability</label>
                            <select name='availability' id='avail' defaultValue={context.user.availability} onChange={context.handleChange}>
                                <option value='Full Time'>Full Time</option>
                                <option value='Part Time'>Part Time</option>
                            </select>
                        </div>
                        <button className='btn save' onClick={() => setAvaEdit(false)}>Save</button>
                    </>
                    :
                    <>
                        <div className='display'>
                            <p><EventAvailableIcon />Availability</p>
                            <p>{context.user.availability}</p>
                        </div>
                        <button onClick={() => setAvaEdit(true)}>
                            <EditIcon className='edit-btn' />
                        </button>
                    </>
                }

            </div>
        </div>
    );
}

export default Profile;
