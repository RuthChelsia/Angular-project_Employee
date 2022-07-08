import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormArrayName, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmBox, NewEmbox } from '../embox/em';
import { EmboxComponent } from '../embox/embox.component';
import { EmBoxesService } from '../emboxes.service';

@Component({
  selector: 'app-add-embox',
  templateUrl: './add-embox.component.html',
  styleUrls: ['./add-embox.component.css']
})
export class AddEmboxComponent implements OnInit {
  addEmBoxForm!: FormGroup;
  constructor(public emBoxesService:EmBoxesService, private fb:FormBuilder, public activatedrout: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {

    this.addEmBoxForm = new FormGroup(
      {
        emBox:this.fb.array([]),
      })  
  }
   addEmBox(): void {
    this.emBox.push(new FormGroup({
      empId:new FormControl(null,[Validators.required]),
      imageSource:new FormControl(null,[Validators.required]),
      employeeName: new FormControl(null, [Validators.required]),
      designation: new FormControl(null, [Validators.required]),
      emailId:new FormControl(null,[Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),

  }))
 }

 

 get emBox(): FormArray {
  return (this.addEmBoxForm.get("emBox")) as FormArray;
}
 
saveEmBoxes(): void {
 // console.log(this.addEmBoxForm);
  const emBox:EmBox[]=[];
  if (this.addEmBoxForm?.value) {
    for(let embox of this.addEmBoxForm.value.emBox){
      emBox.push(new EmBox(embox.empId,embox.imageSource,embox.employeeName,embox.designation,embox.emailId,embox.phone,embox.address));

    }

     this.emBoxesService.addEmBoxes(new NewEmbox(emBox));
   // console.log(this.emBoxesService.getEmBoxes());
    
  }
   
 }

}
