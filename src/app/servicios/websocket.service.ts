import { Injectable } from '@angular/core';
import { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  io = io('http://localhost:5000',{

      withCredentials: true,
      autoConnect: true
  });

  public socketStatus = false;

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();

  }

  checkStatus(){
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emit(evento: string, payload?: any, callback?: Function){
    console.log('Emitiendo', evento);
    this.socket.emit(evento, payload, callback);
  }
}
