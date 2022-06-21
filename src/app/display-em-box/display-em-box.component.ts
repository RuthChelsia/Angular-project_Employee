import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmBox } from '../embox/em';
import { EmBoxesService } from '../emboxes.service';

@Component({
  selector: 'app-display-em-box',
  templateUrl: './display-em-box.component.html',
  styleUrls: ['./display-em-box.component.css']
})
export class DisplayEmBoxComponent implements OnInit {

  ngOnInit(): void {
    this.emBoxesService.emBox$.subscribe((emBox: EmBox[]) => {
      this.emBox = emBox;
      console.log(this.emBox);
    });
  }
  constructor(public emBoxesService:EmBoxesService, public activatedrout: ActivatedRoute,public router: Router) { }
  selectedEmployee?: EmBox;
  emBox!: EmBox[];
  showEmpDetails(emp: EmBox): void {
    this.selectedEmployee = emp;
    this.router.navigate(["emboxDetails"]);
}
}