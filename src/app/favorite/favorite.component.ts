import { Component, inject } from '@angular/core';
import { AllserveService } from '../allserve.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  server=inject(AllserveService)

}
