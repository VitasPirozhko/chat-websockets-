import { MessageForm } from "./modules/message_form.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = new MessageForm('#login_form')

    const onRedirectToChat = () => {
        window.location.href = '/chat';
    };

    loginForm.onSubmit(name => {
        localStorage.setItem('chatName', name);
        onRedirectToChat();
    })

});
