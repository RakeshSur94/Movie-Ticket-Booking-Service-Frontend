import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/model/Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  @Input()
  movies?:Movie;
  hoverState: string = 'notHovered';

  constructor() {
    this.hoverState = 'notHovered';
  }

  onHover(hovered: boolean) {
    this.hoverState = hovered ? 'hovered' : 'notHovered';
  }

}
