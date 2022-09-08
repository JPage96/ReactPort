import React, { useState } from 'react';
import Nav from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  //Set state default to Home
  const [currentPage, handlePageChange] = useState("Home");
  //Render page function to switch statement
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />
      case "Portfolio":
        return <Portfolio />
      default: return <Home />;
    }
  };
  return (
    <React.Fragment>
    <div>
        <main>
            <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <div>{renderPage(currentPage)}</div>
        </main>
    </div>
    <Footer></Footer>
    </React.Fragment>
    
);
}

export default App;