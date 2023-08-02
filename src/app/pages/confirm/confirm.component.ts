import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  tab = 'New'

  ngOnInit(): void {
  }

  tabclick(e:any){
    this.tab = e
    this.router.navigateByUrl('/signin');
  }


}
