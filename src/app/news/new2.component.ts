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

        <div class="cool"><button class="changefont" (click)="gotoDetail8()">2017-10-06<span class="category">情報</span><p class="cool2"></p>蝴蝶牌 BUTTERFLY 2017 秋冬新產品目錄發行囉！</button></div> <br><br>
        <div class="cool"><button class="changefont" (click)="gotoDetail10()">2017-10-03<span class="category">重要</span><p class="cool2"></p>【中秋節營業時間異動】</button></div> <br><br>
        <div class="cool"><button class="changefont" (click)="gotoDetail13()">2017-10-01<span class="category">新品</span><p class="cool2"></p>2017 秋冬新款 STIGA 無領短T排汗衣</button></div> <br><br>
        <div class="cool"><button class="changefont" (click)="gotoDetail11()">2017-09-22<span class="category">評測</span><p class="cool2"></p>"STIGA AIROC系列"膠皮實測</button></div> <br><br>        
        <div class="cool"><button class="changefont" (click)="gotoDetail2()">2017-08-31<span class="category">情報</span><p class="cool2"></p>日本十大暢銷膠皮排行</button></div> <br><br>
        <div class="cool"><button class="changefont" (click)="gotoDetail6()">2017-08-11<span class="category">新品</span><p class="cool2"></p>Palio 拍里奧新材料ABS 40+ 一星級訓練用球</button></div>  <br><br>
				<div class="cool"><button class="changefont" (click)="gotoDetail7()">2017-07-25<span class="category">重要</span><p class="cool2"></p>【營業時間更改公告】</button></div>	<br><br>
				<div class="cool"><button class="changefont" (click)="gotoDetail4()">2017-07-25<span class="category">評測</span><p class="cool2" ></p>XlOM Musa Asia 五夾純木底板評測分享</button></div>	<br><br>
				<div class="cool"><button class="changefont" (click)="gotoDetail1()">2017-07-06<span class="category">活動</span><p class="cool2"></p>FB現場直播 * 送球拍 * 活動預告</button></div>	<br><br>
				<div class="cool"><button class="changefont" (click)="gotoDetail5()">2017-07-05<span class="category">新品</span><p class="cool2"></p>DONIC BLUE STORM 火熱到貨！！</button></div>	<br><br>
        
        <div class="pagination">
          <a (click)="gotoNew()">&laquo;</a>
          <a (click)="gotoNew()">1</a>
          <a (click)="gotoNew2()" class="active">2</a>  
          <a (click)="gotoNew3()">3</a>        
          <a (click)="gotoNew3()">&raquo;</a>
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

export class New2Component implements OnInit{
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
