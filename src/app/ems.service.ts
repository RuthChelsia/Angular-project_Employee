import { Injectable } from '@angular/core';
import { EmBox } from './embox/em';



@Injectable({
  providedIn: 'root'
})
export class EmsService {
  private emBoxes!: EmBox[];

  constructor(){}
   
  public addEmContainer(emBoxes: EmBox): void {
    this.emBoxes.push(emBoxes);
  }
}
