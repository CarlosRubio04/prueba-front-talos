import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  Id: string;
  Post: any = {};
  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.mainService.getPost(this.Id).subscribe( res => {
      this.Post = res;
    });
  }

}
