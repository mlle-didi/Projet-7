// React
import React from 'react';

// Components
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// Style
import '../Layout/Layout.css';

const Layout = ({children}) => {
  return (
    <>
    <Header/>
     <main>
        {children}
     </main>
    <Footer/>
    </>
  )
}

export default Layout