import Sidebar from './components/sidebar';
import './App.css';
import Home from './components/home';
import Profile from './components/profile';
import { Provider } from './context'
import { useState } from 'react';

function App() {
  const [active, setActive] = useState('home');
  const [menuActive, setMenu] = useState(false);
  const changePage = (page) => {
    setActive(page);
    setMenu(false);
  }
  return (
    <div className="container">
      <div className='header'>
        <div className={`logo `}>ASTRA</div>
        <div className={`menu-icon ${menuActive ? 'active' : ''}`} onClick={() => { setMenu(!menuActive) }}>
          <div></div>
        </div>
      </div>
      <Sidebar changePage={changePage} menuActive={menuActive} setMenu={setMenu} />
      <Provider>
        <div className='content'>
          {active === 'home' ? <Home /> : null}
          {active === 'profile' ? <Profile /> : null}
        </div>
      </Provider>
    </div>
  );
}

export default App;
