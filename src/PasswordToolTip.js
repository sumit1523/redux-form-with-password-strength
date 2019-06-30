import React, { Component } from 'react';
import './PasswordToolTip.css';

export default class PasswordToolTip extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            password: 'ASrfrthfhA',
            color : false,
            colorBar : false,
            score : 0,
            week : false,
            good : false,
            veryGood : false,
            strong : false
        }
    }
        // Check for an uppercase character
        checkUppercase = (password) => {
            const pattern = /[A-Z]/;
            if (pattern.test(password)) {
              this.setState({
                color: true,
                colorBar: true,
                week :  true
              })
            } else {
              this.setState({
                color: false,
                colorBar: false,
                week :  false
              })
            }
          }

          // checkNumber = (password) => {
          //   const pattern = /[0-9]/;
          //     if (pattern.test(password)) {
          //     this.setState({
          //       color: true,
          //       colorBar: true,
          //       good :  true
          //     }) 
          //   } else {
          //     this.setState({
          //       color: false,
          //       colorBar: false,
          //       good :  false
          //     })
          //   }
          // }


        //   createPasswordLabel = (score) => {
        //     switch (score) {
        //       case 0:
        //         this.setState({
        //             colorBar: true,
        //             week :  true
        //             })
        //         return 'very Weak';
        //       case 1:
        //         return 'Weak';
        //       case 2:
        //         return 'Fair';
        //       case 3:
        //         return 'Good';
        //       case 4:
        //         return 'Strong';
        //       default:
        //         return 'Weak';
        //     }
        //   }

          // handlePasswordChange = (event) => {
          //   this.setState({
          //     password: event.target.value
          //   })
          //   this.checkUppercase(event.target.value);
          //   this.checkNumber(event.target.value);
          // };

    render() {
        const { a } = this.props;
        return (
            <div className="tooltip">
            Right
            <div className="right">
                <div className="text-content">
                    <h3>Fade in Effect</h3>
                    <ul>
                
                        <li className={this.state.color ? "green" : "red"}>{a}-This demo has fade in/out effect.</li>
                        <li>It is using CSS opacity, visibility, and transition property to toggle the tooltip.</li>
                        <li>Other demos are using display property<em>(none or block)</em> for the toggle.</li>
                        <li className={this.state.colorBar ? "red" : "grey"}><strong>Password strength: </strong> {a}</li>
                        <li className={this.state.colorBar ? "red" : "grey"}><strong>Password strength: </strong> {this.state.week ? "week" : ""}</li>
                        <li className={this.state.colorBar ? "orange" : "grey"}><strong>Password strength: </strong> {this.state.week ? "good" : ""}</li>
                        <li className={this.state.colorBar ? "yellow" : "grey"}><strong>Password strength: </strong> {this.state.week ? "very good" : ""}</li>
                        <li className={this.state.colorBar ? "green" : "grey"}><strong>Password strength: </strong> {this.state.week ? "strong" : ""}</li>



                    </ul>
                </div>
                <i></i>
            </div>
        </div>
            )
        }
    }
