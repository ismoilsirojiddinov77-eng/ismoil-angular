import { Routes } from '@angular/router';
import { ManComponent } from './man/man.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { SportClothesComponent } from './sport-clothes/sport-clothes.component';
import { DiscountComponent } from './discount/discount.component';
import { BoshlangichComponent } from './boshlangich/boshlangich.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SavatComponent } from './savat/savat.component';
import { AbzorComponent } from './abzor/abzor.component';

export const routes: Routes = [
    { path: '', redirectTo: 'boshlangich', pathMatch: 'full' },
    { path: 'boshlangich', component: BoshlangichComponent },
    { path: 'favorite', component: FavoriteComponent },
    { path: 'savat', component: SavatComponent },
    { path: 'man', component: ManComponent },
    { path: 'women', component: WomenComponent },
    { path: 'kids', component: KidsComponent },
    { path: 'sport-clothes', component: SportClothesComponent },
    { path: 'discount', component: DiscountComponent },
    { path: 'abzor', component: AbzorComponent }

];
