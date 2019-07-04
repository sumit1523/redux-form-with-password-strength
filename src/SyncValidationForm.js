import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import passwordStregthField from './passwordStregthField';

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
    state = {
      colorBar: {
        length: false,
        character: false,
        symbol: false,
        number: false
      },
      password: '',
      confirmPassword: '',
      isSamePassword: false,
    }

  checkSamePassword = () => {
    this.setState({
      isSamePassword: this.state.password === this.state.confirmPassword
    })
  }
  updatePassword = (event) => {
    this.setState({
      password: event.target.value

    })
    this.checkSamePassword();
  }
  updateConfirmPassword = (event) => {
    // console.log(confirmPassword)
    this.setState({
      confirmPassword: event.target.value
    })
    this.checkSamePassword();
  }

  handlePasswordChange = (event) => {
    this.checkValidation(event.target.value);
    console.log(event.target.value)
    return event.target.value
  };

  checkValidation = (password) => {
    this.setState({
      colorBar: {
        length: password.length > 8,
        character: password.match(/[A-Z]/) && password.match(/[a-z]/),
        symbol: password.match(/[!,?,@,#,$,%,^,&,*,=,(,),_,.]{1}/),
        number: password.match(/[0-9]/)
      }
    })
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { colorBar } = this.state;

    return (
      <div>
        <h2> Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Field name="username" type="text" component={renderField} label="Username" />
          <Field name="email" type="email" component={renderField} label="Email" />
          <Field colorBar={colorBar} name="password" type="password" component={passwordStregthField} label="Password" onChange={this.handlePasswordChange} />
          <Field name="retypepassword" type="password" component={renderField} label="Confirm-Password" onChange={(e) => this.setState({confirmPassword: e.target.value})} />
          {this.state.isSamePassword ? <div>Matched</div> : <div>Not Matched</div>}
          <div>
            <button type="submit" disabled={submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
})(SyncValidationForm);