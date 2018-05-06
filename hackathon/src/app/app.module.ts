import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { DocumentationComponent } from './documentation/documentation.component';
import { FormsModule} from "@angular/forms";
import { SetupComponent } from './setup/setup.component';
import { FollowupComponent } from './followup/followup.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: 'setup', component: SetupComponent},
  {path: 'doc/:id/:phone', component: DocumentationComponent },
  {path: 'followup/:id/:phone', component: FollowupComponent },
  {path: 'review/:id/:phone', component: ReviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DocumentationComponent,
    SetupComponent,
    FollowupComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
