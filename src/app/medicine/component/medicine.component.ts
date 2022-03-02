import { Medicine } from './../model/medicine';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  constructor() { }

  @Input()
  medicines?:Medicine[] = [new Medicine("Dipirona", "dosage", 3, 23.2, new Date(), new Date())];

  ngOnInit(): void {
  }

}
