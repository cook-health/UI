import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.css']
})
export class FollowupComponent implements OnInit {

  id: number = 1;
  phone: number = 1;
  reminder1: string = "";
  reminder2: string = "";


  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.phone = this.route.snapshot.params['phone'];
  }


  submit() {
    this.router.navigate(['/review/',this.id, this.phone]);
  }

  back() {
    this.router.navigate(['/doc/',this.id, this.phone]);
  }

}
