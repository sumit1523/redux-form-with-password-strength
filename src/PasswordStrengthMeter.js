import React, { Component } from 'react';
import './PasswordStrengthMeter.css';
import 'bootstrap/dist/css/bootstrap.css';
class PasswordStrengthMeter extends Component {

  changeColor = (numberColor, characterColor, symbolColor, lengthColor) => {
    return {
      numberColor, characterColor, symbolColor, lengthColor
    }
  }
  render() {
    const { colorBar } = this.props;
    let status = '';
    let color = '';
    let barCount = Object.entries(colorBar).filter(entry => entry[1]).length

    switch (barCount) {
      case 0: {
        color = this.changeColor("gray", "gray", "gray", "gray");
        break;
      }
      case 1: {
        color = this.changeColor("red", "gray", "gray", "gray");
        status = "veryweak"
        break;
      }
      case 2: {
        color = this.changeColor("orange", "orange", "gray", "gray");
        status = "weak"
        break;
      }
      case 3: {
        color = this.changeColor("yellow", "yellow", "yellow", "gray");
        status = "good"
        break;
      }
      case 4: {
        color = this.changeColor("green", "green", "green", "green");
        status = "strong"
        break;
      }
      default: {
        break;
      }
    }
    return (
      <>
        <ul className="list-inline mt-2">
          <li className="w-25 float-left pr-1">
            <span className={`progress ${color.numberColor} `}></span>
          </li>
          <li className="w-25 float-left pr-1">
            <span className={`progress ${color.characterColor} `}></span>
          </li>
          <li className="w-25 float-left pr-1">
            <span className={`progress ${color.symbolColor} `}></span>
          </li>
          <li className="w-25 float-left">
            <span className={`progress ${color.lengthColor} `}></span>
          </li>
        </ul>
        <div>
          <div>{status}
          </div>
        </div>
      </>
    );
  }
}

export default PasswordStrengthMeter;
