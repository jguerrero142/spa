import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './servicios/websocket.service';
// import { HeroesService } from './servicios/heroes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // implements OnInit
  isCollapsed = false;

  constructor(
    public wsService: WebsocketService
    // public hero: HeroesService
    
    
  ){
    console.log("dsde el app");
  }

  // ngOnInit(){
  //   this.hero.senMessage('hola desde angular');
  // }
}
