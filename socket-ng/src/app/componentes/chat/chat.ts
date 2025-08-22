import { Component, OnInit } from '@angular/core';
import { ServicioChat } from '../../servicios/servicio-chat';
import { ActivatedRoute } from '@angular/router';
import { MansajeCont } from '../../modelos/contenido';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat implements OnInit {
  messageInput: string = '';
  userId: string="";
  messageList: any[] = [];
  constructor(private chatService: ServicioChat,private route: ActivatedRoute) {
    // Initialize chat service or any other setup if needed
  }
  sendMessage() {
    const chatMessage = {
      mensaje: "pruebaaaa",
      usuario: "this.userId"
    }as MansajeCont
    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = '';
  }
    lisenerMessage() {

  }
  ngOnInit(): void {
    this.userId = this.route.snapshot.params["userId"];
    //this.chatService.unirseSala("ABC"); conexion deprecada
    
    this.lisenerMessage();
  }
}