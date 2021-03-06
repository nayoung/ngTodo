import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../admin.service';
import {NewsVO} from '../../../domain/News.vo';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ViewDialogComponent} from './view-dialog/view-dialog.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  news: NewsVO;
  constructor(private router: Router, private route: ActivatedRoute, private adminService: AdminService,
              private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit() {
    /* console.log('view init = ' + this.router.url);
    *  목록클릭시마다 console.log는 1번만 찍힌다
    *  같은 url로 갔을때는 컴포넌트가 파괴->생성이 안되고 유지되어  RX에의해 감지되어 처리된다.
    *  subscribe가 감지...
    * */
    this.route.params
      .subscribe(params => {
          // console.log(params);
          // console.log(params['news_id']);
          const news_id = +params['news_id'];  // +는 스트링을 숫자로 변환시켜줌
          this.findOneNews(news_id);
      });
  }

  findOneNews(news_id: number) {
    this.adminService.findOneNews(news_id)
      .subscribe(body => {
        // console.log(body);
        this.news = body;
      });
  }
  popupDelete() {
    this.dialog.open(ViewDialogComponent, {data: {content: `${this.news.title}를 삭제하시겠습니까?`}})
      .afterClosed().subscribe(data => {
        console.log(data);
        if (data) {
          this.adminService.removeNews(this.news.news_id)
            .subscribe(body => {
              console.log(body);
              if (body['result'] === 0) {
                this.router.navigate(['admin', 'news']);
                // 토스트 메시지 보이기
                this.snackBar.open('삭제되었습니다.', null, {duration: 3000});
              } else {
                this.snackBar.open('삭제에 실패하였습니다.', null, {duration: 3000});
              }
            });
        }
    });
  }
}
