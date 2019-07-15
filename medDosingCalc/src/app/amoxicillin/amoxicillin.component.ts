import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amoxicillin',
  templateUrl: './amoxicillin.component.html',
  styleUrls: ['./amoxicillin.component.scss']
})
export class AmoxicillinComponent implements OnInit {

  twentyFive: number = 25;
  forty: number = 40;
  fifty: number = 50;
  eighty: number = 80;

  constructor() { }


  ngOnInit() {
  }

}
