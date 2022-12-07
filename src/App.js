import React, { useState } from 'react';

import './App.css';


import Nav from './components/Nav';
import Portfolio from './components/pages/Portfolio/index';
import Contact from './components/pages/Contact/index';
import About from './components/pages/About/index';
import Footer from './components/pages/Footer'
import Resume from './components/pages/Resume'

function App() {

  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <body>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </body>
    // <div className="App">
    //   <Nav

    //     showAbout={() => setPageIndex(0)}
    //     showPortfolio={() => setPageIndex(1)}
    //     showContact={() => setPageIndex(2)}
    //   />
    //   { pageIndex === 0 ? (
    //     <About/>
    // ) : pageIndex === 1 ? (
    //   <Portfolio/>
    // ) : pageIndex === 2 ? (
    //   <Contact/>
    // ) : (
    //   <About/>
    // )}
    // </div>
  );
}

export default App;
