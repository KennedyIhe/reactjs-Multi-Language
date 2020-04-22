import React, { Component } from 'react';
import history from '../services/history';

export class Home extends Component {
  
  static displayName = Home.name;

  render () {
    return (
      <div className="card">
        <img src="https://greenroom-dev.cbre.com/static/media/Start.41ec62c8.svg" height="300px" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h1 className="text-center mb-5">Welcome to the Green Room</h1>
          <p className="lead text-center mb-5">A place to help prepare you for joining CBRE</p>
          <div className="m-5">
              <button type="button" className="btn btn-success btn-block btn-lg" to="/preform" onClick={this.getStarted}>LET'S GET STARTED</button>
          </div>
        </div>
      </div>
    );
  }

  getStarted = () => {
    this.props.history.push('/preform');
    // console.log("clicked");
  }
}
