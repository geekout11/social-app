import React, { Component } from 'react';
import './LoggedOut.css';
import { API } from './Api';


class LoggedOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
      bombingPopup: '',
    };
  }

  apiHandler = (res) => {
    this.setState({
      apiData: res,
    });
  };


  render() {
    return (
      <div className="main-cont">
        
      </div>
    );
  }
}

export default LoggedOut;
