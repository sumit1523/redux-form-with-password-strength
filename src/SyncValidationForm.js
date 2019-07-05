import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';
import { validate, validatePasswordLength, validatePasswordSymbol, validatePasswordCharacter, validatePasswordNumber } from './validation';
import passwordStregthField from './passwordStregthField';

class SyncValidationForm extends Component {
  state = {
    colorBar: {
      length: false,
      character: false,
      symbol: false,
      number: false
    }
  }

  handlePasswordChange = (event) => {
    const password = event.target.value;
    this.setState({
      colorBar: {
        length: validatePasswordLength(password),
        character: validatePasswordCharacter(password),
        symbol: validatePasswordSymbol(password),
        number: validatePasswordNumber(password)
      }
    })
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { colorBar } = this.state;
    return (
      <div>
        <h2> Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Field colorBar={colorBar} name="password" type="password" component={passwordStregthField} label="Password"
            onChange={this.handlePasswordChange} />
          <Field name="retypepassword" type="password" component={RenderField} label="Confirm-Password" />
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
  form: 'syncValidation',
  validate, // a unique identifier for this form
})(SyncValidationForm);