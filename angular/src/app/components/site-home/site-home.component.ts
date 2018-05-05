import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-site-home',
  templateUrl: './site-home.component.html',
  styles: []
})
export class SiteHomeComponent implements OnInit {
  response: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("/api/v1/posts")
      .subscribe(res => { this.response = res })
  }
}
