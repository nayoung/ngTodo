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
  MatMenuModule, MatPaginatorModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { ViewComponent } from './news/view/view.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'news', component: NewsComponent, children: [
          {path: ':news_id', component: ViewComponent}  // news/1
          //  {path: 'view/:news_id', component: ViewComponent} // news/view/1
        ]}
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
    MatExpansionModule,
    MatPaginatorModule
  ],
  declarations: [HomeComponent, NewsComponent, IndexComponent, ViewComponent]
})
export class AdminModule { }
