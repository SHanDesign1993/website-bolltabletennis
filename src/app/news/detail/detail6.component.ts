import {Component, OnInit} from "@angular/core";
import {New} from "../new";
import {NewService} from "../new.service";
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
        2017/08/11 - Palio 拍里奧新材料ABS 40+ 一星級訓練用球

        </div>				
        <div class="detailimg">
        <img src="../../../img/detail6/img1.png" height="200px" class="detailsmallimg">
        <img src="../../../img/detail6/img2.png" height="200px" class="detailsmallimg">
        <img src="../../../img/detail6/img3.png" height="200px" class="detailsmallimg">

        </div>
        <p class="news_content_wrap">
        C/P值超乎想像的新材料ABS 40+ 一星級訓練用乒乓球 ㊙小編摸著良心激推，專業球隊[人士]必買!!!㊙ 識貨的教練請看過來~~~ 詢問度非常高的新材料練習球，價格老是居高不下，Palio 拍里奧新材料ABS 40+ 一星級訓練用乒乓球，補足了您的需求。 材質是ABS的，有日製比賽球的FU，球感硬且爽快，聲音高亢，挺耐打的，感覺不易操壞，重點是價格不高,非常親民，一盒120顆只賣$600，"蝦咪"??? 平均一顆只要5元 .....

</p>
        
       <button class="sharebutton" (click)="Facebook()"><img src="../../../img/fb-live-map_2.png" width="60px"></button>
       <button class="sharebutton" (click)="Google()"><img src="../../../img/photo.jpg" width="50px"></button>
       <button class="sharebutton" (click)="Twitter()"><img src="../../../img/Twitter.png" width="50px"></button>
      
       </div>
       
       
       
       <div class="new_button" style="text-align: center;margin-bottom: 30px;width:150px;margin:auto;margin-bottom:30px;">
       <button style="color: white;background-color: #CC3366;border: none;" (click)="gotoNew2()">回到最新消息</button></div>
    `,
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

export class Detail6Component implements OnInit{
  public ptitle:string;
  public pcontent:string;
  constructor(private newservice:NewService,private router:Router){}
  ngOnInit(){
    this.ptitle=this.newservice.getTitle()
    console.log(this.ptitle)
    this.pcontent=this.newservice.getContent()
  }
  gotoNew2(){
    this.router.navigate(['new2']);
  }
  Facebook() {
    void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href)) ));
  }
  Google(){
    void(window.open('https://plus.google.com/share?url='.concat(encodeURIComponent(location.href)) ));
  }

  Twitter(){
    void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(location.href))));
  }


}
