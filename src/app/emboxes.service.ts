import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmBox, NewEmbox } from './embox/em';


@Injectable({
  providedIn: 'root'
})
export class EmBoxesService {
  
   emBox: BehaviorSubject<EmBox[]>;
   emBox$: Observable<EmBox[]>;

   constructor(public httpClient:HttpClient) {
    this.emBox = new BehaviorSubject<EmBox[]>([]);
    this.emBox$ = this.emBox.asObservable();
  }

  public  addEmBoxes(emBox:NewEmbox): void{
    this.httpClient.patch("https://employeeproject-ba6c0-default-rtdb.firebaseio.com/emBox.json",emBox).subscribe(); 
    this.emBox.next(emBox.emBox);
  }
  public getEmBoxes(): Observable<NewEmbox>{
    return this.httpClient.get<NewEmbox>("https://employeeproject-ba6c0-default-rtdb.firebaseio.com/emBox.json");
  }
}
