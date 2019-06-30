import React, { Component } from 'react';
import './PasswordToolTip.css';

export default class PasswordToolTip extends Component {









    render() {
        const { colorBar} = this.props;
        return (
            <div className="tooltip">
Right
            <div className="right">
                <div className="text-content">
                    <h3>Fade in Effect</h3>
                    <ul>
                        <li className={colorBar.number ? "green" : "red"}><strong>123 </strong> </li>
                        <li className={colorBar.character ? "green" : "red"}><strong>AA aa</strong> </li>
                        <li className={colorBar.length ? "green" : "red"}><strong>8ll </strong> </li>
                        <li className={colorBar.symbol ? "green" : "red"}><strong>@ </strong> </li>


                    </ul>
                </div>
                <i></i>
            </div>
        </div>
            )
        }
    }
