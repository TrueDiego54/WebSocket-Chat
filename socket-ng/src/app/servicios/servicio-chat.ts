import { Injectable } from '@angular/core';
import { ChatMessage } from '../modelos/contenido';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioChat {
    private stompClient: any;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const url = 'http://localhost:3000/chat-socket';
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame: any) => {
      this.stompClient.subscribe(`/tema/$(roomId)`, (message: any) => {
        const messageBody = JSON.parse(message.body);
        console.log('Received message:', messageBody);
      })
    });
  }

  public sendMessage(roomId: string, message: ChatMessage) {
    this.stompClient.send(`/sock/chat/${roomId}`, {}, JSON.stringify(message));
  }
}
