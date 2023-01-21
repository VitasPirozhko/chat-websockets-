/* global io */

export class Socket {
    constructor() {
        this.socket = io();
    }

    onHandler = eventName => handler => {
        this.socket.on(eventName, handler);
    }

    onRedirectToChat = this.onHandler('redirect to chat');
    onUserJoined = this.onHandler('user joined');
    onUserLeft = this.onHandler('user left');
    onChatMessage = this.onHandler('chat message');
    onUserTyping = this.onHandler('user typing');

    emitChatMessage = message => {
        this.socket.emit('chat message', message)
    } 
    
    emitUserTyping = () => {
        this.socket.emit('user typing')
    }

    emitUserName = name => {
        this.socket.emit('set username', name)
    }

    emitGetUserName = () => {
        this.socket.emit('get username');
    };
}