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

  numberOfPlayersChoice!: any;

  constructor(private _services: ServicesComponent) { 
  }

  cards!: Cards[];
  i!: number;
  numberOfPlayers!: number;
  heroCode1!: any;
  heroCode2!: any;
  heroCode3!: any;
  heroCode4!: any;
  attribut1!: any;
  attribut2!: any;
  attribut3!: any;
  attribut4!: any;
  villain!: any;
  villainChoice!: any;
  villainChoiceValidator!: any;
  expertChoice!: any;
  expertChoiceValidator!: any;
  expertRandom!: any;

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
  
  villainCode = [
    '01094', 
    '01113',
    '01134',
    '02014',
    '07002',
    '21071',
    '21092',
    '21111',
    '21136a',
    '21161'
  ]
  
  attributs = [
    'Agression', 
    'Justice', 
    'Commandement', 
    'Protection'
  ]

  expert = [
    'https://marvelcdb.com/bundles/cards/01191.png',
    'https://marvelcdb.com/bundles/cards/01186.jpg'
,  ]

  async ngOnInit(): Promise<void> {
    
    this.numberOfPlayersChoice = "";
    this.villainChoice = "";
    this.expertChoice = "";

    this._services.getAllCards()
    .subscribe(
      data => {
        this.cards = data;
      }
    )

    this._services.getAllCards()
    .subscribe(
      data => {
        this.cards = data;
      }
    )
  }

  onSubmitForm(form: NgForm) {

    this.villain = this.villainCode[Math.floor(Math.random()*this.villainCode.length)]
    
    this.expertRandom = this.expert[Math.floor(Math.random()*this.expert.length)]

    this.numberOfPlayers = form.value.numberOfPlayersChoice;

    this.villainChoiceValidator = this.villainChoice;

    this.expertChoiceValidator = this.expertChoice;

    this.heroCode1 = this.code[Math.floor(Math.random()*this.code.length)]
    let index1 = this.code.indexOf(this.heroCode1)
    if (index1 !== -1) {
      this.code.splice(index1, 1);
    }
   
    this.heroCode2 = this.code[Math.floor(Math.random()*this.code.length)]
    let index2 = this.code.indexOf(this.heroCode2)
    if (index2 !== -1) {
      this.code.splice(index2, 1);
    }
    
    this.heroCode3 = this.code[Math.floor(Math.random()*this.code.length)]
    let index3 = this.code.indexOf(this.heroCode3)
    if (index3 !== -1) {
      this.code.splice(index3, 1);
    }
    
    this.heroCode4 = this.code[Math.floor(Math.random()*this.code.length)]

    this.code.push(this.heroCode1)
    this.code.push(this.heroCode2)
    this.code.push(this.heroCode3)


    this.attribut1 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    this.attribut2 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    this.attribut3 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
    this.attribut4 = this.attributs[Math.floor(Math.random()*this.attributs.length)]
  }
}
