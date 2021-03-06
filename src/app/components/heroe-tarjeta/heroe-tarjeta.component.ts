import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  verHeroe(id: number){
    this.router.navigate(['/heroe',id])
  }

}
