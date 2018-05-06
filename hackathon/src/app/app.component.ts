import { Component } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import {callLifecycleHooksChildrenFirst} from "@angular/core/src/view/provider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private router: Router){};

  start() {
    this.router.navigate(['setup']);
  };


}
