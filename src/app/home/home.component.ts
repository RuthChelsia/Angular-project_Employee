import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmBox, NewEmbox } from '../embox/em';
import { EmBoxesService } from '../emboxes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.emBoxesService.getEmBoxes().subscribe((emBox: NewEmbox) => {
      this.emBox = emBox.emBox;
      console.log(this.emBox);
    });
  }
  constructor(public emBoxesService:EmBoxesService,private router:Router) { }
  emBox!: EmBox[];

  showEmpDetails(emp: EmBox): void {
    this.router.navigate(["/employeeDetails",emp.empId])
}

}
