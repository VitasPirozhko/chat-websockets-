import { Label } from "./label.js";

export class TypingStatus extends Label {
    renderUserTyping(username) {
        this.render(`${username} is typing`);
    }

    clear() {
        this.render();
    }
}