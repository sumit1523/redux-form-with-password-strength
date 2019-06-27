import React, { Component } from 'react';
import './PasswordToolTip.css';

export default class PasswordToolTip extends Component {
    render() {
        const { a } = this.props;
        return (
            <div class="tooltip">
            Right
            <div class="right">
                <div class="text-content">
                    <h3>Fade in Effect</h3>
                    <ul>
                        <li>{a}-This demo has fade in/out effect.</li>
                        <li>It is using CSS opacity, visibility, and transition property to toggle the tooltip.</li>
                        <li>Other demos are using display property<em>(none or block)</em> for the toggle.</li>
                    </ul>
                </div>
                <i></i>
            </div>
        </div>
            )
        }
    }
