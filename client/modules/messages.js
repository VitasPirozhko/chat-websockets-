export class Messages {
    constructor(selector) {
        this.node = document.querySelector(selector);
    };

    renderMessage = (username, message) => {
        this.node.innerHTML += `<div class="message ${username === 'you' ? 'to_right' : ''}">
            <span>
                [${username}] ${message}<div class="time">18:50</div>
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