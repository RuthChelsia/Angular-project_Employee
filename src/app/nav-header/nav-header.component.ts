import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  constructor(
    public activatedrout: ActivatedRoute,public router: Router
    
    ) { }

  ngOnInit(): void {
  }
  goToAddEmBox(): void{
 
    this.router.navigate(["AddEmBox"]);
    
    
  }
  goToEmBox(): void{
    this.router.navigate(["embox"]);
  }

}
