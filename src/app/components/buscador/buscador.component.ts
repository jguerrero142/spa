import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../models/heroes';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  
  result: Heroes[] = [];
  buscar: any = [];
  termino: string;

  constructor(private activateRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.termino = params['termino'];
      
        this.buscarHeroe(this.termino);
      
      
     
      
      
    })
    
  }
 
      buscarHeroe(termino:string){
        this.heroesService.getHeroes()
        .subscribe( (res: Heroes[] )=>{
              this.result = res;
              let heroesArr: Heroes[] = [];
              termino = termino.toLowerCase();
              // console.log(this.heroes);

              for (let heroe of this.result ){
                let nombre = heroe.nombre.toLowerCase();

                if(nombre.indexOf(termino) >= 0){
                  heroesArr.push (heroe)
                }
              }
              this.buscar = heroesArr;
              console.log(this.buscar);
              return heroesArr;
              
        })
        
        
      }

}
