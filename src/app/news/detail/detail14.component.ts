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
        2017/10/15 - 獨 ❗️家 ❗️商 ❗️品 ❗️限時預購～

        </div>				
        
        
        <div class="detailimg">
        <img src="../../../img/detail14/img1.jpg" height="200px" class="detailmiddleimg">
        <img src="../../../img/detail14/img2.jpg" height="200px" class="detailmiddleimg">
        <img src="../../../img/detail14/img3.jpg" height="200px" class="detailmiddleimg">

        </div>
        <p class="news_content_wrap">
        黑色素面黃色Nittaku大logo字排汗衣預購！收單限時36小時！<br> 
        小編超喜歡這種素素的短T，加上日本Nittaku大logo ( 大圖案 )，我們堅持品質平價的理念下，每天都要漂亮出擊！提倡合理無負擔的價格，享受舒適的穿著感受，不論是一般球友，或是小型團服，都非常適合！對於學生也不會有太大的負擔～預購36小時就會結單，別考慮太多，買就對了！

        材質：100%涼感聚酯纖維
        尺寸：2xs-3L
        定價：$900/件 
        實售價：$300/件 
        ⭕️ 預購價：$260/件
        ⭕️ 團購五件售價：$250/件
        滿$1200免運費
        預購時間：10/18 晚上24點為止
        預購方式：請直接私訊小編(line,FB)
        預計到貨日：11月20日
        注意事項：
        ❶不並列其他優惠活動內
        ❷請100%確定購買再下單，下單完成後不能更改任何資料
        ❸此為預購，到貨時間也是預估，請可以等待再購買，急件或無法等待請勿購買
        ❹顏色以實品為主 (只有黃色Nittaku大logo字)
        ❺運費$60請自付
        
        球衣尺寸表(單位:吋)

        </p>


        <div class="detailimg">
        
        <img src="../../../img/detail14/img8.jpg" height="150px" class="detailleftimg">
        </div>
        <p class="news_content_wrap">
        ＊尺寸表僅供參考實際大小以實物為準＊
        </p>
        <br>
        <br>
        <br>
        <br>        
        
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

export class Detail14Component implements OnInit{
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
