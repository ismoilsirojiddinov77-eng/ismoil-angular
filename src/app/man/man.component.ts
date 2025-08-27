
import { Component, inject } from '@angular/core';
import { AllserveService } from '../allserve.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-man',
  standalone: true,
  imports: [NgIf],
  templateUrl: './man.component.html',
  styleUrl: './man.component.css'
})
export class ManComponent {
  server = inject(AllserveService);

  isOpen: { [key: string]: boolean } = {
    fit: false,
    features: false,
    size: false
  };

  toggleFilter(section: string) {
    this.isOpen[section] = !this.isOpen[section];
  }

  toggleColor(color: string) {
    this.server.toggleFilter(this.server.selectedColors, color);
  }

  toggleBrand(brand: string) {
    this.server.toggleFilter(this.server.selectedBrands, brand);
  }

  toggleSize(size: string) {
    this.server.toggleFilter(this.server.selectedSizes, size);
  }

  toggleType(type: string) {
    this.server.toggleFilter(this.server.selectedTypes, type);
  }

  clearTypes() {
    this.server.selectedTypes.set(new Set());
  }
}
