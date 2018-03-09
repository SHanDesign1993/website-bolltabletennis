import { Component, OnInit } from "@angular/core";
import { New } from "../new";
import { NewService } from "../new.service";
import { Router } from "@angular/router";
@Component({
  template: `    
    <div class="big-about">
       
        <div class="middle-box"><br>
        <h2>最新消息</h2><br>
        <div class="line-about"></div><br>
        <p>關於本店近況及商品的最新消息皆會在此不定期發佈！！！
        </p>
        </div></div>
        <div class="container">
        <div class="title-clothes">
        2017/10/06 - 蝴蝶牌 BUTTERFLY 2017 秋冬新產品目錄發行囉！

        </div>				
        
        <p class="news_content_wrap">
        目錄封面是吉村選手，吉村真晴與石川佳纯2017於德國杜塞爾多夫舉行的世乒賽冠亞軍戰落後1：3下，連勝3局逆轉勝陳建安與鄭怡靜4：3，奪下世乒賽混雙冠軍。
        吉村真晴是一位混血兒，他的母親是菲律賓人，他名字中真晴maharu在他加祿語里的意思是*愛*。
        吉村真晴的父親是以前也是一位桌球運動員，後來在當地的一家桌球俱樂部當教練。  
        </p>
         <p class="news_content_wrap">      
         <a href="https://www.butterfly.co.jp/catalog/" target="_blank">蝴蝶牌 BUTTERFLY 2017 秋冬新產品目錄</a><br> 
         <br> 
         </p>


        <div class="detailimg">
        <img src="../../../img/detail8/BTYcatalog.jpg" height="350px" class="detailmiddleimg">
        <img src="../../../img/detail8/BTYpic.jpg" height="350px" class="detailmiddleimg">

        </div>
         
               <p class="news_content_wrap">
        "加碼活動"同時開跑,即日起至10月底，凡於門市購買任何品牌產品滿$1000元，即送蝴蝶牌40+塑料球一盒 ( 價值$130元 ), 敬請多多支持與指教~~ <br>
        <br> 
        </p>

        <div class="detailimg">
        
        <img src="../../../img/detail8/BTYball.jpg" height="350px" class="detailmiddleimg">
        </div>


        
        
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
  inputs: ['ptitle', 'pcontent']

})

export class Detail8Component implements OnInit {
  public ptitle: string;
  public pcontent: string;
  constructor(private newservice: NewService, private router: Router) { }
  ngOnInit() {
    this.ptitle = this.newservice.getTitle()
    console.log(this.ptitle)
    this.pcontent = this.newservice.getContent()
  }
  gotoNew2() {
    this.router.navigate(['new2']);
  }
  Facebook() {
    void (window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href))));
  }

  Google() {
    void (window.open('https://plus.google.com/share?url='.concat(encodeURIComponent(location.href))));
  }

  Twitter() {
    void (window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(location.href))));
  }

}
