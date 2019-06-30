import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import './login.css';
import { validate } from './validation';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import './PasswordStrengthMeter.css';
import PasswordToolTip from './PasswordToolTip';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>))}
    </div>
  </div>
);

class SyncValidationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      color: false,
      colorBar: {
        length: false,
        character: false,
        symbol: false,
        number: false
      }
    }
  }

  handlePasswordChange = (event) => {
    console.log(event.target.value)
    this.checkValidation(event.target.value)
  };

  checkValidation = (password) => {
    const colorBar = {
      length: false,
      character: false,
      symbol: false,
      number: false
    }

    if (password.match(/[A-Z]/) && password.match(/[a-z]/)) {
      colorBar.character = true;
    } if (password.match(/[0-9]/)) {
      colorBar.number = true;
    } if (password.match(/[!,?,@,#,$,%,^,&,*,=,(,),_,.]{1}/)) {
      colorBar.symbol = true;
    } if (password.length > 8) {
      colorBar.length = true;
    }
    this.setState({
      colorBar
    })
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { colorBar } = this.state;
    return (
      <Fragment>
        <h2> Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Field name="username" type="text" component={renderField} label="Username" />
          <Field name="email" type="email" component={renderField} label="Email" />
          <Field id="progresspwd" name="password" type="password" component={renderField} label="Password"
            onChange={(event) => this.handlePasswordChange(event)} />
          <PasswordToolTip colorBar={colorBar} />
          <PasswordStrengthMeter colorBar={colorBar} />
          <Field name="retypepassword" type="password" component={renderField} label="Confirm-Password" />
          <div>
            <button type="submit" disabled={submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>
      </Fragment>
    )
  }
}
export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate// <--- validation function given to redux-form
})(SyncValidationForm);