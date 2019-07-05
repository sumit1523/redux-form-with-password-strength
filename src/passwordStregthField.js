import React, { Component } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import PasswordToolTip from './PasswordToolTip';


class passwordStregthField extends Component {
    state = {
        passwordVisible: false,
    }
    toggleShow = () => {
        this.setState({
            passwordVisible: !this.state.passwordVisible,
        });
    }

    render() {
        const { colorBar } = this.props;
        const { input, label, meta: { touched, error } } = this.props;
        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={this.state.passwordVisible ? "text" : "password"} />
                    <button type ="button" onClick={this.toggleShow}>{this.state.passwordVisible ? 'Hide' : 'Show'}</button>
                    {touched && ((error && <span>{error}</span>))}
                </div>
                <PasswordToolTip colorBar={colorBar} />
                <PasswordStrengthMeter colorBar={colorBar} />
            </ div>
        )
    }
}

export default passwordStregthField;