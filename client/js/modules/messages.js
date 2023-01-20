import { getMessageTime } from '../helpers/index.js'

export class Messages {
    constructor(selector) {
        this.node = document.querySelector(selector);
    };

    renderMessage = (username, message, time) => {
        this.node.innerHTML += `<div class="message ${username === 'you' ? 'to_right' : ''}">
            <span>
                [${username}] ${message}${time ? `<div class="time">${getMessageTime(time)}</div>` : ''}
            </span>
        </div>`;

        this.scrollToEnd()
    };

    scrollToEnd() {
        this.node.scrollTop = this.node.scrollHeight;
    }

    renderSysterMessage = message => {
        this.renderMessage('system', message);
    }
};