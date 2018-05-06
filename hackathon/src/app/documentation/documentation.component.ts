import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  symptoms: string = "";
  diagnosis: string = "";
  treatment: string = "";
  constructor() { }

  ngOnInit() {
    console.log("in documentation now");
  }

}
