import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from "../../Services/http-service.service";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data:Array<any>
  constructor(private httpService:HttpServiceService, private nav:NavbarComponent ) {
    this.data=new Array<any>();
    this.httpService.news().subscribe((data:any)=>{
      this.data=data.articles;
      console.log(this.data)
    })
   }
  

  ngOnInit(): void {
  }
  newsDetail(url:any){
    // this.httpService
    window.open(url)
    
  }

}
