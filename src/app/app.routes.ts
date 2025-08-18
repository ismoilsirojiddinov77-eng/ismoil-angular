import { Routes } from '@angular/router';
import { ManComponent } from './man/man.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { SportClothesComponent } from './sport-clothes/sport-clothes.component';
import { DiscountComponent } from './discount/discount.component';
import { BoshlangichComponent } from './boshlangich/boshlangich.component';

export const routes: Routes = [
    { path: '', redirectTo: 'boshlangich', pathMatch: 'full' },
    { path: 'boshlangich', component: BoshlangichComponent },
    { path: 'man', component: ManComponent },
    { path: 'man/footwear', component: ManComponent },
    { path: 'man/clothing', component: ManComponent },
    { path: 'man/accessories', component: ManComponent },
    { path: 'women', component: WomenComponent },
    { path: 'women/footwear', component: WomenComponent },
    { path: 'women/clothing', component: WomenComponent },
    { path: 'women/jewelry', component: WomenComponent },
    { path: 'kids', component: KidsComponent },
    { path: 'kids/footwear', component: KidsComponent },
    { path: 'kids/clothing', component: KidsComponent },
    { path: 'kids/toys', component: KidsComponent },
    { path: 'sport-clothes', component: SportClothesComponent },
    { path: 'sport-clothes/activewear', component: SportClothesComponent },
    { path: 'sport-clothes/gear', component: SportClothesComponent },
    { path: 'sport-clothes/accessories', component: SportClothesComponent },
    { path: 'discount', component: DiscountComponent },
    { path: 'discount/clearance', component: DiscountComponent },
    { path: 'discount/seasonal', component: DiscountComponent }
];
