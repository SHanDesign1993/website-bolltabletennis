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
        2017/11/14 - STIGA 北極純木五夾 ARCTIC 開箱體驗

        </div>				
        <p class="news_content_wrap">
        【作者：驚嘆號】

        ----- 北極之光，雷霆神器。------

</p>
<p class="news_content_wrap">
在STIGA這兩年研發的底板中，Arctic 北極木大概是最奇特的產品了，在官方的宣傳影片中賦予北極木極度的神祕。Arctic是STIGA VPS家族中的一員，VPS系列都是五夾純木結構，VPS是STIGA近年的自信自豪之作，獨家的木材結合技術使得底板結構中，每一層板材都可以緊密黏合，但同時又不失去手感所需要的活性，並且將傳遞能量所需要的材料特性保留其最大值，意即底板中的板材與黏合層都能充分發揮其性能，沒有贅存與浪費。
</p>
<div class="detailimg">
        <img src="../../../img/detail20/img2.jpg" height="200px" >
        <img src="../../../img/detail20/img3.jpg" height="200px" >
        <img src="../../../img/detail20/img4.jpg" height="200px" >
        </div>
<p class="news_content_wrap">
在VPS系列中，除了Celero的結構是採用科技木力材，其餘各款都是雲杉力材，Arctic北極木也不例外，北極木面材、雲杉力材、阿尤斯大芯，整體手感不脫STIGA的傳統特點，帶著空泛的擊球音與手感，強烈的吞吐感，伴隨力量增加造成的放大效果，以及明顯的形變回復效應。官方公佈北極木的速度值為110，僅次於Emerald VPS（綠檀）的117，略高於Eternity VPS的107，在整個VPS系列中排名第二；控制值為65，僅高於最低的綠檀（控制值63）些許。如不特別看待北極木這特別的材料，Arctic可視為充補VPS系列缺口的一員大將，如果喜愛綠檀手感卻因彈性太好、速度過快難以完全掌控而放棄者，就可以考慮Arctic北極木。 
</p>

<div class="detailimg">
        <img src="../../../img/detail20/img5.jpg" height="200px" >
        <img src="../../../img/detail20/img6.jpg" height="200px" >
        <img src="../../../img/detail20/img7.jpg" height="200px" >
        </div>
<p class="news_content_wrap">
Arctic北極木的速度值雖然僅略低於Emerald VPS綠檀，但是持球感遠遠優於綠檀甚多，官方數據上雖然將其手感列為Stiff（硬），但我個人覺得和時下多數底板相比，實在不算是硬，若定義為中硬度應該比較合適，因為Arctic北極木的持球性能實在是相當出色。如果我們真要去深究Stiff這個字彙，我覺得震手感表現是一大主因，以往持球性能佳的底板常常伴隨著較明顯的震手感，容易影響強力回擊時的穩定性，VPS系列面世之後將這個問題有效降低許多，而Arctic北極木又將高持球力低震手感的特點推向一個高峰，我個人認為這是Arctic北極木最為出色的性能。 
Arctic北極木的尺寸規格是158*151（mm），標準的STIGA大板面，結構雖然是雲杉力材五夾結構，但是厚度高達6.4mm上下，說明這款底板擁有比其它VPS系列底板更高的支撐性以及更大的能量輸出條件，但同樣的，也會需要更好更高的技術要求，否則較難發揮底板具備的絕對性能。此外，Arctic北極木的回球弧線頗有特色，以純粹撞擊手法回球時，球路會略低而短，以先推後拉方式回球時，球路會高而長，從這方面來看，這仍是一款弧圈底板，適合時下流行的先推後拉式弧圈打法的需求。
</p>
<div class="detailimg">
        <img src="../../../img/detail20/img8.jpg" height="200px" >
        <img src="../../../img/detail20/img9.jpg" height="200px" >
        <img src="../../../img/detail20/img11.jpg" height="200px" >
        </div>
<p class="news_content_wrap">
最後補充配膠方案，大多數的底板配置日德系澀套都沒什麼問題，球迷朋友們比較猶豫的往往是搭配狂飈三這類黏性膠皮的效果。就此來說，還是要重申一下，STIGA的底板基本上都能適配於中國製黏性膠皮，這不僅是STIGA設計的目的，更可以說是STIGA底板的靈魂之一了！ 
對了，那個北極木究竟是什麼木材？嗯～有少數人知道，我也受教得知了，但是STIGA官方說了，是祕密，不可說，不可說！
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

export class Detail20Component implements OnInit{
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
