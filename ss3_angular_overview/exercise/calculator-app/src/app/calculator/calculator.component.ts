import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  result: number = 0 ;

  constructor() { }

  ngOnInit(): void {

  }

  public math(idNumber1: any , idNumber2: any , idMath: any) {
    console.log(idMath);
    switch (idMath) {
      case "summation" :
        this.result = Number(idNumber1) + Number(idNumber2);
        break;
      case "subtraction" :
        this.result = idNumber1 - idNumber2;
        break;
      case "multiplication" :
        this.result = idNumber1 * idNumber2;
        break;
      case "division" :
        this.result = idNumber1 / idNumber2;
        break;

    }
  }

}
