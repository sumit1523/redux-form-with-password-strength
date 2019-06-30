import React, { Component } from 'react';
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          password: '',
          confirmPassword: '',
          match: null,
          charNumberValid: false,
          specialCharValid: false,
          uppercaseValid: false,
          numberValid: false
        }
      }
      
      // Check the length of the input
      checkPasswordLength = (password) => {
        if (password.length >= 8) {
          this.setState({
            charNumberValid: true
          })
        } else {
          this.setState({
            charNumberValid: false
          })
        }
      }
      
      // Check for special characters
      checkSpecialCharacters = (password) => {
        const pattern = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g;
          if (pattern.test(password)) {
          this.setState({
            specialCharValid: true
          }) 
        } else {
          this.setState({
            specialCharValid: false
          }) 
        }
      }
      
      // Check for an uppercase character
      checkUppercase = (password) => {
        const pattern = /[A-Z]/;
        if (pattern.test(password)) {
          this.setState({
            uppercaseValid: true
          })
        } else {
          this.setState({
            uppercaseValid: false
          })
        }
      }
      
      // Check for a number
      checkNumber = (password) => {
        const pattern = /[0-9]/;
          if (pattern.test(password)) {
          this.setState({
            numberValid: true
          }) 
        } else {
          this.setState({
            numberValid: false
          })
        }
      }
        
      handlePasswordChange = (event) => {
        this.setState({
          password: event.target.value
        })
        
        this.checkPasswordLength(event.target.value);
        this.checkSpecialCharacters(event.target.value);
        this.checkUppercase(event.target.value);
        this.checkNumber(event.target.value);
      };
    
      handleConfirmPasswordChange = (event) => {
        this.setState({
          confirmPassword: event.target.value,
          match: null
        })
      };
    
      comparePassword = (event) => {
        if (this.state.password === this.state.confirmPassword) {
          this.setState({
            match: true
          })
        } else {
          this.setState({
            match: false
          })
        }
      }
     
      render() {
        return (
          <section>
            <div className="b-TextInput__container">
              <label className="b-TextInput__label--left">Username</label>
              <input className="b-TextInput"/>          
            </div>
            <div className="password-container">
              <div className="password">
                <div className="b-TextInput__container">
                  <label className="b-TextInput__label--left">Password</label>
                  <input 
                    className="b-TextInput"
                    type="password"
                    value={this.state.password}
                    onChange={(event) => this.handlePasswordChange(event)}
                  />  
                </div>
                <div>
                  <label 
                    className={`b-TextInput__label--left ${this.state.match === false ? 'error-msg' : null}`}
                    >Confirm Password</label>
                  <input
                    className={`b-TextInput${ this.state.match === false ? '--error' : ''}`}
                    type="password"
                    value={this.state.confirmPassword}
                    onChange={(event) => this.handleConfirmPasswordChange(event)}
                    onBlur={this.comparePassword}
                  />
                </div>
              </div>
              <div className="validation">
                <div className="validator">
                  <i className={this.state.charNumberValid ? "fas fa-check success" : "fas fa-times error"}></i>
                  <p className="validation-item">8-20 characters</p>
                </div>
                <div className="validator">
                  <i className={this.state.specialCharValid ? "fas fa-check success" : "fas fa-times error"}></i>
                  <p className="validation-item">1 special character</p>
                </div>
                <div className="validator">
                  <i className={this.state.uppercaseValid ? "fas fa-check success" : "fas fa-times error"}></i>
                  <p className="validation-item">1 uppercase letter</p>
                </div>
                <div className="validator">
                  <i className={this.state.numberValid ? "fas fa-check success" : "fas fa-times error"}></i>
                  <p className="validation-item">1 number</p>
                </div>
              </div>
            </div>
          </section>
        );
      }
    };

export default SignUpForm;