import { Component, inject, OnInit } from '@angular/core';
import { AllserveService, ClothingItem } from '../allserve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sport-clothes',
  standalone: true,
  imports: [],
  templateUrl: './sport-clothes.component.html',
  styleUrl: './sport-clothes.component.css'
})
export class SportClothesComponent implements OnInit {
  server = inject(AllserveService);
  router = inject(Router);
  ngOnInit(): void {
    this.server.selectedSection.set('sport')
  }

  navigateToAbzor(item: ClothingItem) {
    this.server.setSelectedItem(item); // Tanlangan mahsulotni xizmatga o'rnatish
    this.router.navigate(['abzor']);
  }

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
