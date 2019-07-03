import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validation';
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
  constructor(props) {
    super(props);
    this.state = {
        hidden: true,
        showHide: false,
        password:'',
        confirmPassword:'',
        isSamePassword:false

    }
}

checkSamePassword=()=>{
    let isSamePassword= this.state.password===this.state.confirmPassword?false:true;
    this.setState({
        isSamePassword
    })
}
updatePassword=(password)=>
{
this.setState({
password
})
this.checkSamePassword();
}
updateConfirmPassword=(confirmPassword)=>
{
    console.log(confirmPassword)
this.setState({
confirmPassword
})
this.checkSamePassword();
}
toggleShow = () => {
  this.setState({
      hidden: !this.state.hidden,
      showHide: !this.state.showHide
  });
}
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <h2> Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Field name="username" type="text" component={renderField} label="Username" />
          <Field name="email" type="email" component={renderField} label="Email" />
          <Field name="password" type={this.state.hidden ? "password" : "text"} component={passwordStregthField} label="Password" onChange={(e)=>this.updatePassword(e.target.value)}/>
          <button onClick={this.toggleShow}>{this.state.showHide ? 'Hide':'Show'}</button>
          <Field name="retypepassword" type="password" component={renderField} label="Confirm-Password" onChange={(e)=>this.updateConfirmPassword(e.target.value)} />
          <div>
            <button type="submit" disabled={submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
          {this.state.isSamePassword &&<div>heyyy</div>}
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate,
  passwordStregthField// <--- validation function given to redux-form
})(SyncValidationForm);