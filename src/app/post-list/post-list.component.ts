import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  Posts: any = [];
  Base_Url_Img: string = 'localhost:3000/';
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getPosts().subscribe( res => {
      console.log(res);
      this.Posts = res;
    });
  }

}
