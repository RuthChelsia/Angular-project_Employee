export class EmBox {
    constructor(public empId:string,
      public imageSource:string,
    public employeeName: string,
    public designation: string,
    public emailId:string,
    public phone:string,
    public address:string){

    }

} 
export class NewEmbox{
  constructor(public emBox:EmBox[]){


  }
}

  

  