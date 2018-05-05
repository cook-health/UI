import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes } from "@angular/router";
import { SetupPatientComponent } from './setup-patient/setup-patient.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamsComponent } from './exams/exams.component';
import { FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '/', component: SetupPatientComponent },
  {path: '/basics', component: BasicInformationComponent },
  {path: '/doc', component: DocumentationComponent },
  {path: '/exams', component: ExamsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SetupPatientComponent,
    BasicInformationComponent,
    DocumentationComponent,
    ExamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
