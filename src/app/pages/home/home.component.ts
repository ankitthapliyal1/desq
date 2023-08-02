import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  section = 1

  tab = 'English'

  ngOnInit(): void {
  }


  tabclick(e:any){
    this.tab = e
  }

  next(e:any){
    this.section = e
  }

  submit(e:any){
    this.router.navigateByUrl('/confirm');
  }

}
