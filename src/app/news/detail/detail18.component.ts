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
        2017/11/09 - ㊣ Arctic Wood ㊣ STIGA底板 新品上市
        </div>				
<div class="detailimg">
        <img src="../../../img/detail18/img2.jpg" height="150px" >
        <img src="../../../img/detail18/img1.jpg" height="150px" >
        <img src="../../../img/detail18/img7.jpg" height="150px" >
        </div>

<p class="news_content_wrap">
STIGA ㊣ 新品上市，火熱促銷，歡迎試打比較🏓🏓🏓⏰⏰💪💪💪👏👏👏

STIGA Arctic Wood底板~~( 特價$2600，再送比賽球一盒。)
北極寒劍-STIGA七劍壓軸大作
隨著 Arctic Wood（STIGA北極木）的亮相，“七劍”終於不再有任何秘密，然而這款壓軸之作與眾不同，似乎它天生自帶玄幻屬性，等待使用者去挖掘。
STIGA北極木 Arctic Wood
厚度：5.5-5.9mm
重量：80-89g
板面大小：157*150
STIGA 從未停止過對新木材挖掘的腳步，從早期的黑檀、玫瑰等產品一直在不斷探索純木的新領域，或許是瑞典高緯度的寒冷激發了STIGA 的靈感：哪些耐得住冰雪侵襲的木材，一定別有一番風味。
STIGA 北極木 Arctic Wood 底板的面材取材於寒冷的北極圈，工程師並未透露具體木材種類因此顯得更加神秘，不過可以肯定的是，此木材由於生長地區氣候極為乾冷，因此相比一般的木材顯得更加堅韌，且有關的表面也暗示了其較強的抗腐蝕能力，同時不易粘髒，一塵不染的外觀看上去頗為高冷。由於球板面材色澤交淺，因此STIGA 在設計STIGA 北極木Arctic Wood底板的外觀時充分考慮到了手柄的顏色和麵材顏色的統一，球板整體為淡木色，拍柄上僅有兩條豎裝拼花作為點綴，整體風格樸素耐看。
不一樣的“VPS”:
VPS技術（Veneer Precision System）是近年來被STIGA廣泛應用在純木五夾上的一項技術，從最初的鑽石到如今STIGA 北極木 Arctic Wood 底板，VPS技術已經經歷5代產品，愈發成熟，其目的在於強化球板力材的硬度，從而起到加強球板剛性的效果。相比硬木系列，VPS系列的“斷檔”現象較為平淡，大力門檻有所降低，因此受到不少業餘愛好者的追捧。STIGA 北極木 Arctic Wood底板的面材雖然硬度較高，但是嚴格來說還算不上硬木的範疇，因此手感介於鑽石與翡翠之間，發力檔位更齊全，實戰效果全能。
犀利寒劍:
敲擊STIGA 北極木 Arctic Wood 底板，聲音清脆而有力，由於球板脫板速度偏快，上手之後的速度感也屬於上乘，幾乎不亞於主流的纖維板，在中小力量下，面材與力材的作用非常明顯，強強聯合下，球板的支撐力極好，突擊優勢明顯，然而，STIGA 北極木 Arctic Wood 底板更出才的底板還是在發力之後：越發力，手感越柔和，弧線越飽滿，用於衝殺快感十足，令人驚喜的是，STIGA 北極木Arctic Wood 底板的台內球十分易控，這得益面材較高的硬度，在輕微力量下不易發生形變而產生的多餘的彈性，且手感傳遞清晰，利於控制落點。進可攻、退可守，能屈能伸的STIGA 北極木 Arctic Wood 底板不愧是來自北極圈的寒劍，刀鋒出鞘，遍有絲絲寒意襲來。
</p>

<div class="detailimg">
        <img src="../../../img/detail18/img5.jpg" height="150px" >
        <img src="../../../img/detail18/img4.jpg" height="150px" >
        <img src="../../../img/detail18/img6.jpg" height="250px" >
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

export class Detail18Component implements OnInit{
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
