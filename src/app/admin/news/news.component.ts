import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';
import {NewsVO} from '../../domain/news.vo';
import {PageVo} from '../../domain/Page.vo';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList: NewsVO[];
  page = new PageVo(0, 5, 0);

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.findNews();
  }

  findNews() {
    const params = {
      start_index: this.page.pageSize * this.page.pageIndex,
      page_size: this.page.pageSize
    };
    this.adminService.findNews(params)
      .subscribe(body => {
        // console.log(body);
        this.newsList = body.data;
        console.log(this.newsList);
        this.page.totalCount = body.total;
      });
  }

  pageChanged(event: any) {
    console.log(event);
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.findNews();
  }
}
