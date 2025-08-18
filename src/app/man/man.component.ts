import { Component, inject } from '@angular/core';
import { AllserveService } from '../allserve.service';
@Component({
  selector: 'app-man',
  standalone: true,
  imports: [],
  templateUrl: './man.component.html',
  styleUrl: './man.component.css'
})
export class ManComponent {
  server = inject(AllserveService)

} 
