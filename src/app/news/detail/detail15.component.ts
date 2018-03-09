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
        2017/10/19 - "BUTTERFLY INNERFORCE ZLC"評測分享
        </div>				
<div class="detailimg">
        <img src="../../../img/detail15/img2.jpg" height="250px" >
        <img src="../../../img/detail15/img1.jpg" height="250px" >
        <img src="../../../img/detail15/img4.jpg" height="250px" >

        </div>
        <p class="news_content_wrap">
        【作者：潘孟祈】
        </p>
<p class="news_content_wrap">
--- 貨真價實的纖維板,活力滿分。---

蝴蝶新內力系列出來好一陣子了，從一開始的石川佳純使用ALC底板，直到最近韓國選手李尚叔及其他國家選手也開始使用內力ALC，在此可以肯定的是，蝴蝶這一次在內力的改良上是成功的。
評測開始前先簡述小弟用了快一年半的主戰拍內力ALC，板重87g，正手TIBHAR K1 PLUS，反手Xiom vega Europe DF，厚度皆為特厚。本次要評測的ZLC，板重89g，配皮亦是使用同樣的配置(正手TIBHAR K1 PLUS，反手Xiom vega Europe DF)。
一.正手擊球：
對新內力ZLC擊打時第一印象是，感覺就單純纖維交換而已啊！？接著繼續打了30分鐘，沒錯，這兩支差別單純在於纖維上的改變，面材、力材及大芯在感覺上皆沒有太大的差異，但這也是蝴蝶的功夫所在，兩支相差0.2mm又不同纖維的拍子要如何達到如此差異，絕對不是單純交換纖維這麼簡單。
ALC出球乾脆、果斷，拍子本身形變不會過於拖泥帶水，咬球時間對業餘球友來說是非常足夠的。
ZLC出球相對來說柔和許多，球陷入拍子再噴出去的形變非常非常清晰，整體來說拍子本身不會太噴，擋球借力等等都非常好上手。
二.反手擊球：
與正手擊球感大同小異，必須說的是由於ZLC的特性，讓反手在快撕或撥球時，摩擦的手感比ALC有數，較能感覺到短時間內拍子咬球並將球送出的過程，穩定度相對好一些。
三.實戰：
兩支拍子在擺長和擺短的手感上，差異不大，短時間內即可適應。要說ZLC十全十美是不可能的，有優點就有缺點，ZLC在處理空球、不轉球或借不到力的『台內球』時，包含挑打、擰球等回擊，非常考驗使用者本身的技術，由於形變長，在處理上述類型的來球時，前進力量太多會噴，力量太少則會掛網，這是非常需要花時間去掌握的地方，而ALC則中規中矩，出多少力球就前進多少，這一點在ALC反而比較得心應手。
相對的，在近台相持上，ZLC則出色許多，容錯率高，除非自己沒對到球，否則基本上球都很穩質量也不錯，小弟認為這支非常適合女生打進台擺速相持，舊版被譽為張怡寧女王的權杖，實至名歸。最後，是中遠台對拉，則是ALC出色，ZLC對拉弧線高，質量速度沒有ALC來的頂又快，但一場比賽中3~5分的對拉，基本上還是可以應付的。
四.後記：
最後做一個簡單的總結，每一支拍子都有適合的打法，建議球友還是直接拿到拍子打過一陣子後，再去決定自己適不適合。得分手段多為近台相持者適合INNERFORCE LAYER-ZLC
得分手段多為高質量進攻者適合INNERFORCE LAYER-ALC
兩支拍子皆有讓小弟印象深刻的地方，ALC有的ZLC沒有，ALC沒有的ZLC卻表現出色，經過這陣子的使用小弟是喜歡INNERFORCE LAYER-ZLC這支拍子的，就算不會是主戰拍，也會收藏起來偶爾拿出來把玩，它獨特的手感非常值得一試。
</p>


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

export class Detail15Component implements OnInit{
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
