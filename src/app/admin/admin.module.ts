import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { IndexComponent } from './index/index.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatExpansionModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { ViewComponent } from './news/view/view.component';
import { WriteComponent } from './news/write/write.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { ViewDialogComponent } from './news/view/view-dialog/view-dialog.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'news', component: NewsComponent, children: [
          {path: 'write', component: WriteComponent},
          {path: ':news_id', component: ViewComponent},  // news/1
          //  {path: 'view/:news_id', component: ViewComponent}, // news/view/1
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
    MatPaginatorModule,
    CKEditorModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [HomeComponent, NewsComponent, IndexComponent, ViewComponent, WriteComponent, ViewDialogComponent],
  entryComponents: [ViewDialogComponent]
})
export class AdminModule { }
