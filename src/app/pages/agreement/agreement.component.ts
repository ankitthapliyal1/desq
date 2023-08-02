import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  constructor() { }

  section = 1

  ngOnInit(): void {
  }

  submit(e:any){
this.section =e;
  }

}
