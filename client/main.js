import { Usename } from "./modules/username.js";
import { Messages } from "./modules/messages.js";
import { Socket } from "./modules/socket.js";
import { MessageForm } from "./modules/message-form.js";

document.addEventListener('DOMContentLoaded', () => {
    const socket = new Socket()
    const username = new Usename('#username');
    const messages = new Messages('#messages');
    const messageForm = new MessageForm('#messageForm');

    socket.onSetUsername((name) =>{
        username.render(name);
        messages.renderSysterMessage(`${name} assigned to you.`);
    });

    socket.onUserJoined((name) => { 
        messages.renderSysterMessage(`${name} joined.`);
    })

    socket.onUserLeft((name) => { 
        messages.renderSysterMessage(`${name} left.`);
    })

    socket.onChatMessage(({name, message}) => {
        messages.renderMessage(name, message);
    })

    messageForm.onSubmit(value => {
        socket.emitChatMessage(value);
    })
});
