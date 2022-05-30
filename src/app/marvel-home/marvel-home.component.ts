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
  code!: any;
  randomizer!: any;
  

  async ngOnInit(): Promise<void> {
    this.code = [
      '01001a', 
      '01010a', 
      '01019a', 
      '01029a', 
      '01040a', 
      '03001a', 
      '04001a', 
      '04031a', 
      '05001a', 
      '06001a', 
      '08001a', 
      '09001a',
      '10001a',
      '12001a',
      '13001a',
      '14001a',
      '15001a',
      '16001a',
      '16029a',
      '17001a',
      '18001a',
      '19001a',
      '20001a',
      '21001a',
      '21031a',
      '22001a',
      '23001a',
      '25001a',
      '26001a',
      '27001a',
      '27030a',
      '28001a',
      '29001a'
    ]
    this._services.getAllCards()
    .subscribe(
      data => {
        this.cards = data;
      }
    )
    this.randomizer = this.code[0];
  }
}
