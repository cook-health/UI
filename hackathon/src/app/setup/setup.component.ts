import {Component, OnInit} from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import {callLifecycleHooksChildrenFirst} from "@angular/core/src/view/provider";
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})


export class SetupComponent{
  firstName: string = '';
  lastName: string = '';
  DOB: string = "";
  phone: number = null;
  filled: boolean = false;
  id: number = 1;
  url = "http://127.0.0.1:5000/";

  constructor(private router: Router,
                      route: ActivatedRoute) {};


  setupPatient(){
    console.log(this.DOB);
    this.router.navigate(['/doc/',this.id, this.phone]);
    this.sendPatienInfo();
  }

  sendPatienInfo() {
    let data = {
      'firstname': this.firstName,
      'lastname': this.lastName,
      'dob': this.DOB,
      'mobilephone': this.phone
    };

    var req = new XMLHttpRequest();
    req.open('POST', this.url + "sendPatientInfo", true);
    let str = JSON.stringify(data);
    req.send(str);
  }

}
