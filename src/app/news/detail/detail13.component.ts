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
        2017/10/01 - 2017 秋冬新款 STIGA 無領短T排汗衣

        </div>				
        <div class="detailimg">
        <img src="../../../img/detail13/BLAY.JPG" height="200px" class="detailsmallimg">
        <img src="../../../img/detail13/BLAYB.JPG" height="200px" class="detailsmallimg">
        <img src="../../../img/detail13/BLUG.JPG" height="200px" class="detailsmallimg">
        <img src="../../../img/detail13/BLUGB.JPG" height="200px" class="detailsmallimg">


        </div>
        <p class="news_content_wrap">
       穿來穿去總是那幾件😩😩😩
       現在不用擔心囉！
       🔥「 2017 秋冬新款 STIGA 素面無領短T排汗衣」🔥
       火熱上市！
       桌球場上那種熱血
       就讓這件衣服陪你征戰沙場🏐️✌️❤️😎
   
       
       ■ 台灣製
       ■ 吸濕排汗 
       ■ 抗紫外線




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

export class Detail13Component implements OnInit{
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
