import {Component, OnInit} from '@angular/core';
import {Routes, RouterModule, Router} from "@angular/router";
import {callLifecycleHooksChildrenFirst} from "@angular/core/src/view/provider";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})


export class SetupComponent{
  firstName: string = '';
  lastName: string = '';
  day: string = '0';
  month: string = '0';
  year: string = "0";
  DOB: string = "";
  phone: number = 0;
  filled: boolean = false;


  constructor(private router: Router) {};


  dayHandler(event: Event) {
    this.day = (<HTMLInputElement>event.currentTarget).value;
  }

  monthHandler(event: Event) {
    this.month = (<HTMLInputElement>event.currentTarget).value;
  }

  yearHandler(event: Event) {
    this.year = (<HTMLInputElement>event.currentTarget).value;
  }

  setupPatient(){
    this.DOB = this.month + "/" + this.day + "/" + this.year;
    this.router.navigate(['/doc']);
  }

}
