import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.css']
})
export class CategoryNewsComponent implements OnInit {

  constructor(public http:HttpServiceService) { 

  }

  ngOnInit(): void {
  }
  newsDetail(url:string){
    window.open(url)
  }

}
