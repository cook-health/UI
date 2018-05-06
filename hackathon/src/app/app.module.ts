import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { DocumentationComponent } from './documentation/documentation.component';
import { FormsModule} from "@angular/forms";
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  {path: 'setup', component: SetupComponent},
  {path: 'doc', component: DocumentationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DocumentationComponent,
    SetupComponent,
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
