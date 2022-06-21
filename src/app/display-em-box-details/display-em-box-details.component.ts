import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmBox } from '../embox/em';
import { EmBoxesService } from '../emboxes.service';

@Component({
  selector: 'app-display-em-box-details',
  templateUrl: './display-em-box-details.component.html',
  styleUrls: ['./display-em-box-details.component.css']
})
export class DisplayEmBoxDetailsComponent implements OnInit {

 
  selectedEmployee?: EmBox;
  ngOnInit(): void {
    this.emBoxesService.emBox$.subscribe((emBox: EmBox[]) => {
      this.emBox = emBox;
      console.log(this.emBox);
    });
  }
  constructor(public emBoxesService:EmBoxesService,  public activatedrout: ActivatedRoute,public router: Router) { }
 
  emBox!: EmBox[];

  showEmpDetails(emp: EmBox): void {
    this.selectedEmployee = emp;
    // this.router.navigate(["emboxDetails"]);
}
}