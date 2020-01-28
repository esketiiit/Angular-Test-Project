import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-cmp',
  templateUrl: './navbar-cmp.component.html',
  styleUrls: ['./navbar-cmp.component.css']
})
export class NavbarCmpComponent implements OnInit {
  public currentTab:String = "";

  constructor(private router: Router) 
  {
    router.events.subscribe((val) => {
      this.currentTab = this.router.url;
      console.log(this.currentTab)
    });
  }

  ngOnInit() 
  {

  }

}
