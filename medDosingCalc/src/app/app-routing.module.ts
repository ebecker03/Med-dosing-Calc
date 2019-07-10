import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AntibioticsComponent } from './antibiotics/antibiotics.component';
import { AnalgesicsComponent } from './analgesics/analgesics.component';
import { AntihistaminesComponent } from './antihistamines/antihistamines.component';
import { MiscComponent } from './misc/misc.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomeComponent },
  { path: 'antibiotics', component: AntibioticsComponent },
  { path: 'analgesics', component: AnalgesicsComponent },
  { path: 'antihistamines', component: AntihistaminesComponent},
  { path: 'misc', component: MiscComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
