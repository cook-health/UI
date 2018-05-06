import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import construct = Reflect.construct;

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  id: number = 1;
  phone: number = 1;
  symptoms: string = "";
  diagnosis: string = "";
  treatment: string = "";
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.phone = this.route.snapshot.params['phone'];
    console.log("in documentation now");
  }

  saveDoc(){
    this.router.navigate(['/followup/',this.id, this.phone]);
  }

}
