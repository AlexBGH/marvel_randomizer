import { Component, OnInit } from '@angular/core';
import { Cards } from '../services/cards';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.css']
})
export class MarvelHomeComponent implements OnInit {

  constructor(private _services: ServicesComponent) { 
  }

  cards!: Cards[];
  i!: number;
  

  ngOnInit(): void {
    this._services.getAllCards()
    .subscribe(
      data => {
        this.cards = data;
      }
    )
  }

}
