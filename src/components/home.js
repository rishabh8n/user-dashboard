import React, { useContext } from 'react';
import img from '../img.svg';
import { userProfile } from '../context';

function Home() {
    const context = useContext(userProfile);
    return (
        <div className='homepage'>
            <div className='hero'>
                <h1>Welcome {context.user.first} !</h1>
                <p>How to get jobs with top U.S. companies</p>
                <div className='tasks'>
                    <div className='task-item'><span className='serial-no'>1</span><span>Take </span>Tests</div>
                    <div className='task-item'><span className='serial-no'>2</span><span>Pass Live </span>Coding Challenge</div>
                    <div className='task-item'><span className='serial-no'>3</span><span>Finalize </span>your resume</div>
                    <div className='task-item'><span className='serial-no'>4</span><span>Receive </span>job offers</div>
                </div>
            </div>
            <div className='main'>
                <img src={img} alt='img' />
                <div className='info'>
                    <h2>Why join</h2>
                    <p><span className='serial-no'>1</span><span>Work full-time at Silicon Valley or other U.S. companies.</span></p>
                    <p><span className='serial-no'>2</span><span>Earn a better salary compared to local companies in your city.</span></p>
                    <p><span className='serial-no'>3</span><span>Grow as a developer by working with the smartest engineers from all over the world.</span></p>
                    <p><span className='serial-no'>4</span><span>Get paid monthly directly to your bank account. Forget about issues with PayPal or Payoneer.</span></p>
                </div>
            </div>
        </div>
    );
}

export default Home;
