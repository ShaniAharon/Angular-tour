import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mock-heroes';
import { Hero } from 'src/app/models/hero';

//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes', //The component's CSS element selector.
  templateUrl: './heroes.component.html', //The location of the component's template file.
  styleUrls: ['./heroes.component.scss'], //The location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {
  constructor() {}

  selectedHero?: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  heroes = HEROES;

  //The ngOnInit() is a lifecycle hook.
  // Angular calls ngOnInit() shortly after creating a component.
  // It's a good place to put initialization logic.
  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
