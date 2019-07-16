import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedEquationService {

  constructor() { }

  medEquationlbsTwiceDaily(potency, dosing, lbs) {
    lbs = (((lbs/2.2)*dosing)/potency)/2;
    return lbs;
  }

  medEquationkgTwiceDaily(potency, dosing, kg) {
    kg = ((kg*dosing)/potency)/2;
    return kg;
  }
}
