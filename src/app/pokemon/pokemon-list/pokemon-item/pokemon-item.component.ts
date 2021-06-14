import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Result } from '../../result.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() result: Result;
  @Input() index: number;


  constructor() { }

  ngOnInit(): void {
  }

}
