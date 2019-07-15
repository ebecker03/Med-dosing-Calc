import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedEquationService {

  constructor() { }

  medEquationlbs(potency, dosing, lbs) {
    (((lbs/2.2)*dosing)/potency)/2
  }

  medEquationkg(potency, dosing, kg) {
    ((kg*dosing)/potency)/2
  }
}
