/*@Common funcation Form validation */
export const validate = (values) => {
    const errors = {};
    const getEmailKey = Object.keys(values)[Object.values(values).indexOf(values.email)];//email
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!regX(getEmailKey, values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Required'
    } else if (!values.password.match(/[A-Z]/)) {
      errors.password = 'Password must contains at least one upper case character'
    } else if (!values.password.match(/[a-z]/)) {
      errors.password = 'Password must contains at least one lower case character'
    } else if (!values.password.match(/[!,?,@,#,$,%,^,&,*,=,(,),_,.]{1}/)) {
      errors.password = 'Password must contains at least one special character'
    } else if (values.password.length < 8 ) {
      errors.password = 'Password must be more than 8 characters'
    }
    if (values.password === values.retypepassword) {
      errors.retypepassword = 'password Matched'
    } else {
      errors.retypepassword = 'Password not matched'
    }
    return errors;
  }

  /*@Common funcation for Regex for form validation*/
  const regX = (valdnType, valdnValue) => {
    
    if(valdnType === 'email') { 
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valdnValue);
    }
  }
  
  // const pwLength = 8;
  // const config = {
  //     pwPatterns: [
  //       { regExp: new RegExp("^(.*[A-Z].*[A-Z].*)$")},
  //       { regExp: new RegExp("^(.*[!@#$&*].*)$")},
  //       { regExp: new RegExp("^(.*[0-9].*[0-9].*)$")}, 
  //       { regExp: new RegExp("^(.*[a-z].*[a-z].*[a-z].*)$")},
  //       { regExp: new RegExp("^(.{" + pwLength + ",})$")}
  //     ]
  //   }
  //   let pwMatchChart = [
  //               {status: false, condition: 'two uppercase letters'},
  //               {status: false, condition: 'special character'},
  //               {status: false, condition: 'two digits'},
  //               {status: false, condition: 'three lower case letters'},
  //               {status: false, condition: 'the pw length'}
  //   ];
  //   let pwScoreCounter = 0;
  //   config.pwPatterns.forEach((elem,index) => {
  //       switch (elem.regExp.test('password')) {
  //         case true:
  //           pwMatchChart[index].status = true;
  //           break;
  //       }
  //     });
  //   console.log(pwMatchChart);
  //   // check if validator is true and update score
  //     pwMatchChart.forEach(elem => {
  //       if (elem.status) pwScoreCounter++;
  //     });
  //               console.log(pwScoreCounter);