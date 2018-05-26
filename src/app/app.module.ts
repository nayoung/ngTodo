import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import { AngularComponent } from './angular/angular.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';

const route: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent},  // / 에 대해서 home이됨
      // {path: 'home', component: HomeComponent},  // /home/
      {path: 'jquery', component: JqueryComponent}, // /jquery/
      {path: 'angular', component: AngularComponent} // /angular/
      ]}
  // { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
