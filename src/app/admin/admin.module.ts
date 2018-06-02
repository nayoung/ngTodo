import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { IndexComponent } from './index/index.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'news', component: NewsComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ],
  declarations: [HomeComponent, NewsComponent, IndexComponent]
})
export class AdminModule { }
