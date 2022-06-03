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
  attributSpecial: any;
  standardChoice!: any;
  standardChoiceValidator!: any;
  modularSetChoiceValidator!: any;
  standardRandom!: any;
  modularSetChoice!: any;
  modularRandom!: any;
  gauntletRandom!: any;
  gauntletChoice!: any;
  gauntletChoiceValidator!: any;

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
    'https://images-cdn.fantasyflightgames.com/filer_public/41/ae/41aee570-e38f-41cf-a980-06bf743b3614/mc16en_collector1.png',
    'https://marvelcdb.com/bundles/cards/01094.png', 
    'https://images-cdn.fantasyflightgames.com/filer_public/9b/de/9bde26bf-ffda-46fb-9405-2e4e3768e831/mc27en_venom_i.png',
    'https://marvelcdb.com/bundles/cards/01113.png',
    'https://lcgcdn.s3.amazonaws.com/mc/MC10en_94.jpg',
    'https://marvelcdb.com/bundles/cards/01134.png',
    'https://marvelcdb.com/bundles/cards/02014.png',
    'https://marvelcdb.com/bundles/cards/07002.png',
    'https://marvelcdb.com/bundles/cards/21071.png',
    'https://crazyjackalope.com/wp-content/uploads/2021/07/r1-1.jpg',
    'https://marvelcdb.com/bundles/cards/21092.png',
    'https://marvelcdb.com/bundles/cards/21111.png',
    'https://steamuserimages-a.akamaihd.net/ugc/1258141671829790334/2942F7ECEF576B427E06F3ABD91FE229421898F7/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    'https://marvelcdb.com/bundles/cards/21136a.png',
    'https://marvelcdb.com/bundles/cards/21161.png',
    'https://images-cdn.fantasyflightgames.com/filer_public/94/88/94882c1d-db08-4ac7-a5d9-2b2a1d7772e7/mc24en_the-hood-i.png',
    'https://m.media-amazon.com/images/I/71qdxgox6dL._AC_SL1500_.jpg',
    'https://lcgcdn.s3.amazonaws.com/mc/MC10en_58.jpg',
    'https://marvelcdb.com/bundles/cards/16058.jpg',
    'https://images-cdn.fantasyflightgames.com/filer_public/e0/e2/e0e21db8-9ed0-4a07-b64a-3ff8074aae04/mc27en_sandman.png',
    'https://lcgcdn.s3.amazonaws.com/mc/MC10en_76.jpg',
    'https://www.gamescapesf.com/assets/webimages/mc16en_collector2-a1.jpg',
    'https://lcgcdn.s3.amazonaws.com/mc/MC10en_109.jpg',
    'https://marvelcdb.com/bundles/cards/16088.jpg',
    'https://lcgcdn.s3.amazonaws.com/mc/MC10en_127.jpg',
    'https://crazyjackalope.com/wp-content/uploads/2022/04/sm_sinistersix.jpg',
    'https://lcgcdn.s3.amazonaws.com/mc/MC11en_1.jpg',
    'https://crazyjackalope.com/wp-content/uploads/2022/04/sm_venomgoblin.jpg'
  ]
  
  attributs = [
    'Agression', 
    'Justice', 
    'Commandement', 
    'Protection'
  ]

  specialAttributs = [
    'Agress / Just',
    'Agress / Comm',
    'Agress / Prot',
    'Comm / Just',
    'Comm / Prot',
    'Prot / Just'
  ]

  expert = [
    'https://marvelcdb.com/bundles/cards/01191.png',
    '../../assets/notexpert.jpeg',]

  standard = [
    'https://marvelcdb.com/bundles/cards/01186.jpg',
    'https://images-cdn.fantasyflightgames.com/filer_public/99/f3/99f3ca0a-545d-4e97-9e22-0df0e4ce7b8d/mc24en_formidable-foe.png'
  ]

  gauntlet = [
    'https://hallofheroeshome.files.wordpress.com/2021/08/i1.jpg',
    '../../assets/gauntlet.jpeg'
  ]

  modular = [
    'https://hallofheroeshome.files.wordpress.com/2019/12/bomb2.jpg?strip=info&w=800',
    'https://hallofheroeshome.files.wordpress.com/2019/12/masters2.jpg?strip=info&w=788',
    'https://hallofheroeshome.files.wordpress.com/2019/12/under2.jpg?strip=info&w=788',
    'https://hallofheroeshome.files.wordpress.com/2019/12/legions3.jpg',
    'https://hallofheroeshome.files.wordpress.com/2019/12/doomsday3.jpg',
    'https://hallofheroeshome.files.wordpress.com/2019/12/gimmicks1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2019/12/mess2.jpg',
    'https://hallofheroeshome.files.wordpress.com/2019/12/drain2.jpg',
    'https://hallofheroeshome.files.wordpress.com/2019/12/running2.jpg',
    'https://hallofheroeshome.files.wordpress.com/2020/08/1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2020/09/ha6.jpg',
    'https://hallofheroeshome.files.wordpress.com/2020/09/wm1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2020/09/hp5.jpg',
    'https://hallofheroeshome.files.wordpress.com/2020/09/t6-1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2020/09/5-wildrun.png',
    'https://hallofheroeshome.files.wordpress.com/2020/09/1-kang-master-of-time.png',
    'https://hallofheroeshome.files.wordpress.com/2021/04/bb5.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/04/ga5.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/04/k8.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/04/mm8.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/04/sp1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/08/b2-1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/08/a3-2.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/08/c2-1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/08/l5-1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/08/f1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2021/08/e1-1.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/02/24015.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/02/24035.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/02/24065.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/02/24043.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/02/24024.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/02/24041.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/02/24059.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/02/24061.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/03/2-6.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/03/4-6.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/03/4-7.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/03/2-9.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/03/6-7.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/03/1-12.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/03/2-13.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/03/1-14.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/03/a.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/05/z2.jpg',
    'https://hallofheroeshome.files.wordpress.com/2022/05/z11.jpg'
  ]

  async ngOnInit(): Promise<void> {
    
    this.numberOfPlayersChoice = "";
    this.villainChoice = "";
    this.expertChoice = "";
    this.standardChoice = "";
    this.modularSetChoice = "";
    this.gauntletChoice = "";

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

    this.modularRandom = this.modular[Math.floor(Math.random()*this.modular.length)]
    
    this.expertRandom = this.expert[Math.floor(Math.random()*this.expert.length)]

    this.gauntletRandom = this.gauntlet[Math.floor(Math.random()*this.gauntlet.length)]

    this.standardRandom = this.standard[Math.floor(Math.random()*this.standard.length)]

    this.numberOfPlayers = form.value.numberOfPlayersChoice;

    this.villainChoiceValidator = this.villainChoice;

    this.modularSetChoiceValidator = this.modularSetChoice;

    this.gauntletChoiceValidator = this.gauntletChoice;

    this.expertChoiceValidator = this.expertChoice;

    this.standardChoiceValidator = this.standardChoice;

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
    this.attributSpecial = this.specialAttributs[Math.floor(Math.random()*this.specialAttributs.length)]
  }
}
