import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedEquationService {

  constructor() { }

  medEquationlbsTwiceDaily(potency, dosing, lbs) {
    (((lbs/2.2)*dosing)/potency)/2
  }

  medEquationkgTwiceDaily(potency, dosing, kg) {
    ((kg*dosing)/potency)/2
  }
}
