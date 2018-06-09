import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private roupter: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    /* console.log('view init = ' + this.router.url);
    *  목록클릭시마다 console.log는 1번만 찍힌다
    *  같은 url로 갔을때는 컴포넌트가 파괴->생성이 안되고 유지되어  RX에의해 감지되어 처리된다.
    *  subscribe가 감지...
    * */
    this.route.params
      .subscribe(params => {
          console.log(params);
          console.log(params['news_id']);
          const news_id = +params['news_id'];  // +는 스트링을 숫자로 변환시켜줌
          this.findNews(news_id);
      }
      );
  }

  findNews(news_id: number) {

  }
}
