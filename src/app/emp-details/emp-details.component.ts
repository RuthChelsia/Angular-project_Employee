import { Component, Input, OnInit } from '@angular/core';
import { EmBox } from '../embox/em';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  @Input() emBox?: EmBox;
 
  constructor() { }

  ngOnInit(): void {
  }

}
