import { Component, OnInit } from '@angular/core';
import { ServicioChat } from '../../servicios/servicio-chat';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat implements OnInit {
  constructor(private chatService: ServicioChat) {
    // Initialize chat service or any other setup if needed
  }

  ngOnInit(): void {
    this.chatService.sendMessage("defaultRoom", {
      message: "Hello, World!",
      user: "User1"});
  }
}