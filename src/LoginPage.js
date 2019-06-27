import React, { Component } from 'react';
import SyncValidationForm from './SyncValidationForm';

class LoginPage extends Component {
  submit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <SyncValidationForm onSubmit={this.submit} />
    );
  }
}
export default LoginPage;