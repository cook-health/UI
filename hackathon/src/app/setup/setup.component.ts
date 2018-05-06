import {Component, OnInit} from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import {callLifecycleHooksChildrenFirst} from "@angular/core/src/view/provider";

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

  constructor(private router: Router,
                      route: ActivatedRoute) {};


  setupPatient(){
    console.log(this.DOB);
    this.router.navigate(['/doc/',this.id, this.phone]);
  }

}
