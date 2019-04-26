import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from "./components/Contact";
import Home from "./components/home";
import PostDetail from './components/Post detail';



function App() {

  return (

    <Router>

        <div className="App">
            <Navbar />
        </div>

        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/about" component={ About }/>
            <Route path="/contact" component={ Contact }/>
            <Route path="/:post_id" component={ PostDetail }/>
        </Switch>



    </Router>

  );
}

export default App;
