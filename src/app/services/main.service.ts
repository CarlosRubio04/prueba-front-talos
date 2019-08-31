import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  BASE_API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  public getPosts() {
    return this.http.get(this.BASE_API_URL + '/posts');
  }

  public createPost(data) {
    this.http.post(this.BASE_API_URL + '/posts', data)
      .subscribe( res => {
        console.log(res);
      });
  }
}
