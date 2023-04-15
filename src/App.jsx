/**
 * @author @moSaeed15
 * @description This file contains the App component and its logic
 * @exports App
 */

import SignupTwo from './pages/SignUp/SignupTwo';
import SignUpOne from './pages/SignUp/SignupOne';
import GlobalStyles from './components/styles/global';
import Landing from './Pages/LandingPage/Landing';
import Events from './pages/EventPage/EventPage';
import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Maincontainer from './pages/LogIn/MainContainer';

/**
 * Function component that renders the main application
 * @function
 * @returns {JSX.Element} The main application component
 */
function App() {
  const [email, setEmail] = useState('');

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Events />} />
        {/* <Route path="/" element={<Events />} /> */}
        {/* <Route path="/" element={<Landing />} />
        <Route path="Signuptwo" element={<SignupTwo email={email} />} />
        <Route path="login" element={<Maincontainer />} /> */}{' '}
        {/* <Route path="signup" element={<SignUpOne setEmail={setEmail} />} /> */}
      </Routes>
    </>
  );
}

export default App;
