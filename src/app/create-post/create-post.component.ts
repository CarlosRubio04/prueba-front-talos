import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  Data: any = {};
  Tag: string = '';
  Tags: any = [];
  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  addTag() {
    this.Tags.push(this.Tag);
    this.Tag = '';
  }
  removeTag(i) {
    this.Tags.splice(i, 1);
  }
  saveData() {
    this.Data.tags = this.Tags;
    this.mainService.createPost(this.Data);
  }
}
