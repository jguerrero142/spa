import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroes: any = [];
  heroe: any = [];

  constructor( private activateRoute: ActivatedRoute,
               private heroesService: HeroesService) { 

        this.activateRoute.params.subscribe(
          params => {
            this.getHeroe(params['id']);
          });
  }
        
  ngOnInit(): void {
  }
  getHeroe(id: number){
    this.heroes = this.heroesService.getHeroe(id)
    .subscribe( res =>{
      this.heroe = res;
      console.log(this.heroe);
    })
    
  }

}
