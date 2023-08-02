import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  section = 1;
  tab = 'Bank'

  ngOnInit(): void {
  }

  tabclick(e:any){
    this.tab = e
  }

  next(e:any){
this.section = e;
  }

  nextPage(){
    this.router.navigateByUrl('agreement')
  }

}
