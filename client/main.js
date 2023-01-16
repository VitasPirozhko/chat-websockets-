import { Usename } from "./modules/username.js";
import { Messages } from "./modules/messages.js";
import { Socket } from "./modules/socket.js";

document.addEventListener('DOMContentLoaded', () => {
    const socket = new Socket()
    const username = new Usename('#username');
    const messages = new Messages('#messages');

    socket.onSetUsername((name) =>{
        username.render(name);
        messages.renderSysterMessage(`${name} assigned to you`);
    });
    socket.onUserJoined((name) => { 
        messages.renderSysterMessage(`${name} joined`);
    })
});
