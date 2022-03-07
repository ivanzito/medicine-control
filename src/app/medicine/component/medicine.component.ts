import { Medicine } from './../model/medicine';
import { Component, Input, OnInit } from '@angular/core';
import { Treatment } from '../model/treatment';
import { RangeTreatment } from '../model/rangeTreatment';


@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  constructor() { 
    
  }

  @Input()
  medicines?:Medicine[] = [
    new Medicine(
      "Dipirona", 
      "3ml", 
      1, 
      23.2, 
      new Treatment(
        new Date(), 
        new Date(),
        RangeTreatment.EACH_8_HOURS
      )
    )
  ]

  range = RangeTreatment;

  ngOnInit(): void {

  }

}
