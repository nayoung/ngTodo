import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../admin.service';
import {NewsVO} from '../../../domain/News.vo';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  news: NewsVO;
  constructor(private roupter: Router, private route: ActivatedRoute, private adminService: AdminService) {}

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
}
