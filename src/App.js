import React from 'react';
import { BrowserRouter as Router, Route,  Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch}/>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
