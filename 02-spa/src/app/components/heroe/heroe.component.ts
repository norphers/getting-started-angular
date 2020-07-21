import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any={};

  heroeLogoCasa:string;

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { 

    this.activatedRoute.params.subscribe(params => {
      this.heroe=this._heroesService.getHeroe( params['id'] );
      console.log(this.heroe);
    });
  }

  getLogoCasa(){
    if(this.heroe.casa=='Marvel'){
      this.heroe.casa = 'assets/img/marvel-logo.png';
    }
    if(this.heroe.casa=='DC'){
      this.heroe.casa = 'assets/img/dc-logo.png';
    }
  }
}
