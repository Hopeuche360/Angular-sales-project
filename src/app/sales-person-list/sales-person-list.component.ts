import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Hope", "Chijuka", "hopechijuka@gmail.com", 20000),
    new SalesPerson("Ada", "Madu", "adamadu@gmail.com", 29000),
    new SalesPerson("Anthony", "Idoko", "anthonyidoko@gmail.com", 30000),
    new SalesPerson("Charlie", "Pexron", "charliepexron@gmail.com", 44000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
