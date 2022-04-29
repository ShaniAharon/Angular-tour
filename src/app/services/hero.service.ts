import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    return heroes;
  }
}
