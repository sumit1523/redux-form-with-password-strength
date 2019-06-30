import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './login.css';
import { validate } from './validation';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import './PasswordStrengthMeter.css';
import PasswordToolTip from './PasswordToolTip';


const renderField = ({ input, label, type, meta: { touched, error} }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>))}
    </div>
  </div>
);

const pwdtooltip =()=>{
 

}
const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <>
      <h2> Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} label="Username"/>
        <Field name="email" type="email" component={renderField} label="Email" />
        <Field id="progresspwd" name="password" type="password" onClick={ pwdtooltip}  component={renderField} label="Password" />  
        <PasswordStrengthMeter />
        <PasswordToolTip a='SUMIT' />
        <Field name="retypepassword" type="password" component={renderField} label="Confirm-Password" />
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
        
      </form>
    </>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(SyncValidationForm);