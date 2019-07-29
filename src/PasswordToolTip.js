import React, { Component } from 'react';
import './PasswordToolTip.css';
export default class PasswordToolTip extends Component {
  render() {
    const { colorBar } = this.props;
    return (
        <div className="right">
          <div className="text-content">
            <h3>Password Match</h3>
            <ul className="PwdMatch">
              <li className={colorBar.number ? "pgreen" : "pred"}><strong>Must conatain numbers 123 </strong> </li>
              <li className={colorBar.character ? "pgreen" : "pred"}><strong>Must conatain upper  and lower AA aa</strong> </li>
              <li className={colorBar.length ? "pgreen" : "pred"}><strong>Must conatain min 8 character </strong> </li>
              <li className={colorBar.symbol ? "pgreen" : "pred"}><strong>Must conatain symbol @ </strong> </li>
            </ul>
          </div>
          <i></i>
        </div>
    )
  }
}
