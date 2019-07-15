import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AntibioticsComponent } from './antibiotics/antibiotics.component';
import { AntihistaminesComponent } from './antihistamines/antihistamines.component';
import { AnalgesicsComponent } from './analgesics/analgesics.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiscComponent } from './misc/misc.component';
import { AmoxicillinComponent } from './amoxicillin/amoxicillin.component';
import { PenicillinComponent } from './penicillin/penicillin.component';
import { AugmentinComponent } from './augmentin/augmentin.component';
import { DicloxicillinComponent } from './dicloxicillin/dicloxicillin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AntibioticsComponent,
    AntihistaminesComponent,
    AnalgesicsComponent,
    HeaderComponent,
    FooterComponent,
    MiscComponent,
    AmoxicillinComponent,
    PenicillinComponent,
    AugmentinComponent,
    DicloxicillinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
