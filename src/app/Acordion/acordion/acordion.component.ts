import { Component, Input, OnInit } from '@angular/core';
import {NgbAccordionConfig} from "@ng-bootstrap/ng-bootstrap"
@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent implements OnInit {

@Input() datoTemp:string;
  
  constructor(privated_Config:NgbAccordionConfig) {
    console.log(this.datoTemp+"---------------")
   }

  ngOnInit(): void {
  }

}
