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
  heroes: Hero[];

  constructor(
    private heroeService: HeroService,
    private messageService: MessageService
  ) {}

  // for initialization logic
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroeService.getHeroes().subscribe((h) => (this.heroes = h));
  }
}
