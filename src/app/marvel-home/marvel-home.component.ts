import { Component, OnInit } from '@angular/core';
import { Cards } from '../services/cards';
import { ServicesComponent } from '../services/services.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.css']
})

export class MarvelHomeComponent implements OnInit {

  numberOfPlayersChoice!: 1 | 2 | 3 | 4;

  constructor(private _services: ServicesComponent) { 
  }

  cards!: Cards[];
  i!: number;
  heroCode1!: any;
  heroCode2!: any;
  heroCode3!: any;
  heroCode4!: any;
  attribut1!: any;
  attribut2!: any;
  attribut3!: any;
  attribut4!: any;

  code = [
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

  attributs = [
    'Agression', 
    'Justice', 
    'Commandement', 
    'Protection'
  ]

  async ngOnInit(): Promise<void> {
    
    this.numberOfPlayersChoice = 1;

    this._services.getAllCards()
    .subscribe(
      data => {
        this.cards = data;
      }
    )

    this.attribut1 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    this.attribut2 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    this.attribut3 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    this.attribut4 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    
    this.heroCode1 = this.code[Math.floor(Math.random()*this.code.length)]

    this.heroCode2 = this.code[Math.floor(Math.random()*this.code.length)]
    while (this.heroCode2 === this.heroCode1)
    {
      this.heroCode2 = Math.floor(Math.random()*this.code.length);
    }

    this.heroCode3 = this.code[Math.floor(Math.random()*this.code.length)]
    while (this.heroCode3 === this.heroCode1 || this.heroCode3 === this.heroCode2)
    {
      this.heroCode3 = Math.floor(Math.random()*this.code.length);
    }

    this.heroCode4 = this.code[Math.floor(Math.random()*this.code.length)]
    while (this.heroCode4 === this.heroCode1 || this.heroCode4 === this.heroCode2 || this.heroCode4 === this.heroCode3)
    {
      this.heroCode4 = Math.floor(Math.random()*this.code.length);
    }

    this._services.getAllCards()
    .subscribe(
      data => {
        this.cards = data;
      }
    )
  }

  onSubmitForm(form: NgForm) {
    this.numberOfPlayersChoice = form.value.numberOfPlayersChoice;

    this.heroCode1 = this.code[Math.floor(Math.random()*this.code.length)]
   
    this.heroCode2 = this.code[Math.floor(Math.random()*this.code.length)]
    while (this.heroCode2 === this.heroCode1)
    {
      this.heroCode2 = Math.floor(Math.random()*this.code.length);
    }
    
    this.heroCode3 = this.code[Math.floor(Math.random()*this.code.length)]
    while (this.heroCode3 === this.heroCode1 || this.heroCode3 === this.heroCode2)
    {
      this.heroCode3 = Math.floor(Math.random()*this.code.length);
    }
    
    this.heroCode4 = this.code[Math.floor(Math.random()*this.code.length)]
    while (this.heroCode4 === this.heroCode1 || this.heroCode4 === this.heroCode2 || this.heroCode4 === this.heroCode3)
    {
      this.heroCode4 = Math.floor(Math.random()*this.code.length);
    }

    this.attribut1 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    this.attribut2 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    this.attribut3 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    this.attribut4 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
  }
}
