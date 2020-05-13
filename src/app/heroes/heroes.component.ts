import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[];

  constructor(
    private heroeService: HeroService,
    private messageService: MessageService
  ) {}

  // for initialization logic
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroeService.getHeroes().subscribe((h) => (this.heroes = h));
  }
}
