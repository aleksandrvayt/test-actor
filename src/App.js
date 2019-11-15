import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Main from './components/Main';


function App() {
  return (
        <BrowserRouter>
          <div className="app">
            <Navbar/>
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/actors'} component={About}/>
              <Route path={''} exact component={Main}/>
            </Switch>
          </div>
        </BrowserRouter>
  );
}

export default App;
