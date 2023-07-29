import React from 'react';
import { NavbarDefault } from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  <React.Fragment>
    <NavbarDefault/>
    <Outlet/>
  </React.Fragment>
  )
}

export default App;
