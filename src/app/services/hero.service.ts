import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  //Modify the constructor with a parameter that declares a private messageService property.
  //Angular will inject the singleton MessageService into that property when it creates
  // the HeroService.
  constructor(private messageService: MessageService) {}
  //This is a typical "service-in-service" scenario: You inject the MessageService
  //into the HeroService which is injected into the HeroesComponent.

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
