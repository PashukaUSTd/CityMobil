import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <ul className="footer-list">
                    <li className="footer-list-item"><a className="footer-link" href="#action1">Контакты</a></li>
                    <li className="footer-list-item"><a className="footer-link" href="#action2">О нас</a></li>
                    <li className="footer-list-item"><a className="footer-link" href="#action3">Партнерство</a></li>
                </ul>
            </footer>
        )
    }
}

export default Footer;