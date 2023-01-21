import { Label } from "./label.js";

export class Usename extends Label {
    addEventLogOut() {
        document.querySelector('#js_leave').addEventListener('click', () => {
            localStorage.removeItem('chatName');
            window.location.href = '/';
        });
    }
}