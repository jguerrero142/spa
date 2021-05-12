import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Heroes } from '../../models/heroes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: any;
  id: any;
  constructor( private heroesService: HeroesService,
               private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
    
  }
  getHeroes(){
    this.heroesService.getHeroes()
    .subscribe((res => {
      this.heroes = res;
      console.log(this.heroes);
    })
    )
  }
  
  

}
