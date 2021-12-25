import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private httpService:HttpServiceService) {

  }

  ngOnInit(): void {
  }
  home(){
    this.httpService.newsdata=new Array<any>();
    this.httpService.news().subscribe((data:any)=>{
      this.httpService.newsdata=data.articles;
    })
    
  }

  categoryNews(value:string){
    this.httpService.categoryNews(value).subscribe((data)=>{
      this.httpService.newsdata=new Array<any>();
      this.httpService.newsdata=data.articles
      console.log(this.httpService.newsdata)
    })
  }

}
