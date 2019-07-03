import React, { Component } from 'react';
import './PasswordStrengthMeter.css';

class PasswordStrengthMeter extends Component {

changeColor=(numberColor,characterColor,symbolColor,lengthColor)=>{
return {
    numberColor,
    characterColor,
    symbolColor,
    lengthColor
}
}
  render() {
    const { colorBar } = this.props;
    // console.log("total entries:-", colorBar);
    let status = '';
    let color = '';
    let barLength =  Object.entries(colorBar).filter(entry => entry[1]).length


    // console.log("total validation:-", barLength);
    switch (barLength) {
      case 0: {
       color = this.changeColor("gray","gray","gray","gray");

        break;
      }
      case 1: {
        color = this.changeColor("red","gray","gray","gray");
        status = " veryweak"
        break;
      }
      case 2: {
        color = this.changeColor("orange","orange","gray","gray");
        status = " weak"
        break;

      }
      case 3: {
                color = this.changeColor("yellow","yellow","yellow","gray");

        status = "good"
        break;
      }
      case 4: {
               color = this.changeColor("green","green","green","green");

        status = "strong"
        break;

      }
      default: {
        break;
      }
    }
    return (
      <>
        <div className="barmenu">
          <div className={color.numberColor} >
            test1
          </div>
          <div className={color.characterColor}>
            test2
          </div>
          <div className={color.symbolColor}>
            test3
          </div>
          <div className={color.lengthColor}>
            test4
          </div>
        </div>
        <div>
          <div>{status}
          </div>
        </div>
      </>
    );
  }
}

export default PasswordStrengthMeter;
