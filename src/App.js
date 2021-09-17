import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News key="general" category="general" pageSize={10} />
          </Route>
          <Route exact path="/business">
            <News key="business" category="business" pageSize={10} />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" category="entertainment" pageSize={10} />
          </Route>
          <Route exact path="/sports">
            <News key="sports" category="sports" pageSize={10} />
          </Route>
          <Route exact path="/science">
            <News key="science" category="science" pageSize={10} />
          </Route>
          <Route exact path="/technology">
            <News key="technology" category="technology" pageSize={10} />
          </Route>
          <Route exact path="/health">
            <News key="health" category="health" pageSize={10} />
          </Route>
        </Switch>
      </Router>

    )
  }
}

