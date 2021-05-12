import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../../models/heroes';
import { HeroesService } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  
  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
  }
  buscarObjeto(termino: string){
    if(termino.length > 0){
    this.router.navigate(['/buscar',termino])
    }else{
      this.router.navigate(['/heroes'])
    }
  }

  

}
