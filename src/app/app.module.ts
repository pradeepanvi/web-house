import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from "@angular/material/radio";

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "./shared/shared.module";
import { BannerComponent } from './home/banner/banner.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { AboutComponent } from './home/about/about.component';
import { WhatWeDoComponent } from './home/what-we-do/what-we-do.component';
import { ContactComponent } from './home/contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ListComponent } from './portfolio/list/list.component';
import { DetailComponent } from './portfolio/detail/detail.component';
import { StartProjectComponent } from './start-project/start-project.component';
import { EditComponent } from './portfolio/edit/edit.component';
import { ProjectService } from "./shared/project.service";
import { DataStorageService } from "./shared/data-storage.service";

const appRoute: Routes = [
  { path:'', component:HomeComponent },
  { path:'portfolio', component: PortfolioComponent, children: [
    { path:'', component: ListComponent},
    { path:':id', component: DetailComponent},
    { path:':id/edit', component: EditComponent}
  ]},
  { path:'start-project', component:StartProjectComponent },
  { path:'new', component: EditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    ProjectsComponent,
    AboutComponent,
    WhatWeDoComponent,
    ContactComponent,
    PortfolioComponent,
    ListComponent,
    DetailComponent,
    StartProjectComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule,
    HttpModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ],
  providers: [ProjectService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
