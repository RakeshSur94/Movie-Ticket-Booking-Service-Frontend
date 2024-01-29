import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/db/movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('1.5s ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class MoviesListComponent implements OnInit{
  movies=Movies
  constructor(private router:Router){

  }
  ngOnInit(): void {
      
  }

}
