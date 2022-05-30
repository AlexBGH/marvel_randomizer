import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

@Injectable()

export class ServicesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private allCardsUrl = 'https://marvelcdb.com/api/public/cards/';

  getAllCards(): Observable<any> {
    return this.http.get(this.allCardsUrl);
  }

  ngOnInit(): void {
  }

}

