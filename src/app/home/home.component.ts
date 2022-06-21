import { Component, OnInit } from '@angular/core';
import { EmBox } from '../embox/em';
import { EmBoxesService } from '../emboxes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.emBoxesService.emBox$.subscribe((emBox: EmBox[]) => {
      this.emBox = emBox;
      console.log(this.emBox);
    });
  }
  constructor(public emBoxesService:EmBoxesService) { }
  selectedEmployee?: EmBox;
  emBox!: EmBox[];

  showEmpDetails(emp: EmBox): void {
    this.selectedEmployee = emp;
}

}
