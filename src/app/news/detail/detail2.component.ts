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
        2017/08/31 - 日本十大暢銷膠皮排行

        </div>				
        <div class="detailimg">
        
        <img src="../../../img/detail2/img1.png" height="400px" class="detailbigimg" >
        </div>
        <p class="news_content_wrap">
        很多球友，最常問的問題就是板子配甚麼膠皮比較好打，小編整理了106年七月份   日本乒乓王國雜誌關於日本十大暢銷膠皮排行，給大家參考，不知大家是否都有使用過？也歡迎您可以提出不同建議給其他球友感受感受       
俗話說好馬配好鞍，對於廣大球友來說，如何給自己的桌球拍配置兩面適合自己打法的膠皮卻是件頭疼的事，昂貴的膠皮貼到昂貴的球拍上能發揮出多少威力，很多桌球友們在這上面花費了大量的金錢與時間卻始終不得其解。
在衡量一塊膠皮時，一般根據膠皮粘澀、海綿彈性進行分類。粘性的膠皮（傳統大陸皮）速度欠缺但具有旋轉方面的優勢，並且普遍彈性不是很好，而澀性膠皮速度方面具有優勢。「膠皮品牌繁多，適合自己的就是最好的」      
<a href="http://world-tt.com/ps_goods/goods_ranking.php  " target="_blank">http://world-tt.com/ps_goods/goods_ranking.php  </a>
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

export class Detail2Component implements OnInit{
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
