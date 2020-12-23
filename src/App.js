import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Experience from './pages/Experience/Experience';
import Works from './pages/Works/Works';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path ='/' exact component={Home} />
          <Route path ='/about' component={About} />
          <Route path ='/services' component={Services} />
          <Route path ='/experience' component={Experience} />
          <Route path ='/works' component={Works} />
        </Switch>

        {/* <About />
        <Services />
        <Experience /> */}
      </Router>
    </>
  );
}

export default App;
