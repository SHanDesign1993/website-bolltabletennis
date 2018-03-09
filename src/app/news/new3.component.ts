import {Component, OnInit} from "@angular/core";
import {New} from "./new";
import {NewService} from "./new.service";
import {Router} from "@angular/router";
@Component({
  template:`    
    <div class="big-about">
       
        <div class="middle-box"><br>
        <h2>最新消息</h2><br>
        <div class="line-about"></div><br>
        <p>關於本店近況及商品的最新消息皆會在此不定期發佈！！！
        </p>
        </div></div>
        <div class="container">
        <div class="title-clothes">
        <div class="title-clothes-line"></div>最新消息<div class="title-clothes-line2"></div>
        </div>

        <div class="cool"><button class="changefont" (click)="gotoDetail3()">2017-06-18<span class="category">情報</span><p class="cool2"></p>WTTC 2017 Duesseldorf andro商品展示會</button></div> <br><br>
        

        <div class="pagination">
          <a (click)="gotoNew2()">&laquo;</a>
          <a (click)="gotoNew()">1</a>
          <a (click)="gotoNew2()">2</a>  
          <a (click)="gotoNew3()" class="active">3</a>        
          <a>&raquo;</a>
        </div>
        
       </div>
      
    `,
  providers:[NewService],
  styles: [`    
    .cool button{
    float: left;
    background-color: white;
    margin-left: 30px;
    border: none;
    
    }
    
    .cool{
    width:700px;
    font-size: 18px;
    font-weight: bold;
    }
    
   
    .container{
    margin-bottom: 30px;
    }
    
    `],
  inputs:['ptitle','pcontent']

})

export class New3Component implements OnInit{
  constructor(private newservice:NewService,private router:Router){}
  new:New[];
  errorMessage:string;
  public ptitle:string;
  public pcontent:string;

  ngOnInit(){
    this.getNews();
  }

  select2(title:string,content:string){
    this.newservice.add(title,content);
  }

  getNews(){
    this.newservice.getNews()
      .subscribe(
        products => this.new = products,
        error =>  this.errorMessage = <any>error);

  }
  gotoNew(){
    this.router.navigate(['new']);
  }

  gotoNew2(){
    this.router.navigate(['new2']);
  }
  gotoNew3(){
    this.router.navigate(['new3']);
  }
  gotoNew4(){
    this.router.navigate(['new4']);
  }
  gotoNew5(){
    this.router.navigate(['new5']);
  }

  gotoNewDetail(){
    this.router.navigate(['newdetail']);
  }

  gotoDetail1(){
    this.router.navigate(['detail1']);
  }
  gotoDetail2(){
    this.router.navigate(['detail2']);
  }
  gotoDetail3(){
    this.router.navigate(['detail3']);
  }
  gotoDetail4(){
    this.router.navigate(['detail4']);
  }
  gotoDetail5(){
    this.router.navigate(['detail5']);
  }
  gotoDetail6(){
    this.router.navigate(['detail6']);
  }
  gotoDetail7(){
    this.router.navigate(['detail7']);
  }
  gotoDetail8(){
    this.router.navigate(['detail8']);
  }
  gotoDetail9(){
    this.router.navigate(['detail9']);
  }
  gotoDetail10(){
    this.router.navigate(['detail10']);
  }
  gotoDetail11(){
    this.router.navigate(['detail11']);
  }
  gotoDetail12(){
    this.router.navigate(['detail12']);
  }
  gotoDetail13(){
    this.router.navigate(['detail13']);
  }
  gotoDetail14(){
    this.router.navigate(['detail14']);
  }
  gotoDetail15(){
    this.router.navigate(['detail15']);
  }
  gotoDetail16(){
    this.router.navigate(['detail16']);
  }
  gotoDetail17(){
    this.router.navigate(['detail17']);
  }
  gotoDetail18(){
    this.router.navigate(['detail18']);
  }
  gotoDetail19(){
    this.router.navigate(['detail19']);
  }
  gotoDetail20(){
    this.router.navigate(['detail20']);
  }
  gotoDetail21(){
    this.router.navigate(['detail21']);
  }



}
