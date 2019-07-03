import React, { Component} from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import PasswordToolTip from './PasswordToolTip';

class passwordStregthField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorBar: {
                length: false,
                character: false,
                symbol: false,
                number: false
            }
        }
    }


    handlePasswordChange = (event) => {
        this.checkValidation(event.target.value);
        console.log(event.target.value)
    };

    checkValidation = (password) => {
        const colorBar = {
            length: false,
            character: false,
            symbol: false,
            number: false
        }

        if (password.match(/[A-Z]/) && password.match(/[a-z]/)) {
            colorBar.character = true;
        }
        if (password.match(/[0-9]/)) {
            colorBar.number = true;
        }
        if (password.match(/[!,?,@,#,$,%,^,&,*,=,(,),_,.]{1}/)) {
            colorBar.symbol = true;
        }
        if (password.length > 8) {
            colorBar.length = true;
        }
        this.setState({
            colorBar
        })
    }
    render() {
        const { colorBar } = this.state;
        const { input: { value, onChange }, label, type, meta: { touched, error },test } = this.props;
        console.log(test)
        return(
            <div>
                <label>{label}</label>
                <div>
                    <input  placeholder={label} type={type}
                    onChange={(e)=>{
                    this.handlePasswordChange(e)
                    this.props.updatePassword(e.target.value)
                    return value}} />
                    {touched &&
                        ((error && <span>{error}</span>))}
                </div>
                <PasswordToolTip colorBar={colorBar} />
                <PasswordStrengthMeter colorBar={colorBar} />
            </ div>
        )
    }

}

export default passwordStregthField;