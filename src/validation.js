/*@Common funcation Form validation */
export const validate = (values) => {

  const errors = {};
  const { password } = values;

  if (!values.password) {
    errors.password = 'Required'
  }
  else if (!validatePassword(password)) {
    errors.password = 'Password not Valid'
  }
  if (!values.retypepassword) {
    errors.retypepassword = 'Required'
  }
  else if (values.password !== values.retypepassword) {
    errors.retypepassword = 'Not Matched'
  }
  return errors;
}

export const validatePasswordLength = password => password.length > 8;
export const validatePasswordSymbol = password => !!password.match(/[!,?,@,#,$,%,^,&,*,=,(,),_,.]{1}/);
export const validatePasswordCharacter = password => !!password.match(/[A-Z]/) && !!password.match(/[a-z]/);
export const validatePasswordNumber = password => !!password.match(/[0-9]/);

const validatePassword = (password) => {
  return (validatePasswordLength(password) &&
    validatePasswordSymbol(password) &&
    validatePasswordCharacter(password) &&
    validatePasswordNumber(password));
};