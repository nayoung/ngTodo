import {Component, OnInit} from '@angular/core';
import {NewsVO} from '../../../domain/News.vo';
import {AdminService} from '../../admin.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  news = new NewsVO();

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
  }

  addNews() {
    this.adminService.addNews(this.news)
      .subscribe(body => {
        console.log(body);
        if (body['result'] === 0) {
          this.router.navigate(['admin', 'news']);
        }
      });
  }

  fileChange(event: any) {
    console.log(event.target.files); // show thumbnail

    const reader = new FileReader();
    reader.readAsDataURL((event.target.files[0]));
    reader.onload = () => {
      // formData API를 이용하여 이미지 업로드
      const formData = new FormData();
      formData.append('file', event.target.files[0], event.target.files[0].name);
      // this.thumbnailSrc = reader.result;
      this.adminService.imageUpload(formData)
        .subscribe(body => {
          // console.log(body);
          if (body['result'] === 0) {
            if (this.news.content) {
              this.news.content += `<img src="http://www.javabrain.kr${body['value']}" style="max-width: 100%;">`;
            } else {
              this.news.content = `<img src="http://www.javabrain.kr${body['value']}" style="max-width: 100%;">`;
            }
          }
        });
    };
  }
}
