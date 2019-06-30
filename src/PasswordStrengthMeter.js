import React, { Component } from 'react';
import './PasswordStrengthMeter.css';
// import zxcvbn from 'zxcvbn';

class PasswordStrengthMeter extends Component {



  render() {
const {colorBar}=this.props;
let status='';
let color={
    bar1:"gray",
    bar2:"gray",
    bar3:"gray",
    bar4:"gray"
}
let barLength=0;
Object.entries(colorBar).forEach(entry => {
  if(entry[1]==true){
      barLength+=1;
  }
  //use key and value here
});
console.log(barLength);
switch(barLength){
case 0:{
     color={
    bar1:"gray",
    bar2:"gray",
    bar3:"gray",
    bar4:"gray"
}

break;
}
case 1:{
 color={
    bar1:"red",
    bar2:"gray",
    bar3:"gray",
    bar4:"gray"
}
status=" varyweak"
break;
}
case 2:{
 color={
    bar1:"orange",
    bar2:"orange",
    bar3:"gray",
    bar4:"gray"
}
status=" weak"
break;

}
case 3:{
 color={
    bar1:"yellow",
    bar2:"yellow",
    bar3:"yellow",
    bar4:"gray"
}
status="good"
break;
}
case 4:{
     color={
    bar1:"green",
    bar2:"green",
    bar3:"green",
    bar4:"green"
}
status="strong"
break;

}
default:{
break;
}
}
    return (
        <>
      <div>
          <div className={color.bar1}>
          test1
          </div>
          <div className={color.bar2}>
          test2
          </div>
          <div className={color.bar3}>
          test3
          </div>
          <div className={color.bar4}>
          test4
          </div>

<div>{status}
</div>
      </div>
      </>
    );
  }
}

export default PasswordStrengthMeter;
