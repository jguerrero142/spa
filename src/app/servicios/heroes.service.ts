import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Heroes } from '../models/heroes';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }
    getHeroes(){
      return this.http.get(`${this.API_URI}/heroes`);
    }
        
    getHeroe(id: string | number){
      return this.http.get(`${this.API_URI}/heroes/${id}`)
    }
    deleteHeroe(id: string){
      return this.http.delete(`${this.API_URI}/heroes/${id}`);
    }
    saveHeroe(Heroes: Heroes){
      return this.http.post(`${this.API_URI}/heroes`, Heroes);
    }
    updateHeroe(id: string | number, updateHeroe: Heroes): Observable<Heroes>{
      return this.http.put(`${this.API_URI}/heroes/${id}`, updateHeroe);
    }
    
}
