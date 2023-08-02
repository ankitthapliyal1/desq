import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  section = 1;

  tab1 = 'Design'
  tab2 = 'UI/UX'
  tool = 'figma'
  expertise = 'Beginner'
  price = '20-40'

  ngOnInit(): void {
  }

  tabclick1(e:any){
    this.tab1 = e
  }

  tabclick2(e:any){
    this.tab2 = e
  }

  toolTab(e:any){
        this.tool = e
  }

  expertiseTab(e:any){
    this.expertise = e;
  }

  priceClick(e:any){
this.price = e
  }

  next(e:any){
    this.section = e
  }

  nextpage(){

    this.router.navigateByUrl('details')

  }

 

}
