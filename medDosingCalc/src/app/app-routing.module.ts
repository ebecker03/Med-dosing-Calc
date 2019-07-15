import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AntibioticsComponent } from './antibiotics/antibiotics.component';
import { AnalgesicsComponent } from './analgesics/analgesics.component';
import { AntihistaminesComponent } from './antihistamines/antihistamines.component';
import { MiscComponent } from './misc/misc.component';
import { AmoxicillinComponent } from './amoxicillin/amoxicillin.component';
import { PenicillinComponent } from './penicillin/penicillin.component';
import { AugmentinComponent } from './augmentin/augmentin.component';
import { DicloxicillinComponent } from './dicloxicillin/dicloxicillin.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomeComponent },
  { path: 'antibiotics', component: AntibioticsComponent },
  { path: 'analgesics', component: AnalgesicsComponent },
  { path: 'antihistamines', component: AntihistaminesComponent},
  { path: 'misc', component: MiscComponent },
  { path: 'amoxicillin', component: AmoxicillinComponent },
  { path: 'penicillin', component: PenicillinComponent },
  { path: 'augmentin', component: AugmentinComponent },
  { path: 'dicloxicillin', component: DicloxicillinComponent },
  { path: '**', redirectTo: '/homepage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
