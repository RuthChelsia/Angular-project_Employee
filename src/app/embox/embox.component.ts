import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  EmBox } from './em';


@Component({
  selector: 'app-embox',
  templateUrl: './embox.component.html',
  styleUrls: ['./embox.component.css']
})
export class EmboxComponent implements OnInit {
  @Input() emBox!: EmBox;

  @Output() employeeClicked = new EventEmitter<EmBox>();

  constructor(
    public activatedrout: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {
  }
  public showEmpDetails(): void {
    
    this.employeeClicked.emit(this.emBox);
    console.log(this.emBox);
    // this.router.navigate(["EmployeeDetails"]);
  }
  
    //console.log(this.details);
  //   this.detailsClicked.emit(this.details);


}
