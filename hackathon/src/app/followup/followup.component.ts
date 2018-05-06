import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.css']
})
export class FollowupComponent implements OnInit {

  reminder1: string = "";
  reminder2: string = "";
  reminder3: string = "";

  constructor() { }

  ngOnInit() {
  }

}
