import { Injectable } from '@angular/core';
import {  MansajeCont } from '../modelos/contenido';
import SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioChat {
    private stompClient: any;
  private messageSubject: BehaviorSubject<MansajeCont[]> = new BehaviorSubject<MansajeCont[]>([]);

  constructor() {
    this.initializeWebSocketConnection_client();
  }

  initializeWebSocketConnection_stompover() {
    const url = 'http://localhost:3000/chat-socket';
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket)
  }
  
initializeWebSocketConnection_client() {
    const url = 'http://localhost:3000/chat-socket';
    //const socket = new SockJS(url);
    this.stompClient = new Client();
    this.stompClient.webSocketFactory= function () {
         return new SockJS(url);
       };
    this.stompClient.activate();
  }

  unirseSala(roomId: string){ // conexion por stompover
    this.stompClient.connect({}, ()=>{
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {
        const messageContent = JSON.parse(messages.body);
        const currentMessage = this.messageSubject.getValue();
        currentMessage.push(messageContent);

        this.messageSubject.next(currentMessage);

      })
    })
  }

  sendMessage2(roomId: string, mansajeCont: MansajeCont) {//envios por stomp over

    this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(mansajeCont))
  }

  sendMessage(roomId: string, mansajeCont: MansajeCont) {//conexion por clase client
    this.stompClient.publish({
      destination: `/app/chat/${roomId}`,
      body: JSON.stringify(mansajeCont)
    });
  }
}
