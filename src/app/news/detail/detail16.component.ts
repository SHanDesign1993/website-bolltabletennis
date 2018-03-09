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
        2017/10/27 - ⭐BUTTERFLY 波爾ALC底板持續熱銷中⭐
        </div>				
<div class="detailimg">
        <img src="../../../img/detail16/boll1.jpg" height="250px" >
        <img src="../../../img/detail16/img1.jpg" height="250px" >
        <img src="../../../img/detail16/boll2.jpg" height="250px" >

        </div>

<p class="news_content_wrap">
新波爾之劍 — 蝴蝶波爾ALC球拍是一款攻守兼備的底板
高彈性和獨特的打球感，並且搭載了Arylate.Carbon
具有銳利攻擊力和穩定的控制性能，是一款攻守兼備的球拍，使其擁有極高的人氣。
波爾之劍ALC(BOLL ALC)--波爾芳碳再升級
波爾之劍ALC是無機時代波爾芳碳底板的升級產品。
這款為波爾量身打造的底板擁有令人驚豔的“外衣”，整個外觀尤其顏圖案和手柄設計較波爾芳碳有著巨大變化，整體氣質高貴冷豔，令人眼觸心動，完全不馬虎呀!!
也非常適合女性球友與進階球友喔!
歡迎來門市參考喔!

本屆(2017)世界盃，36歲的德國選手波爾連勝林高遠、馬龍，終結了中國男子乒乓隊自2009年以來保持了7年的連冠紀錄。波爾表示：「受到年齡和體力的限制，我在世界盃上的表現不是每次都能達到的，但是我還沒有考慮要結束自己的職業生涯，我想只要身體條件允許，就一直會繼續打下去。2020年的東京奧運會是我的下一個目標。」
</p>

<div class="detailimg">
        <img src="../../../img/detail16/img2.jpg" height="250px" >
        <img src="../../../img/detail16/img3.jpg" height="250px" >
        <img src="../../../img/detail16/img4.jpg" height="250px" >

        </div>


        <button class="sharebutton" (click)="Facebook()"><img src="../../../img/fb-live-map_2.png" width="60px"></button>
       <button class="sharebutton" (click)="Google()"><img src="../../../img/photo.jpg" width="50px"></button>
       <button class="sharebutton" (click)="Twitter()"><img src="../../../img/Twitter.png" width="50px"></button>
       
        
       </div>
       
       
       
       <div class="new_button" style="text-align: center;margin-bottom: 30px;width:150px;margin:auto;margin-bottom:30px;">
       <button style="color: white;background-color: #CC3366;border: none;" (click)="gotoNew()">回到最新消息</button></div>
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

export class Detail16Component implements OnInit{
  public ptitle:string;
  public pcontent:string;
  constructor(private newservice:NewService,private router:Router){}
  ngOnInit(){
    this.ptitle=this.newservice.getTitle()
    console.log(this.ptitle)
    this.pcontent=this.newservice.getContent()
  }
  gotoNew(){
    this.router.navigate(['new']);
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
