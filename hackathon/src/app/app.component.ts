import { Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  day: string = '0';
  month: string = '0';
  year: string = "0";
  DOB: string = "";
  phone: number = 0;
  filled: boolean = false;
  token: string = "q5xjzzabe8tjhdz3wwwcqgrq";

  dayHandler(event: Event) {
    this.day = (<HTMLInputElement>event.currentTarget).value;
  };

  monthHandler(event: Event) {
    this.month = (<HTMLInputElement>event.currentTarget).value;
  };

  yearHandler(event: Event) {
    this.year = (<HTMLInputElement>event.currentTarget).value;
  };


  setupPatient() {
    this.DOB = this.month + "/" + this.day + "/" + this.year;

  };

}
