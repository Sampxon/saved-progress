import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import BuyerConfirmation from './BuyerConfirmation';
import EscrowSection from './EscrowSection';
import EscrowRequest from './EscrowRequest';
import '../assets/styles/DashboardStyle.css'; // Import the CSS file

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <nav className='dashboard-nav'>
        <ul className='dashboard-nav-list'>
          <li>
            <Link to='/' className='dashboard-nav-link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/login' className='dashboard-nav-link'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/buyer-confirmation' className='dashboard-nav-link'>
              Buyer Confirmation
            </Link>
          </li>
          <li>
            <Link to='/escrow-section' className='dashboard-nav-link'>
              Escrow Section
            </Link>
          </li>
          <li>
            <Link to='/escrow-request' className='dashboard-nav-link'>
              Escrow Request
            </Link>
          </li>
        </ul>
      </nav>

      <div className='dashboard-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/buyer-confirmation' element={<BuyerConfirmation />} />
          <Route path='/escrow-section' element={<EscrowSection />} />
          <Route path='/escrow-request' element={<EscrowRequest />} />
        </Routes>
      </div>
    </div>
  );
}


{
  /* The React error 'Switch' is not exported from 'react-router-dom' 
  occurs when we try to import 'Switch' from react-router-dom v6. 
  In react-router-dom v6, ‘Switch’ is replaced by ‘Routes’
  
  Home] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>

  <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/buyer-confirmation' element={<BuyerConfirmation />} />
          <Route path='/escrow-section' element={<EscrowSection />} />
          <Route path='/escrow-request' element={<EscrowRequest />} />

  .*/
}