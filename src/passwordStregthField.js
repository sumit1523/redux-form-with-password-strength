import React, { Component} from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import PasswordToolTip from './PasswordToolTip';

class passwordStregthField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            colorBar: {
                length: false,
                character: false,
                symbol: false,
                number: false
            }
        }
    }

    toggleShow = () => {
        this.setState({
            hidden: !this.state.hidden
        });
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
        const { input, label, type, meta: { touched, error } } = this.props;
        return(
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} 
                    onChange={(event) => this.handlePasswordChange(event)} />
                    <button onClick={this.toggleShow}>Show / Hide</button>
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