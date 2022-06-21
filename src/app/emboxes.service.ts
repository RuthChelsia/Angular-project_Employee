import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmBox } from './embox/em';


@Injectable({
  providedIn: 'root'
})
export class EmBoxesService {
  
  
  emBox!: BehaviorSubject<EmBox[]>;

  
  emBox$!: Observable<EmBox[]>;


  
  constructor() {
    this.emBox = new BehaviorSubject<EmBox[]>([]);
    this.emBox$ = this.emBox.asObservable();
  }

  addEmBoxes(emBox:EmBox[]): void{
    this.emBox.next(emBox);
  }
  getEmBoxes(): EmBox[]{
    return this.emBox.value;
  }
}
