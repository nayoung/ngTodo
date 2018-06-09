import { Component, OnInit } from '@angular/core';
import {NewsVO} from '../../../domain/News.vo';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  news = new NewsVO();
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addNews() {
    this.adminService.addNews(this.news)
      .subscribe(body => {
        console.log(body);

      });

  }
}
