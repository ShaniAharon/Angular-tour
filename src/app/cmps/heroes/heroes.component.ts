import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes', //The component's CSS element selector.
  templateUrl: './heroes.component.html', //The location of the component's template file.
  styleUrls: ['./heroes.component.scss'], //The location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {
  // The parameter simultaneously defines a private heroService property and identifies it
  // as a HeroService injection site.
  // When Angular creates a HeroesComponent,
  // the Dependency Injection system sets the heroService parameter to the singleton instance
  // of HeroService.
  constructor(private heroService: HeroService) {}

  selectedHero?: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  heroes: Hero[] = [];

  //The ngOnInit() is a lifecycle hook.
  // Angular calls ngOnInit() shortly after creating a component.
  // It's a good place to put initialization logic.
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    // this.heroes = this.heroService.getHeroes();
  }
}
