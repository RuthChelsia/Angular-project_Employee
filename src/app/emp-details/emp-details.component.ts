import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmBox, NewEmbox } from '../embox/em';
import { EmBoxesService } from '../emboxes.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  emBox?: EmBox;
 id?:string;
  constructor(public activatedRoute:ActivatedRoute, public emBoxesService:EmBoxesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
    this.id=params['id']
    });
    this.emBoxesService.getEmBoxes().subscribe((emBox: NewEmbox) => {
      if(this.id)
      this.emBox = emBox.emBox.filter((embox: EmBox) => embox.empId === this.id)?.[0];
  });
}


}
