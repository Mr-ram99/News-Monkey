import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  apikey="ced035a95bc948339fe954824bfbb443";
  constructor(){
    super();
    this.state = {
      progress:0
    }
  }
  setProgress =(progress)=>{
    this.setState({
      progress : progress
    })
  }

  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={this.setProgress} apikey={this.apikey} key="general" category="general" pageSize={10} />
          </Route>
          <Route exact path="/business">
            <News setProgress={this.setProgress} apikey={this.apikey} key="business" category="business" pageSize={10} />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" category="entertainment" pageSize={10} />
          </Route>
          <Route exact path="/sports">
            <News setProgress={this.setProgress} apikey={this.apikey} key="sports" category="sports" pageSize={10} />
          </Route>
          <Route exact path="/science">
            <News setProgress={this.setProgress} apikey={this.apikey} key="science" category="science" pageSize={10} />
          </Route>
          <Route exact path="/technology">
            <News setProgress={this.setProgress} apikey={this.apikey} key="technology" category="technology" pageSize={10} />
          </Route>
          <Route exact path="/health">
            <News setProgress={this.setProgress} apikey={this.apikey} key="health" category="health" pageSize={10} />
          </Route>
        </Switch>
      </Router>

    )
  }
}

