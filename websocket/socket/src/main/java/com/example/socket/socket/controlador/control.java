package com.example.socket.socket.controlador;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.example.socket.socket.entidad.MansajeCont;

@Controller
public class control {
    @MessageMapping("/chat/{roomId}")
    @SendTo("/topic/{roomId}")
    public MansajeCont chat(@DestinationVariable String roomId, MansajeCont message) {
        System.out.println(message);
        return new MansajeCont(message.getMensaje(), message.getUsuario());
    }
}
