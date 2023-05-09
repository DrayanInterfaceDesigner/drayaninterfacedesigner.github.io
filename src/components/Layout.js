import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';


function Layout({ children }) {
  return (
    <div className='App'>
      <Header>
        <Navbar></Navbar>
      </Header>
      <Main>
        {children}
      </Main>
    </div>
  );
}

      /* <footer className='Footer'>
        <p>&copy; 2023 My App</p>
      </footer> */

export default Layout;
