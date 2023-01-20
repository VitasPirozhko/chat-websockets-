import { Usename } from "./modules/username.js";
import { Messages } from "./modules/messages.js";
import { Socket } from "./modules/socket.js";
import { MessageForm } from "./modules/message_form.js";
import { TypingStatus } from "./modules/typing_status.js";
import { Label } from "./modules/label.js";

document.addEventListener('DOMContentLoaded', () => {
    const socket = new Socket()
    const username = new Usename('#username');
    const messages = new Messages('#messages');
    const messageForm = new MessageForm('#messageForm');
    const typingStatus = new TypingStatus('#typingStatus');
    const label = new Label('#userIco');

    socket.onSetUsername((name) =>{
        username.render(name);
        label.render(name[0]);
        messages.renderSysterMessage(`${name} assigned to you.`);
    });

    socket.onUserJoined((name) => { 
        messages.renderSysterMessage(`${name} joined.`);
    })

    socket.onUserLeft((name) => { 
        messages.renderSysterMessage(`${name} left.`);
    })

    socket.onChatMessage(({name, message, time}) => {
        messages.renderMessage(name, message, time);
        typingStatus.removeUser(name);
    })

    messageForm.onSubmit(value => {
        socket.emitChatMessage(value);
    })

    messageForm.onKeyPress(() => {
        socket.emitUserTyping();
    });

    socket.onUserTyping(username => {
        typingStatus.addUser(username);
    })

});
